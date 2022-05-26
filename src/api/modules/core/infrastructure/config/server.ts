/* eslint-disable no-console */
import express from "express";
import morgan from "morgan";
import envVars from "./envVars";
import cors from "cors";
import helmet from "helmet";
import router from "../http/routes/v1/router";

export default class Server {
  app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.setRouter();
  }

  config(): void {
    this.app.set("port", envVars.port);

    /** Express Middlewares **/

    // request logging. dev: console | production: file
    this.app.use(morgan(envVars.logs));

    // parse body params and attach them to req.body
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // secure apps by setting various HTTP headers
    this.app.use(helmet());

    // enable CORS - Cross Origin Resource Sharing
    this.app.use(cors());

  }

  setRouter(): void {
    // API V1 Routes
    this.app.use("/api/v1", router);
  }

  start(): void {
    this.app.listen(this.app.get("port"), () => {
      console.log("====================================");
      console.log("Server listening on port", this.app.get("port"));
      console.log("====================================");
    });
  }
}
