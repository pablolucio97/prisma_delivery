import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string
}

export function EnsureDeliverymanAuthenticate(
    req: Request,
    res: Response,
    next: NextFunction
) {

    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.send(401).json({
            message: 'Token missing'
        })
    }

    const token = authHeader.split(' ')[1]

    try {
        const { sub } = verify(token, '21aaffe14fd0c752e8675973ac091c91') as IPayload
        req.id_deliveryman = sub
        return next()
    } catch (err) {
        console.log(err)
        return res.send(401).json({
            message: 'Invalid token'
        })
    }

}