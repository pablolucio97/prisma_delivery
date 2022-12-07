import { prisma } from '../../../../database/prismaClient'

interface ICreateDelivery {
    item_name: string
    id_client: string
}

//IN THIS CASE, THE CLIENT CREATES A NEW DELIVERY FOR THE 
//DELIVERYMAN CAN BE AWARE IT

export class CreateDeliveryUseCase {
    async execute({ id_client, item_name }: ICreateDelivery) {
        const delivery = await prisma.deliveries.create({
            data: {
                id_client,
                item_name,
            }
        })

        return delivery
    }
}

