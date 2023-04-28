import connection from './mongoConection'

const getAll = async () => {
  const db = await connection();
  return db.collection('users').find().toArray();
};

export default getAll;
