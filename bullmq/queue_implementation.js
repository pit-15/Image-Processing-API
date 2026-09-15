import { Queue} from "bullmq";
import redis from "./config/redis.js";
import dotenv from "dotenv";
dotenv.config();

const queue = new Queue("image_processing",{connection:redis});

export default queue;
