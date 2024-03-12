import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus() {
    return { redis: redisClient.isAlive(), db: dbClient.isAlive() };
  }
  static getStats = async () => {
    return { users: await dbClient.nbUsers(), files: await dbClient.nbFiles() };
  };
}

export default AppController;
