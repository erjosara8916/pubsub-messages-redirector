import cors from 'cors';
import express, { Application } from 'express';
import path from 'path';

import { router } from './api/index';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);

export { app };
