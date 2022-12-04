import { Request, Response, NextFunction } from 'express';
import express from 'express';
import 'express-async-errors'
import { routes } from './infra/http/routes';
const app = express();

app.use(express.json())
app.use(routes)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    })
})

app.listen(3333, () => {
    console.log('Server running on 3333')
})