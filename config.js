const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_07_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk5LFxuICAgICAgICA2NixcbiAgICAgICAgOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNzAsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkwLFxuICAgICAgICAzMCxcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDQyLFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA4OCxcbiAgICAgICAgNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2MixcbiAgICAgICAgOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY3LFxuICAgICAgICAyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI5LFxuICAgICAgICAzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM3LFxuICAgICAgICA3MyxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDYyLFxuICAgICAgICA3MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDk1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA2MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlYxc3J4eGJQdzJodW9BeG5HSnJtZHdxZk1JZ3ZaT3VWU1VPRVYzTjU1b1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzE1MjkxNDAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBNTRGODQ2NTk2RDg3NkM4RDQ1N0FEMzg2NTI3NEVFN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE0NjA2MjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MTUyOTE0MDBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjBCQUFBOEUzM0YyM0I1Qzk0QkUwQTlFRTU1NTU1MTQzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTQ2MDYzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTM1pPNV96ZlJYaXVaZkhLT0MxZ0pnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdlZGU0MDRjLWNiMzgtNDBmZi04ZGVmLWEyOGI4NGY1NGRkNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MSxcbiAgICAgIDI1MyxcbiAgICAgIDIzLFxuICAgICAgMTI2LFxuICAgICAgMTIsXG4gICAgICAwLFxuICAgICAgNCxcbiAgICAgIDE5OCxcbiAgICAgIDEwMSxcbiAgICAgIDIxOCxcbiAgICAgIDg4LFxuICAgICAgMjI2LFxuICAgICAgNTQsXG4gICAgICAxNzQsXG4gICAgICA4MyxcbiAgICAgIDIxOSxcbiAgICAgIDQxLFxuICAgICAgOTYsXG4gICAgICAxNjksXG4gICAgICAxNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE1LFxuICAgICAgMTA5LFxuICAgICAgMjA4LFxuICAgICAgMzIsXG4gICAgICA2MCxcbiAgICAgIDYzLFxuICAgICAgMTUzLFxuICAgICAgMjIyLFxuICAgICAgMTc1LFxuICAgICAgODQsXG4gICAgICAyMzQsXG4gICAgICA3MSxcbiAgICAgIDEzMixcbiAgICAgIDI3LFxuICAgICAgODYsXG4gICAgICAxMzIsXG4gICAgICAxNjIsXG4gICAgICAyNTUsXG4gICAgICAxOTUsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBWlA2UDk2M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzE1MjkxNDAwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNjE1MDQwMDc1Njk1MzQ6MTlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSmF5XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWVReXZjSEVJN1A3YlFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFMDJnOHpSNjZoYU4xOXJuMlBiRFhhU1UzcThxWUZuVjhqUjdMdGpCZWdnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm51dng5ZDdXN0hDYUJNN29lL1pSdmlMMVhLM3pnaEtCL01YaWI1eStvYUNUVFFSZDVkSEFPNkFOMXlLSE5sZlVsY3JYS1RKSlFJNlQrUmlIdkQva0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlRoMTBkTWNHOStMbFY1T2xwdzZvZFRrdFF5MDRxVmVaaTh6UHcwY0MxbTI2WEJhQWJ1bUUwa0ZxRXZiVE1IWTkwcUkzZDlhS0RLejVGZ2NWZXVrSkRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcxNTI5MTQwMDoxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTQ2MDYyNSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhCaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSEJoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZmtjOEZCRDhJa1FzeUdtOGtQaUVxdVJ2N3M1L0FuaHZsVTM1SFJDSGRndz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTI5ODIzODE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0NjA2MjgwMjhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
