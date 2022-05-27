import Server from "./api/modules/core/infrastructure/config/server";
import "reflect-metadata";
import { database } from './api/modules/core/infrastructure/persistance/data-source';

const server = new Server();

database.initialize().then(() => {
  server.start();
});

