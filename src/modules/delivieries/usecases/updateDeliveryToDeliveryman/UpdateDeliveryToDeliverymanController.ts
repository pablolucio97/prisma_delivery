import { Request, Response } from 'express';
import { UpdateDeliveryToDeliverymanUseCase } from './UpdateDeliveryToDeliverymanUseCase'

export class UpdateDeliveryToDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {

        const { id_deliveryman } = req
        const { id: id_delivery } = req.params

        const updateDeliveryToDeliverymanUseCase = new UpdateDeliveryToDeliverymanUseCase()
        const delivery = await updateDeliveryToDeliverymanUseCase.execute({ id_delivery, id_deliveryman })
        return res.status(201).json(delivery)
    }
}