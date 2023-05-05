import { Router } from 'express';
import {
  getAll,
  newUser,
  deleteUser,
  updateUser,
} from '../controllers/userController';
import { requestLogin } from '../models/userModel';
import verifyToken from '../middleware/usuariomiddleware';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'conected' });
});

routes.get('/users', verifyToken, getAll);

routes.post('/users', verifyToken, newUser);

routes.delete('/users/:id', verifyToken, deleteUser);

routes.put('/users/:id', verifyToken, updateUser);

routes.get('/login', requestLogin);

export default routes;
