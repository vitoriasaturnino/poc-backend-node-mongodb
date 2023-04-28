import { getAll, createUser, userExists } from '../models/userModel';

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

export { allUsers, create };
