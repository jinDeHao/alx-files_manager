import express from 'express';
import AppController from '../controllers/AppController';

const router = express.Router();

router.get('/status', (req, res) => {
  res.status(200).send(JSON.stringify(AppController.getStatus()));
});

router.get('/stats', async (req, res) => {
  res.status(200).send(JSON.stringify(await AppController.getStats()));
});

export default router;
