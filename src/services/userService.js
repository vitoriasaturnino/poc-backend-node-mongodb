import getAll from '../models/userModel';

const allUsers = async () => {
  const users = await getAll();
  return users;
};

export default allUsers;
