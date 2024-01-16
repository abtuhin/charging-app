import UserController from './user.controller';
import userService from '../services/user.service';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

jest.mock('bcrypt');
jest.mock('jsonwebtoken');
jest.mock('../services/user.service', () => {
  return {
    createUser: jest.fn(),
    getUserByEmail: jest.fn(),
  }
});

describe('UserController', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const req = { body: { email: 'test@gmail.com', password: '1234' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      userService.getUserByEmail.mockResolvedValueOnce(null);
      bcrypt.genSalt.mockResolvedValueOnce('salt');
      bcrypt.hash.mockResolvedValueOnce('hashedPassword');
      userService.createUser.mockResolvedValueOnce({ id: 1, email: req.body.email });

      await UserController.createUser(req, res);

      expect(userService.getUserByEmail).toHaveBeenCalledWith(req.body.email);
      expect(bcrypt.genSalt).toHaveBeenCalled();
      expect(bcrypt.hash).toHaveBeenCalledWith(req.body.password, 'salt');
      expect(userService.createUser).toHaveBeenCalledWith({ email: req.body.email, password: 'hashedPassword' });
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        data: { id: 1, email: req.body.email },
        message: 'User created successfully!',
        success: true,
      });
    });

    it('should throw error when user exist', async () => {
      const req = { body: { email: 'test@gmail.com', password: '1234' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      userService.getUserByEmail.mockResolvedValueOnce({email: req.body.email});
      await UserController.createUser(req, res);

      expect(userService.getUserByEmail).toHaveBeenCalledWith(req.body.email);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'This user already exists in the system.',
        success: false,
      });
    });

    it('should throw error', async () => {
      const req = { body: { email: 'test@gmail.com', password: '1234' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      userService.getUserByEmail.mockRejectedValueOnce(new Error('Random error.'));
      await UserController.createUser(req, res);

      expect(userService.getUserByEmail).toHaveBeenCalledWith(req.body.email);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Random error.',
        success: false,
      });
    });
  });

  describe('loginUser', () => {
    let req, res;
  
    beforeEach(() => {
      req = { body: {} };
      res = {
        status: jest.fn(() => res),
        json: jest.fn(),
      };
    });
  
    it('should return user logged in successfully', async () => {
      const mockUser = {
        firstname: 'test',
        lastname: 'test',
        email: 'test@gmail.com',
        password: 'hashed_pass',
      };
  
      userService.getUserByEmail.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(true);
      jwt.sign.mockReturnValue('mockToken');
  
      req.body.email = mockUser.email;
      req.body.password = "1234";
  
      await UserController.loginUser(req, res);
  
      expect(userService.getUserByEmail).toHaveBeenCalledWith(mockUser.email);
      expect(bcrypt.compare).toHaveBeenCalledWith('1234', mockUser.password);
      expect(jwt.sign).toHaveBeenCalledWith({ user: mockUser }, process.env.JWT_ACCESS_TOKEN);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        data: {
          firstname: 'test',
          lastname: 'test',
          email: 'test@gmail.com',
        },
        accessToken: 'mockToken',
        message: 'User logged in successfully',
        success: true,
      });
    });
  
    it('should return User does not exist if the user is not found', async () => {
      userService.getUserByEmail.mockResolvedValue(null);
  
      req.body.email = 'test@gmail.com';
      req.body.password = '1234';
  
      await UserController.loginUser(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'User does not exist.',
        success: false,
      });
    });
  
    it('should return Password did not match if the password is incorrect', async () => {
      const mockUser = {
        firstname: 'test',
        lastname: 'test',
        email: 'test@gmail.com',
        password: 'hash_password',
      };
  
      userService.getUserByEmail.mockResolvedValue(mockUser);
      bcrypt.compare.mockResolvedValue(false);
  
      req.body.email = 'test@gmail.com';
      req.body.password = 'dummy_pass';
  
      await UserController.loginUser(req, res);
  
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Password did not match.',
        success: false,
      });
    });
  
    it('should return Internal server error if an exception occurs', async () => {
      userService.getUserByEmail.mockRejectedValue(new Error('Internal server error.'));
  
      req.body.email = 'test@gmail.com';
      req.body.password = '1234';
  
      await UserController.loginUser(req, res);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error.',
        success: false,
      });
    });
  });
});
