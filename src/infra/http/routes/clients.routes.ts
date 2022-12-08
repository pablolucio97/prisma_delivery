import { FindClientDeliveriesController } from './../../../modules/clients/deliveries/FindClientDeliveriesController';
import { Router } from 'express'
import { CreateClientController } from '../../../modules/clients/useCases/CreateClientController'
import { EnsureClientAuthenticate } from '../../middlewares/EnsureClientAuthenticate';

const clientRoutes = Router()

const createClientController = new CreateClientController()
const findClientDeliveriesController = new FindClientDeliveriesController()

clientRoutes.post('/', createClientController.handle)
clientRoutes.get('/deliveries', EnsureClientAuthenticate, findClientDeliveriesController.handle)

export { clientRoutes }