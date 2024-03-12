import redisClient from '../utils/redis';
import dbClient from '../utils/db';

const getStatus = () => {
  return { redis: redisClient.isAlive(), db: dbClient.isAlive() };
};

const getStats = async () => {
  return { users: await dbClient.nbUsers(), files: await dbClient.nbFiles() };
};

export { getStatus, getStats };
