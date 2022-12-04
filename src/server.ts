import express from 'express';
import { routes } from './infra/http/routes';
const app = express();

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
    console.log('Server running on 3333')
})