import "dotenv/config";
import { Client, Attachment } from "discord.js";
import ms from "ms";

const client = new Client({ intents: 32767 });

import { SqlDumper } from "./utils/dumperSQL";
import { channelDumpId, timeToDump } from "./config.json";

client.on("ready", () => {
  console.log("Dumper On");

  const channell = client.channels.cache.get(channelDumpId);

  setInterval(() => {
    SqlDumper();

    setTimeout(async () => {
      if (channell.isTextBased()) {
        channell.send({
          content: `${new Date()}`,
          files: ["./src/sql/sql.sql"],
        });
      }
    }, ms("10s"));
  }, ms(timeToDump));
});

client.login(process.env.TOKEN);
