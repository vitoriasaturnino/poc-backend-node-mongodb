import { Router } from 'express';
import {
  getAll,
  newUser,
  deleteUser,
  updateUser,
} from '../controllers/userController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/users', getAll);

routes.post('/users', newUser);

routes.delete('/users/:id', deleteUser);

routes.put('/users/:id', updateUser);

export default routes;
