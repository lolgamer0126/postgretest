import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app: Express = express();
const port = 8000;
const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(morgan())
app.use(cors(options));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});
app.post('/', (req : Request, res: Response)=>{
  res.json("'text': 'pls work bro i want to sleep'")
})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});