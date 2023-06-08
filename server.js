import express from 'express';
import * as url from 'url';
import { resolve } from 'node:path';

const app = express();
const PORT = 3000;


const distPath = resolve(url.fileURLToPath(new URL('.', import.meta.url)), './dist');

app.use(express.static(distPath));
app.all('*', (req, res) => {
  res.sendFile(resolve(distPath, 'index.html'));
});
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});