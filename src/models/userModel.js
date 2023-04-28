import { v4 as newUuid } from 'uuid';
import connection from './mongoConection';

const getAll = async () => {
  const db = await connection();
  return db.collection('users').find().toArray();
};

const createUser = async ({ email, senha }) => {
  const db = await connection();
  const uuid = newUuid();
  await db.collection('users').insertOne({ email, senha, uuid });
  return { email, uuid };
};

const userExists = async ({ email, uuid }) => {
  const db = await connection();
  let user = null;
  if (uuid) {
    user = await db.collection('users').findOne({ uuid });
  } else {
    user = await db.collection('users').findOne({ email });
  }
  return user;
};

export { getAll, createUser, userExists };
