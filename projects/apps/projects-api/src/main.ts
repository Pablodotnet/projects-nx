/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
import { config as dotenvConfig } from 'dotenv';
import path = require('path');

import { router as authRouter} from './app/routes/auth';
import { dbConnection } from './app/db/config';

dotenvConfig();

// Create express server/app
const app = express();

// Connect db
dbConnection();

// Public dir
app.use(express.static(path.join(__dirname, '/public')));

// CORS
app.use(cors());

// Read and parse of body
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Default route to test
app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to projects-api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
