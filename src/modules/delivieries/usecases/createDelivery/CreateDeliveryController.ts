import { Request, Response } from "express";
import { CreateDeliveryUsecase } from "./CreateDeliveryUsecase";

export class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { item_name } = request.body
        const { id_client } = request
        const createDeliveryUseCase = new CreateDeliveryUsecase()
        const delivery = await createDeliveryUseCase.execute({ id_client, item_name })
        return response.status(201).json(delivery)
    }
}