// pages/api/login.js
import db from '../../lib/db';
import User from '../../models/User';

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    console.log(username, password);
    try {
      // Find the user with the provided username in the MongoDB database
      const user = await User.findOne({ "email": username });
      if (!user) {
        // User not found
        return res.status(401).json({ message: 'Login failed' });
      }

      if (password == user.password) {
        // Passwords match, login successful
        // We can generate an authentication token (JWT) and return it here
        return res.status(200).json({ message: 'Login successful', token: 'your_jwt_token_here' });
      } else {
        // Passwords do not match
        return res.status(401).json({ message: 'Login failed' });
      }
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ message: 'Login error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
