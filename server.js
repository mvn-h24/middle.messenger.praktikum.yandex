import express from 'express';
import {resolve} from 'node:path';

const PORT = 3000;
const saticDirPath = './dist';
const appEntryPoint = resolve('dist', 'index.html');

const app = express();
app.use(express.static(saticDirPath));
app.get('*', (_, res) => res.sendFile(appEntryPoint));
app.listen(PORT);
