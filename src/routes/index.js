import { Router } from 'express';
import getAll from '../controllers/userController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/users', getAll);

export default routes;
