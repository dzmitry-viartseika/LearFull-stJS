require('dotenv').config();
export const PORT = parseInt(process.env.PORT as string, 10) || 8080;
export const HOST = process.env.HOST ?? '0.0.0.0';

export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URI = process.env.MONGODB_URL;

export const DATABASE_NAME = process.env.DATABASE_NAME ?? 'LearFull'

export default {
    PORT,
    HOST,
    SERVER_URL,
    MONGODB_URI,
}
