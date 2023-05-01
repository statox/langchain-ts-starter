import * as dotenv from "dotenv";

import { baseExample } from "./baseExample.ts";
import { chatExample } from "./chatModel.ts";
import { chomaExample } from "./helpdesk.ts";

dotenv.config();

if (process.env.XXX === "base") {
  baseExample();
  chatExample();
} else {
  chomaExample();
}
