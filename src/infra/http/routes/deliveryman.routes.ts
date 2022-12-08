import { Router } from 'express'
import { CreateDeliverymanController } from '../../../modules/deliveryman/useCase/CreateDeliveryman/CreateDeliverymanController'
import { FindAllDeliverymanDeliveriesController } from '../../../modules/deliveryman/useCase/FindAllDeliverymanDeliveries/FindAllDeliverymanDeliveriesController'
import { EnsureDeliverymanAuthenticate } from '../../middlewares/EnsureDeliverymanAuthenticate'

const deliverymanRoutes = Router()

const createDeliverymanController = new CreateDeliverymanController()
const findAllDeliverymanDeliveriesController = new FindAllDeliverymanDeliveriesController()

deliverymanRoutes.post('/', createDeliverymanController.handle)
deliverymanRoutes.get(
    '/my-deliveries',
    EnsureDeliverymanAuthenticate,
    findAllDeliverymanDeliveriesController.handle
)

export { deliverymanRoutes }
