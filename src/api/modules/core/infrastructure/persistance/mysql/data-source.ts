import { DataSource } from 'typeorm';
import envVars from '../../config/envVars';
import { User } from '../../../domain/entities/User';

export const mysqlConnection: DataSource = new DataSource({
  type: "mysql",
  host: envVars.database.host,
  port: envVars.database.port,
  username: envVars.database.user,
  password: envVars.database.password,
  database: envVars.database.name,
  synchronize: true,
  entities: [User]
});