import redis from 'redis';

class RedisClient {
  constructor() {
    this.client = redis.createClient();
    this.client.on('error', (err) => {
      console.error(err);
    });
  }
  async isAlive() {
    const alive = false;
    this.client.on('success', () => {
      alive = true;
    });
    return alive;
  }

  async get(key) {
    return await this.client.get(key, (err, reply) => reply);
  }

  async set(key, val) {
    await this.client.set(key, val);
  }

  async del(key) {
    this.client.del(key);
  }
}

export const redisClient = RedisClient();
