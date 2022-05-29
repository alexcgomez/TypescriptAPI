import Server from './api/modules/core/infrastructure/config/server';
import 'reflect-metadata';

const server = new Server();
server.start();
