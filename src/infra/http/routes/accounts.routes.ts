import { Router } from 'express'
import { AuthenticateClientController } from '../../../modules/account/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from '../../../modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'

const accountsRoutes = Router()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

accountsRoutes.post('/authenticate/client/', authenticateClientController.handle)
accountsRoutes.post('/authenticate/deliveryman/', authenticateDeliverymanController.handle)

export { accountsRoutes }