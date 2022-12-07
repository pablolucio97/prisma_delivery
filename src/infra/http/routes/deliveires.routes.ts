
import { Router } from 'express';
import { CreateDeliveryController } from '../../../modules/delivieries/usecases/createDelivery/CreateDeliveryController';
import { FindAllWithoutEndDateController } from '../../../modules/delivieries/usecases/findAllWithoutEndDate/findAllWithoutEndDateController';
import { EnsureClientAuthenticate } from '../../middlewares/EnsureClientAuthenticate';
import { EnsureDeliverymanAuthenticate } from '../../middlewares/EnsureDeliverymanAuthenticate';

const deliveriesRoutes = Router()

const createDeliveryController = new CreateDeliveryController()
const findAllWithoutEndDateController = new FindAllWithoutEndDateController()

deliveriesRoutes.post('/', EnsureClientAuthenticate, createDeliveryController.handle)
deliveriesRoutes.get('/without-end-date', EnsureDeliverymanAuthenticate, findAllWithoutEndDateController.handle)

export { deliveriesRoutes };
