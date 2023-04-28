import allUsers from '../services/userService';

const getAll = async (req, res) => {
  const users = await allUsers();
  return res.status(200).json(users);
};

export default getAll;
