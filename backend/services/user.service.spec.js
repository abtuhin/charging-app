import UserService from './user.service';
import User from '../models/User';

jest.mock('../models/User', () => {
  return {
    create: jest.fn(),
    findOne: jest.fn(),
  };
});

const mockUser = {
  firstname: 'ab',
  lastname: 'tuhin',
  email: 'tuhin9pro@gmail.com',
  password: '1234',
};

describe('UserService', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create a new user', async () => {
    User.create.mockResolvedValueOnce({ id: 1, ...mockUser });
    const result = await UserService.createUser(mockUser);
    expect(User.create).toHaveBeenCalledWith(mockUser);
    expect(result).toEqual({ id: 1, ...mockUser });
  });

  it('should throw an error from create', async () => {
    User.create.mockRejectedValueOnce(new Error('Random error from database.'));
    await expect(UserService.createUser(mockUser)).rejects.toThrow('Random error from database.');
  });

  it('should get user by email', async () => {
    User.findOne.mockResolvedValueOnce(mockUser);
    const result = await UserService.getUserByEmail('tuhin9pro@gmail.com');
    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'tuhin9pro@gmail.com' } });
    expect(result).toEqual(mockUser);
  });

  it('should handle non-existent user by email', async () => {
    User.findOne.mockResolvedValueOnce(null);
    const result = await UserService.getUserByEmail('john-doe@gmail.com');
    expect(User.findOne).toHaveBeenCalledWith({ where: { email: 'john-doe@gmail.com' } });
    expect(result).toBeNull();
  });

  it('should throw an error from get user by email', async () => {
    User.findOne.mockRejectedValueOnce(new Error('Random error from database.'));
    await expect(UserService.getUserByEmail(mockUser.email)).rejects.toThrow('Random error from database.');
  });

});
