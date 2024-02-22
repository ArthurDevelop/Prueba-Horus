const express = require('express');
const { generateToken } = require('');
const { verifyToken } = require('');
const jwt = require('jsonwebtoken');


function generateToken(user) {
    const payload = {
      id: user.id,
      username: user.username,
      
    };
    return jwt.sign(payload, 'secreto', { expiresIn: '1h' }); 
  }
  
  
  function verifyToken(token) {
    try {
      const decoded = jwt.verify(token, 'secreto');
      return decoded;
    } catch (error) {
      return null;
    }
  }
  
  module.exports = { generateToken, verifyToken };

const app = express();

app.use(express.json());


app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'usuario' && password === 'contraseña') {
    const token = generateToken({ id: 1, username: 'usuario' }); 
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales inválidas' });
  }
});

function authMiddleware(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ error: 'Token no proporcionado' });
    }
  
    const decoded = verifyToken(token);
    if (!decoded) {
      return res.status(401).json({ error: 'Token inválido' });
    }
  
   
    req.user = decoded;
    next();
  }
  
  module.exports = authMiddleware;
