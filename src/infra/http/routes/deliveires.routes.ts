import { Router } from 'express'
import { CreateDeliveryController } from '../../../modules/delivieries/usecases/createDelivery/CreateDeliveryController'
import { EnsureClientAuthenticate } from '../../middlewares/EnsureClientAuthenticate'

const deliveriesRoutes = Router()

const createDeliveryController = new CreateDeliveryController()

//@ts-ignore
deliveriesRoutes.post('/', EnsureClientAuthenticate, createDeliveryController.handle)

export { deliveriesRoutes }