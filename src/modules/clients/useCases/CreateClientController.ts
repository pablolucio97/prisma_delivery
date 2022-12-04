import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
    async handle(req: Request, res: Response): Promise<void> {
        const { username, password } = req.body
        const createClientUsecase = new CreateClientUseCase()
        const result = await createClientUsecase.execute({ username, password })
        res.status(200).json(result)
    }
}