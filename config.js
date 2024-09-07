const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Mozambique/maputo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "+258868754545" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+258868754545";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "+258868754545,258xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Alex service-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "ALEX KING",
  ownername:process.env.OWNER_NAME|| "It'x Alex",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_26_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDk5LFxuICAgICAgICAzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA0MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDc2LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU3LFxuICAgICAgICA2MixcbiAgICAgICAgMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUwLFxuICAgICAgICA3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDM2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDcyLFxuICAgICAgICAzNixcbiAgICAgICAgMjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA1OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjExLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid1JLa0RIeWN0WW5NdnBTK3BabERickhaZWt5bjVWZ0FDVm9jNHRCTTZQND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRTRERTBiUVNTRTYzckoxQnZuNFBFd1wiLFxuICBcInBob25lSWRcIjogXCJhZWQ1OTM1Yi0zMWJiLTQyZDMtYjMxNy02ZDNjNjAxNmMwYjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTI1LFxuICAgICAgMjksXG4gICAgICA5OCxcbiAgICAgIDI0NCxcbiAgICAgIDI0MyxcbiAgICAgIDI1MyxcbiAgICAgIDIzMSxcbiAgICAgIDgwLFxuICAgICAgMjQ3LFxuICAgICAgMTAsXG4gICAgICA4MixcbiAgICAgIDEwNSxcbiAgICAgIDIyMixcbiAgICAgIDE2LFxuICAgICAgNzMsXG4gICAgICAyMjgsXG4gICAgICAxMzgsXG4gICAgICAxNTUsXG4gICAgICAzMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDEwNCxcbiAgICAgIDEzNSxcbiAgICAgIDIwNSxcbiAgICAgIDE4MCxcbiAgICAgIDE5MyxcbiAgICAgIDI1MSxcbiAgICAgIDI1NSxcbiAgICAgIDIwNyxcbiAgICAgIDcwLFxuICAgICAgMTA4LFxuICAgICAgNzEsXG4gICAgICAyNTMsXG4gICAgICAyNTIsXG4gICAgICAyMzMsXG4gICAgICAxMjQsXG4gICAgICAxNDMsXG4gICAgICAzNixcbiAgICAgIDE4NCxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2S0FDODhTQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU4ODY4NzU0NTQ1OjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWxleCBTZXJ2aWNlXCIsXG4gICAgXCJsaWRcIjogXCIyNzYwOTM2MTc2MDY4OTE6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHZIcThFRUVLMjQ4TFlHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJOT2syNEFpVEZQWFZ0N01kalEwOVB3bXJTTlZ2US96bzZ6QzI1aGk5Mmt3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJLY2p2dXpEQ3A0dG5sK3lnak1BcHdUS0dwdDZZa3ZXRVZ1a3BqaDVrUG41L2VDWjdNL3lXVTFQSSszVGI4K3FyT0NFakR5NWVHK3F3Q0t6cFBiY0RnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjRKVWdYUzBQN2VaZXhKaVk4Z25JR1B4UTNCRDNVbUJCczAxb0ppN3ZvK21sRFBhbU5URGpFYzltTFp2ZVREcm4zeTcwM1lLN0poTlQyUENOcjRqWWdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1ODg2ODc1NDU0NToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1NzAxMTcwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTGZEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMZkQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNMjIxZENjSTluTktiZ0FISWxGNVp1T3ZLNkhrL09qRFpPckJPZFlMNTFnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMTA3NzAzNjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTY3NjU1MzAwMFwifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "public",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
