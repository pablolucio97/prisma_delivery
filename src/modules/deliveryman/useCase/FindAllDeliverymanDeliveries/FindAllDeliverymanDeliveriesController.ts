import { FindAllDeliverymanDeliveriesUseCase } from './FindAllDeliverymanDeliveries';
import { Request, Response } from "express";

export class FindAllDeliverymanDeliveriesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_deliveryman } = req
        const findAllDeliverymanDeliveriesUseCase = new FindAllDeliverymanDeliveriesUseCase()
        const deliveries = await findAllDeliverymanDeliveriesUseCase.execute(id_deliveryman)
        return res.status(200).json(deliveries)
    }
}