// pages/api/user.js

import db from '../../lib/db';
import User from '../../models/User';

db.on('error', console.error.bind(console, 'connection error:'));

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Fetch all users from the database
      const users = await User.find();
      console.log(users);  
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
