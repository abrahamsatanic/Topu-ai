//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "628985444974";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1A2OVBTWXd4WEpqRENMeDd6bENRVVFYWlBwZ2ZRSUN5Yjc5dHVVdFcxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHc1OVRnZDNISGFaS1UyRWs4bys2LzRGNlJzVG5CYk9zend1TnIrbkpubz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLUFFISk4yMUMxZWdDUkY1ZzRRZ3BFT2hKeVovYnJBY2xYcFU3ZFpaQ0hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkUnhQV0ZrNUpHV0hlMVFqU3lubnRKZ3lMS0FUUjhpdW5ITHRVb1IwczBBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZHbGIvTkw4ZzUrTEZpMUw2RVdiNkdxaVlrS3lxTFlEVHF5K3VvK2lrbmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB0dWRJOUdtUUlYZWJEM2NUWE5LUVFhcVZJNlY1U3l3SmJLekQ0dncwa0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0NiSCtHY0xxaTlGRXdmV09PaHhKcjl5YXhLcSt5WXAwZWtqOFdXcEpHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ2cyZmd2dS9Za2hvcWN5ZGkrRWVINGNpWVN6OW95M2xvVmVwcmNvcjFTUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl1bFA4TzlpT3BEbG1IYjF6NUFsRTFJRStIbDNyZUwrVFovSG5UYmw5MitQUUpkaVU4YVlIVEUybWhWbThXUEQ3bldZWkZMSU96eFlKVGhVY0xldmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Ik1NK0s2WFVUTlRQTlpyZnZTY3dXWE5SaXRWQWtaWkxGS0t4RytBTVBXN2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdCV0xlRDJNU3pHSVh2MXFuTVdUcEEiLCJwaG9uZUlkIjoiM2JmMDc1ODYtN2Y4NS00NDQ5LWE3ZTUtMTY2MTBkOWRlODcxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9LZzZNU2M3bnpvY1FhRGZmTDBndVo2eVJiYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSXJUcXpmWDlrUUlGeXJqbS9QL3V5TkUyWUU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUUtGQVczWkQiLCJtZSI6eyJpZCI6IjYyODk4NTQ0NDk3NDo1MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLiuLgg8J2UpvCdlJ/wnZSiIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMjF2YmdIRVBMQWxMUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXMHloZGVjU2JCNVV6UmtuVmw1eUFxN00rT2lnVDBVNG94QU9LR2hoQ2hnPSIsImFjY291bnRTaWduYXR1cmUiOiJGL0crUUp3U2trZXNqamxRQjR2WStVM3dSamNXb0lYSlZpNlI1aUVvZjFKdmlDWjdIWDlHZUExMVA0dUdmSGVNMlg0UmZMQ1VxQVEwTVVGci9ZZ3JEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRFhFdDFSaFV0T21BOXhRcTBEZmxMMXZJZUZIQTZsb2t1ai9KTUhCWnJ0U2h6VE03RkRHTDRhWjExQUcvMTJIN1RKaGl6ZjJZKzhsajllNXJaeXp0amc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI2Mjg5ODU0NDQ5NzQ6NTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVnRNb1hYbkVtd2VWTTBaSjFaZWNnS3V6UGpvb0U5Rk9LTVFEaWhvWVFvWSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDAwMDYzOCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNSmEifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
