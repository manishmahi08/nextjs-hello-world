import db from '../../lib/db';
import User from '../../models/User';

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();

      res.status(201).json({ message: 'User created', user });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
