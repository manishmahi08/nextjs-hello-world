export default (req, res) => {
    if (req.method === 'POST') {
      // Perform logout actions
      res.status(200).end();
    } else {
      res.status(405).end();
    }
  };
  