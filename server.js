import express from 'express';
import {fileURLToPath} from 'url';
import {resolve} from 'node:path';

const PORT = 3000;
const saticDirPath = './dist';
const distPath = resolve(fileURLToPath(new URL('.', import.meta.url)), saticDirPath);
const appEntryPoint = resolve(distPath, 'index.html');

const app = express();
app.use(express.static(distPath));
app.all('*', (_, res) => res.sendFile(appEntryPoint));
app.listen(PORT);
