import { Router } from 'express'
import { AuthenticateClientController } from '../../../modules/account/authenticateClient/AuthenticateClientController'

const accountsRoutes = Router()

const authenticateClientController = new AuthenticateClientController()

accountsRoutes.post('/authenticate/client/', authenticateClientController.handle)

export { accountsRoutes }