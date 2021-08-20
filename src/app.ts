import cors from 'cors';
import express, { Application } from 'express';

import { router } from './api/index';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use('/', router);

export { app };
