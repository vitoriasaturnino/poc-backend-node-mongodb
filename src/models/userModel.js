/* eslint-disable object-curly-newline */
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';
import connection from './mongoConection';

const SECRET = 'bvewuhviewjvop';

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

const login = async ({ email, senha }) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email, senha });
  return user;
};

const requestLogin = async (req, res) => {
  const { email, senha } = req.body;
  const user = await login ({ email, senha });

  if (!user) return res.status(401).json({ message: 'User not found' });

  const { _id } = user;

  const newToken =jwt.sign(
    {
      userId: _id,
      email,
    },
    SECRET,
    {
      expiresIn: 1440, // one day
    },
  );

  return res.status(201).json({ token: newToken });
};

export { getAll, createUser, userExists, deletUser, updateUser, requestLogin };
