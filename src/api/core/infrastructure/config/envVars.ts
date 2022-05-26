import dotenv from "dotenv";

dotenv.config();

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  logs: process.env.NODE_ENV === "production" ? "combined" : "dev",
};
