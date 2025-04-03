import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/your_mongodb_name',
  user: process.env.MONGODB_USER,
  password: process.env.MONGODB_PASSWORD,
})); 