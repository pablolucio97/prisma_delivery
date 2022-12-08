import { Request, Response } from "express";
import { ListDeliveriesUseCase } from "./ListDeliveriesUseCase";

export class ListDeliveriesController{
    async handle(req: Request, res: Response): Promise<Response>{
        const deliveriesUseCase = new ListDeliveriesUseCase()
        const deliveries = await deliveriesUseCase.execute()
        return res.status(200).json(deliveries)
    }
}