const jwt = require('jsonwebtoken');
const config = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');

  console.log(token); // Add this line to check token

  if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded.user;
      next();
  } catch (error) {
      res.status(401).json({ msg: 'Token is not valid' });
  }
};
