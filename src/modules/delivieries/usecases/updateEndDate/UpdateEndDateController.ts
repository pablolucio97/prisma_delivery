import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpdateEndDateUseCase";

export class UpdateEndDateController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id_delivery } = req.params
        const { id_deliveryman } = req
        const updateEndDateUseCase = new UpdateEndDateUseCase()
        const deliveries = await updateEndDateUseCase.execute({id_delivery, id_deliveryman})
        return res.status(200).json(deliveries)
    }
}