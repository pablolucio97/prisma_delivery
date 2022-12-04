import { Router } from 'express'
import { clientRoutes } from './clients.routes'
import { accountsRoutes } from './accounts.routes'

const routes = Router()

routes.use('/clients', clientRoutes)
routes.use('/accounts', accountsRoutes)

export { routes }