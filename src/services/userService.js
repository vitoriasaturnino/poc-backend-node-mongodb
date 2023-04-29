import { getAll, createUser, userExists, deletUser } from '../models/userModel';

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

export { allUsers, create, destroyUser };
