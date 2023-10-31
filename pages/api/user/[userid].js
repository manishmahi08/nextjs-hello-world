import User from '../../../models/User';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const { userid } = req.query;
      console.log(userid);
      // Fetch user data from the database based on userid
      const user = await User.findOne({ _id: userid });
      console.log(user);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
