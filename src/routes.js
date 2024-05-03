import { Router } from 'express';
import UserContrller from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserContrller.store);

export default routes;
