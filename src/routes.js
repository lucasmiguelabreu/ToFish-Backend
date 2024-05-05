import { Router } from 'express';
import UserContrller from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserContrller.store);
routes.post('/session', SessionController.store);

export default routes;
