import express from 'express';
import { getStatus, getStats } from '../controllers/AppController';

const router = express.Router();

router.get('/status', (req, res) => {
  res.send(JSON.stringify(getStatus()));
});

router.get('/stats', async (req, res) => {
  res.status(200).send(JSON.stringify(await getStats()));
});

export default router;
