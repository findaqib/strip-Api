import * as express from 'express';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import payRoute from '_app/routes/pay';
dotenv.config();
const app = express();

app.get('/', (req: Request, res: Response): void => {
  res.send('Hello World');
});
app.use('/pay', payRoute);
const port = process.env.PORT || 8000;

app.listen(port, (): void => {
  console.log(`Application is connected with ${port}`);
});
