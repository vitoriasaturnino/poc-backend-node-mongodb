/* eslint-disable object-curly-newline */
import { ObjectId } from 'mongodb';
import connection from './mongoConection';

const getAll = async () => {
  const db = await connection();
  return db.collection('users').find().toArray();
};

const createUser = async ({ email, senha }) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({ email, senha });
  const { insertedID: id } = user;
  return { email, _id: id };
};

const userExists = async ({ email, id }) => {
  const db = await connection();
  let user = null;
  if (id) {
    user = await db.collection('users').findOne({ _id: new ObjectId(id) });
  } else {
    user = await db.collection('users').findOne({ email });
  }
  return user;
};

const deletUser = async ({ id }) => {
  const db = await connection();
  await db.collection('users').deleteOne({ _id: new ObjectId(id) });
  return { id };
};

const updateUser = async ({ id, email, senha }) => {
  const db = await connection();
  await db
    .collection('users')
    .updateOne({ _id: new ObjectId(id) }, { $set: { email, senha } });
  return { id, email };
};

export { getAll, createUser, userExists, deletUser, updateUser };
