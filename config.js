const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "puri",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "ninte appan",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "punde",
  "chod",
  "umban",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Queen nezuko ", 
  author: process.env.Author || "@whoois.zenitsu",
  packname: process.env.PackName || "Queen nezuko md",
  socialLink: process.env.Web || "https://github.com/godzenitsu",
  footer: process.env.Footer || "© Queen nezuko",
  prefa: process.env.Prefix || [','],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "𝗚𝗢𝗗 𝗭𝗘𝗡𝗜𝗧𝗦𝗨",
  ownernumber: process.env.Owner_Number || "919744108970",
  instagramId: process.env.Insta || "whoois.zenitsu",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "YOUR_SESSION_ID", 
  image_1: readFileSync('./lib/IMG-20240329-WA0105.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/IMG-20240329-WA0105.jpg'), // null image
  image_3: readFileSync('./lib/IMG-20240329-WA0105.jpg')), // Thumbnail for Dashboard
  aliveMedia: https://i.imgur.com/lGkriSF.jpeg,
  menuMedia: readFileSync('./lib/IMG-20240329-WA0105.jpg'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen nezuko" 
global.author = process.env.Author || "@zenitsu" 
global.packname = process.env.PackName || "Queen nezuko v2 MD" 
global.myweb = process.env.Web || "https://github.com/godzenitsu" 
global.footer = process.env.Footer || "© Queen nezuko Bot" 
global.prefa = process.env.Prefix || [','] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "𝗴𝗼𝗱 𝘇𝗲𝗻𝗶𝘁𝘀𝘂" 
global.ownernumber = process.env.Owner_Number || "919744108970" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "whoois.zenitsu" 
global.email = process.env.Email_Id || "hehheeahnndndn@gmail.com " 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/IMG-20240329-WA0105.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/IMG-20240329-WA0105.jpg') // null image
global.image_3 = readFileSync("./lib/IMG-20240329-WA0105.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.imgur.com/howoEof.jpeg";

