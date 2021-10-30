require('dotenv').config();

const server = require('./app/app');

const { PORT } = process.env.PORT ? process.env : { PORT: 3000 };

server.listen(PORT, () => console.log(`APPLICATION RUNNING ON PORT ${PORT}`));