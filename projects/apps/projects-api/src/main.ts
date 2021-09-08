/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as path from 'path';

import { router as authRouter} from './app/routes/auth';
import { dbConnection } from './app/db/config';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const CLIENT_BUILD_PATH = path.join(__dirname, '../projects-ui');

// Create express server/app
const app = express();

// Connect db
dbConnection();

// Public dir
app.use(express.static(CLIENT_BUILD_PATH));

// CORS
app.use(cors());

// Read and parse of body
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);

// Handle other routes
app.get('*', (request, response) => {
  response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
