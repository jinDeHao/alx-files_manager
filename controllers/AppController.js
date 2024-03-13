import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(req, res) {
    const redis = await redisClient.isAlive();
    const db = await dbClient.isAlive();
    return res
      .status(200)
      .json({ redis, db});
  }
  static getStats = async (req, res) => {
    return res.status(200).json({
      users: await dbClient.nbUsers(),
      files: await dbClient.nbFiles(),
    });
  };
}

export default AppController;
