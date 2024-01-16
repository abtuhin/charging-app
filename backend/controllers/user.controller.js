import userService from '../services/user.service';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default {
  createUser: async (req, res) => {
    try {
      const isUserExist = await userService.getUserByEmail(req.body.email);
      if (isUserExist) throw new Error("This user already exists in the system.");
      else {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const userRecord = await userService.createUser({...req.body, password: hashedPassword});
        res.status(201).json({
          data: userRecord,
          message: 'User created successfully!',
          success: true,
        }); 
      }    
    } catch (error) {
      return res.status(400).json({ message: error.message, success: false });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userService.getUserByEmail(email);
  
      if (!user) {
        return res.status(400).json({ message: 'User does not exist.', success: false });
      }
  
      const isPasswordMatch = await bcrypt.compare(password, user.password);
  
      if (!isPasswordMatch) {
        return res.status(400).json({ message: 'Password did not match.', success: false });
      }
  
      const jwtToken = jwt.sign({ user }, process.env.JWT_ACCESS_TOKEN);
  
      res.status(200).json({
        data: {
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
        },
        accessToken: jwtToken,
        message: 'User logged in successfully',
        success: true,
      });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error.', success: false });
    }
  }
}
