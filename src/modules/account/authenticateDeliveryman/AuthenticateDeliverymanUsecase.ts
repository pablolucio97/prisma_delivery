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

        const token = sign({ username }, '21aaffe14fd0c752e8675973ac091c91', {
            subject: deliveryman.id,
            expiresIn: '1d'
        })

        return {
            token
        }
    }
}