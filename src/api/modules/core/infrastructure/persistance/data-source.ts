import { DataSource } from 'typeorm';
import envVars from '../config/envVars';

export const database = new DataSource({
  type: "mysql",
  host: envVars.database.host,
  port: envVars.database.port,
  username: envVars.database.user,
  password: envVars.database.password,
  database: envVars.database.name
});