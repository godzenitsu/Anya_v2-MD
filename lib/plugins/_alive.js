module.exports = {
  cmdName: () => ({
    name: ['alive'],
    alias: [],
    react: '🌀',
    category: 'core',
    desc: 'Bot shows it\'s alive'
  }),
  getCommand: async (anyaV2, pika, bot, prefix, startPing) => {
    const Config = require('../../config');
    const { plugin, myfunc, stylish } = require('../lib');
    const Ping = startPing - performance.now();
    const caption = `\`\`\`
❖ ── ✦ ──『✙ Alive ✙』── ✦ ── ❖

📅 ${stylish.tiny('Date Today')} : ${myfunc.dayToday().date}
⌚ ${stylish.tiny('Time Now')} : ${myfunc.dayToday().time}

✦» 𝚄𝚜𝚎𝚛 : ${pika.pushName}
✦» 𝙱𝚘𝚝 : ${Config.botname}
✦» 𝙿𝚛𝚎𝚏𝚒𝚡 : ${prefix}
✦» 𝙾𝚠𝚗𝚎𝚛 : ${Config.ownername}
✦» 𝙼𝚘𝚍𝚎 : ${bot.worktype}
✦» 𝙿𝚕𝚞𝚐𝚒𝚗𝚜 : ${plugin.pluginSize().size}
✦» 𝚄𝚜𝚎𝚛𝚜 : ${await myfunc.totalAnyaUsers()}
✦» 𝚂𝚙𝚎𝚎𝚍 : ${Ping.toFixed(2).replace('-', '')}ms
✦» 𝚄𝚙𝚝𝚒𝚖𝚎 : ${myfunc.formatRuntime(process.uptime())}
✦» 𝙼𝚎𝚖 : ${myfunc.getMemoryInfo().usedMemory}/${myfunc.getMemoryInfo().totalMemory}\`\`\`

☎️ *𝗧𝗘𝗟𝗘𝗚𝗥𝗠 :* https://wa.me/${ownernumber}?text=${encodeURIComponent('Owner of ' + Config.botname + ' 🥵🎀🎐')}
💻 *𝗚𝗜𝗧𝗛𝗨𝗕 :* https://github.com/godzenitsu
🎀 *𝗜𝗡𝗦𝗧𝗔 :* https://instagram.com/whoois.zenitsu 
🔮 *𝗣𝗨𝗕𝗟𝗜𝗖 𝗚𝗥𝗢𝗨𝗣 :* https://chat.whatsapp.com/DcGABEejUwOG8YcgGOcizF

*R𝚎𝚙𝚕𝚢 A N𝚞𝚖𝚋𝚎𝚛 T𝚘 G𝚎𝚝:*
   𝟭 𝗔𝗹𝗹𝗺𝗲𝗻𝘂
   𝟮 𝗟𝗶𝘀𝘁𝗺𝗲𝗻𝘂
_ID: QA01_
`;

  const ownerq = { key: { participant: '0@s.whatsapp.net', ...(pika.chat ? { remoteJid: 'status@broadcast' } : {}), }, message: { contactMessage: { displayName: Config.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${stylish.fancy31(Config.ownername)},;;;\nFN:${stylish.fancy31(Config.ownername)}\nitem1.TEL;waid=${Config.ownernumber}:${Config.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: Config.image_3, thumbnail: Config.image_3, sendEphemeral: true, }, }, };
    await anyaV2.sendMessage(pika.chat, {
      video: Config.IMG-20240329-WA0105.jpg,
      caption: caption,
      gifPlayback: true,
      contextInfo: {
        externalAdReply: {
          title: Config.botname,
          body: '𝗡𝗝𝗡 𝗖𝗛𝗔𝗧𝗛𝗜𝗧𝗧𝗜𝗟𝗔 𝗠𝗪𝗢𝗡𝗨🌀',
          thumbnail: Config.image_2,
          showAdAttribution: true
        }
      }
    }, {quoted:ownerq});
  }
}
