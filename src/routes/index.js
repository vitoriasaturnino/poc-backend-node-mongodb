import { Router } from 'express';
import { getAll, newUser } from '../controllers/userController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/users', getAll);

routes.post('/users', newUser);

export default routes;
