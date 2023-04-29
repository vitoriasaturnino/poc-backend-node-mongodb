import { allUsers, create } from '../services/userService';

const getAll = async (req, res) => {
  const users = await allUsers();
  return res.status(200).json(users);
};

const newUser = async (req, res) => {
  const { email, senha } = req.body;

  const { email: mail, _id } = await create({ email, senha });
  return res.status(200).json({ mail, _id });
};

export { getAll, newUser };
