import * as dotenv from "dotenv";

import { baseExample } from "./baseExample.ts";
import { chatExample } from "./chatModel.ts";

dotenv.config();

if (process.env.XXX === "base") {
  baseExample();
} else {
  chatExample();
}
