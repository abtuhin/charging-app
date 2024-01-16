import User from '../models/User';

export default {
  createUser: async (user) => {
    try {
      const newUser =  await User.create(user);
      return newUser;
    } catch (error) {
      throw new Error(error);
    }
  },
  getUserByEmail: async (email) => {
    try {
      return await User.findOne({ where : { email }});
    } catch (error) {
      throw new Error(error);
    }
  },
}