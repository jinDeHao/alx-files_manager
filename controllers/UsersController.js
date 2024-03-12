import dbClient from '../utils/db';
import crypto from 'crypto';

class UsersController {
  static postNew = async (req, res) => {
    console.log(req.body);
    try {
      const { email, password } = req.body;
      if (email === undefined)
        return res.status(400).send({ error: 'Missing email' });
      if (password === undefined)
        return res.status(400).send({ error: 'Missing password' });
      const database = dbClient.client.db('files_manager');
      const collection = database.collection('users');
      const existsEmail = await collection.findOne({ email });
      if (existsEmail) return res.status(400).send({ error: 'Already exist' });
      const hpswrd = crypto.createHash('sha1').update(password).digest('hex');
      const document = await collection.insertOne({
        email: email,
        password: hpswrd,
      });
      res.status(201).send({ _id: document.insertedId, email: email });
    } catch (err) {
      res.status(500).send('rwina');
    }
  };

  static getMe = () => {};
}

export default UsersController;
