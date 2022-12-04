import { prisma } from '../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateClient {
    username: string
    password: string
}

export class CreateClientUseCase {
    async execute({ username, password }: ICreateClient) {
        const clientsExists = await prisma.clients.findFirst({
            where: {
                username: {
                    mode: 'insensitive'
                }
            }
        })

        if (clientsExists) {
            throw new Error('Client already exists')
        }

        const encryptedPassword = await hash(password.toString(), 10)

        const client = await prisma.clients.create({
            data: {
                username,
                password: encryptedPassword
            }
        })

        return client

    }
}