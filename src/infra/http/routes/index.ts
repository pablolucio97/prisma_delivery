import { Router } from 'express'
import { clientRoutes } from './clients.routes'
import { accountsRoutes } from './accounts.routes'
import { deliverymanRoutes } from './deliveryman.routes'

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/accounts', accountsRoutes)
routes.use('/deliveryman', deliverymanRoutes)

export { routes }