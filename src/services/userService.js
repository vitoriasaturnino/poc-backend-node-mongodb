/* eslint-disable object-curly-newline */
import {
  getAll,
  createUser,
  userExists,
  deletUser,
  updateUser,
} from '../models/userModel';

const allUsers = async () => {
  const users = await getAll();
  return users;
};

const create = async ({ email, senha }) => {
  const existingUser = await userExists({ email });

  if (existingUser) return existingUser;

  const user = await createUser({ email, senha });
  return user;
};

const destroyUser = async ({ id }) => {
  const existingUser = await userExists({ id });

  if (!existingUser) return { message: 'User not found' };

  const user = await deletUser({ id });
  return user;
};

const toUpdateUser = async ({ id, email, senha }) => {
  const existingUser = await userExists({ id });

  if (!existingUser) return { message: 'User not found' };

  const user = await updateUser({ id, email, senha });
  return user;
};

export { allUsers, create, destroyUser, toUpdateUser };
