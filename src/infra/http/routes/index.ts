import { Router } from 'express'
import { clientRoutes } from './clients.routes'
import { accountsRoutes } from './accounts.routes'
import { deliverymanRoutes } from './deliveryman.routes'
import { deliveriesRoutes } from './deliveires.routes'

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/accounts', accountsRoutes)
routes.use('/deliveryman', deliverymanRoutes)
routes.use('/deliveries', deliveriesRoutes)

export { routes }