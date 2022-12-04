import { Request, Response } from 'express';
import { AuthenticateDeliverymanUsecase } from './AuthenticateDeliverymanUsecase';

class AuthenticateDeliverymanController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { username, password } = req.body
        const authenticateDeliverymanUsecase = new AuthenticateDeliverymanUsecase()
        const result = await authenticateDeliverymanUsecase.execute({ username, password })
        return res.status(200).json(result)
    }
}

export { AuthenticateDeliverymanController }