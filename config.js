const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, ): "0764340844";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,0764340844";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "0764340844,076xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_36_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgNDksXG4gICAgICAgIDQyLFxuICAgICAgICA0NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxODksXG4gICAgICAgIDY3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY3LFxuICAgICAgICAzMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDc1LFxuICAgICAgICA2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDkyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgODUsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICA2MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NixcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAxOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEsXG4gICAgICAgIDQxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4NixcbiAgICAgICAgMTAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid1gvRUJiVlhvRjJqUFNBUTlUSTVaUVlpMVdjUnlvaDRNS09NUGN4YlBxZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ0sxa2RWMHJUXy1ycHJra0xqM0lwUVwiLFxuICBcInBob25lSWRcIjogXCI3MTExMTQyNy03MDUzLTRkOWMtYjdiOC04ZmM4MjQ2YzAwZTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjgsXG4gICAgICAxOTEsXG4gICAgICAxMzYsXG4gICAgICA0NSxcbiAgICAgIDUsXG4gICAgICAxNzYsXG4gICAgICAxNTAsXG4gICAgICAyMDQsXG4gICAgICAxODMsXG4gICAgICAxMTIsXG4gICAgICA4NyxcbiAgICAgIDEyMSxcbiAgICAgIDEyNCxcbiAgICAgIDEwMixcbiAgICAgIDQyLFxuICAgICAgMTYzLFxuICAgICAgMTQzLFxuICAgICAgMjEsXG4gICAgICAyMjAsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDIsXG4gICAgICA4NCxcbiAgICAgIDE4OCxcbiAgICAgIDIwNSxcbiAgICAgIDIyNCxcbiAgICAgIDIwNCxcbiAgICAgIDE2OSxcbiAgICAgIDI0NixcbiAgICAgIDM0LFxuICAgICAgMzIsXG4gICAgICA1OCxcbiAgICAgIDQsXG4gICAgICAxNTcsXG4gICAgICA4NyxcbiAgICAgIDE3MSxcbiAgICAgIDEzMCxcbiAgICAgIDI2LFxuICAgICAgMjE2LFxuICAgICAgMTkwLFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlc2NTRINU5OXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NDM0MDg0NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE0ODIxOTMyOTQ1NDgwOjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05pVm43QUNFS0NpaXJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib0IzNlBYRHZLRm9oUjl4SmZSQlpJUnNZa1ZqM0ZVaEc5SXplcTEvR2tVcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwMFlaS2paTTZXUHBJSUhWWkljcXA3Y2JsMW9xbVh3UjYzS2VQZDdEN21ROXIwdmt3NTdzN2VJT3B4MVNUSFNSR20rMXUwTzJSWDBKcHIyQit1WHRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJDcWFLVGdvYi9yYThLODhSNjZBV3VyVnFZTUh3OWUzTm9Zb2RVbWhSN3hVMHlPa0VFdXVZbGFKVlFvV0Z1dzlJWjVPSjBBSUNkN0JVQmlUd3hmb0hCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc2NDM0MDg0NDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQxNTc4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU1NYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTU1iLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOUszdzd3R296YlhjTGpLd1NHbSthdFZuQTBrMkh3UUFXbk5ZeTRKdTRiRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MzgwNDQ4ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
