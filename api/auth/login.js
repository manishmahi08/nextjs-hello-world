import jwt from 'jsonwebtoken';

export default (req, res) => {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    // Replace this with your authentication logic
    if (username === 'user' && password === 'password') {
      const token = jwt.sign({ username }, 'your-secret-key', {
        expiresIn: '1h',
      });
      res.status(200).json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } else {
    res.status(405).end();
  }
};
