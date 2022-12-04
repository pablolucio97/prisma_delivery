import { prisma } from "../../../database/prismaClient"
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
    username: string
    password: string
}


export class AuthenticateClientUseCase {
    async execute({ username, password }: IAuthenticateClient) {
        const client = await prisma.clients.findFirst({
            where: {
                username
            }
        })

        if (!client) {
            throw new Error('Client not found')
        }

        const passwordMatch = await compare(password.toString(), client.password)

        if (!passwordMatch) {
            throw new Error('Username or password incorrect')
        }

        const token = sign({ username }, 'a134301fdf08baf409af88e39103097b', {
            subject: client.id,
            expiresIn: '1d'
        })

        return {
            token
        }
    }
}