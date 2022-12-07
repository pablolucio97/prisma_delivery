
import { Router } from 'express';
import { CreateDeliveryController } from '../../../modules/delivieries/usecases/createDelivery/CreateDeliveryController';
import { FindAllWithoutEndDateController } from '../../../modules/delivieries/usecases/findAllWithoutEndDate/findAllWithoutEndDateController';
import { UpdateDeliveryToDeliverymanController } from '../../../modules/delivieries/usecases/updateDeliveryToDeliveryman/UpdateDeliveryToDeliverymanController';
import { EnsureClientAuthenticate } from '../../middlewares/EnsureClientAuthenticate';
import { EnsureDeliverymanAuthenticate } from '../../middlewares/EnsureDeliverymanAuthenticate';

const deliveriesRoutes = Router()

const createDeliveryController = new CreateDeliveryController()
const findAllWithoutEndDateController = new FindAllWithoutEndDateController()
const updateDeliveryToDeliverymanController = new UpdateDeliveryToDeliverymanController()

deliveriesRoutes.post(
    '/',
    EnsureClientAuthenticate,
    createDeliveryController.handle
)
deliveriesRoutes.get(
    '/without-end-date',
    EnsureDeliverymanAuthenticate,
    findAllWithoutEndDateController.handle
)
deliveriesRoutes.put(
    '/update-delivery-to-deliveryman/:id',
    EnsureDeliverymanAuthenticate,
    updateDeliveryToDeliverymanController.handle
)

export { deliveriesRoutes };
