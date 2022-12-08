import { prisma } from "../../../../database/prismaClient";

export class ListDeliveriesUseCase{
    async execute(){
        const deliveries = await prisma.deliveries.findMany({})
        return deliveries
    }
}