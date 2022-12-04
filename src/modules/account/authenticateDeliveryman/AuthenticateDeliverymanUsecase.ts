import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { prisma } from '../../../database/prismaClient'

interface IAuthenticateDeliveryman {
    username: string
    password: string
}

export class AuthenticateDeliverymanUsecase {
    async execute({ username, password }: IAuthenticateDeliveryman) {
        const deliveryman = await prisma.deliveryMan.findFirst({
            where: {
                username
            }
        })

        if (!deliveryman) {
            throw new Error('Deliveryman not found')
        }

        const passwordMatch = await compare(password.toString(), deliveryman.password)

        if (!passwordMatch) {
            throw new Error('Username or password incorrect')
        }

        const token = sign({ username }, 'a134301fdf08baf409af88e39103097b', {
            subject: deliveryman.id,
            expiresIn: '1d'
        })

        return {
            token
        }
    }
}