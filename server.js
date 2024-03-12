import express from 'express';
import router from './routes';

const app = express();

const port = process.env.PORT === undefined ? 5000 : process.env.PORT;

app.use(router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
