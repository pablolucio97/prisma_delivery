import { hash } from "bcrypt"
import { prisma } from "../../../database/prismaClient"

interface ICreateDeliveryman {
    username: string
    password: string
}

export class CreateDeliverymanUseCase {
    async execute({ username, password }: ICreateDeliveryman) {
        const deliverymanExists = await prisma.deliveryMan.findFirst({
            where: {
                username: {
                    mode: 'insensitive'
                }
            }
        })

        if (deliverymanExists) {
            throw new Error('Deliveryman already exists')
        }

        const encryptedPassword = await hash(password.toString(), 10)

        const deliveryMan = await prisma.deliveryMan.create({
            data: {
                username,
                password: encryptedPassword
            }
        })

        return deliveryMan
    }
}