import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string
}

export function EnsureClientAuthenticate(request: Request, response: Response, next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
        return response.status(401).json({
            message: 'Token missing'
        })
    }

    const [, token] = authHeader.split(' ')

    try {
        const { sub } = verify(token, 'a134301fdf08baf409af88e39103097b') as IPayload

        request.id_client = sub

        return next()

    } catch (error) {
        console.log(error)
        return response.status(401).json({
            message: 'Invalid token'
        })
    }
}