import * as express from 'express';
import { payOrder } from '_app/controller/pay';

const router = express.Router();

router.post('/', payOrder);

export default router;
