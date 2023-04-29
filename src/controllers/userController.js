/* eslint-disable object-curly-newline */
import {
  allUsers,
  create,
  destroyUser,
  toUpdateUser,
} from '../services/userService';

const getAll = async (req, res) => {
  const users = await allUsers();

  const id = '_id';

  const newUsersList = users.map((user) => ({
    email: user.email,
    _id: user[`${id}`],
  }));

  return res.status(200).json(newUsersList);
};

const newUser = async (req, res) => {
  const { email, senha } = req.body;

  const { email: mail, _id } = await create({ email, senha });
  return res.status(200).json({ mail, _id });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = await destroyUser({ id });
  return res.status(200).json(user);
};

const updateUser = async (req, res) => {
  const { email, senha } = req.body;
  const { id } = req.params;
  const { email: mail, _id } = await toUpdateUser({ id, email, senha });
  return res.status(200).json({ mail, _id });
};

export { getAll, newUser, deleteUser, updateUser };
