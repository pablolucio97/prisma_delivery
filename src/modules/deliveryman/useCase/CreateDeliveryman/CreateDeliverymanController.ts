import { Request, Response } from "express";
import { CreateDeliverymanUseCase } from "./CreateDeliverymanUsecase";

export class CreateDeliverymanController {
    async handle(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body
        const createDeliverymanUseCase = new CreateDeliverymanUseCase()
        const result = await createDeliverymanUseCase.execute({ username, password })
        res.status(200).json(result)
    }
}