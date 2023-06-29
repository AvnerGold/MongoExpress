require('dotenv').config();
const express = require('express');
const bycrypt = require('bcrypt');
const path =require('path');
const cors = require('cors');
const PORT = process.env.PORT || 5500;

let server = express();
server.use(express.json());
server.use(cors());

server.use('/api/users', require('./routes/user.route'))
server.use('/api/sales', require('./routes/sale.route'))


server.listen(PORT, () => console.log(`http://localhost:${PORT}`))