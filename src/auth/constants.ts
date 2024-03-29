import { config } from 'dotenv';

config();

export const jwtConstants = {
  secret: process.env.SECRET_AUTH,
};

export const roles = ['admin', 'client'];
