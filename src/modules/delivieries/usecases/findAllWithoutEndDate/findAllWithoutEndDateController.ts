import { Request, Response } from "express";
import { FindAllWithoutEndDateUseCase } from "./findAllWithoutEndDateUseCase";

export class FindAllWithoutEndDateController {
    async handle(req: Request, res: Response): Promise<Response> {
        const findAllWithoutEndDateUseCase = new FindAllWithoutEndDateUseCase()
        const deliveries = await findAllWithoutEndDateUseCase.execute()
        return res.status(200).json(deliveries)
    }
}