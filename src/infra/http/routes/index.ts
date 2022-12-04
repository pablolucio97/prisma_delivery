import { Router } from 'express'
import { clientRoutes } from './routes'

const routes = Router()

routes.use('/clients', clientRoutes)

export { routes }