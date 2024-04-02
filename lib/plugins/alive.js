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
`

‎ ‎ ‎ ‎ ‎ ‎ ‎ 𝗡𝗝𝗔𝗡 𝗖𝗛𝗔𝗧𝗛𝗜𝗧𝗧𝗜𝗟𝗔 𝗠𝗪𝗢𝗡𝗨𝗨💀
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎

‎ ‎ ‎ ‎ ‎ ‎ 𝗜𝗡𝗜 𝗔𝗟𝗜𝗩𝗘 𝗔𝗗𝗜𝗖𝗛𝗔   ‎𝗧𝗛𝗔𝗧𝗧𝗜𝗞𝗔𝗟𝗔𝗬𝗨𝗠 ‎ ‎ ‎ ‎ ‎‎𝗣𝗨𝗡𝗡𝗔𝗥𝗔 𝗠𝗪𝗢𝗡𝗘🫵☠️

©️qᴜᴇᴇɴ-ɴᴇᴢᴜᴋᴏ
`;

  const ownerq = { key: { participant: '0@s.whatsapp.net', ...(nezuko.chat ? { remoteJid: 'status@broadcast' } : {}), }, message: { contactMessage: { displayName: Config.ownername, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${stylish.fancy31(Config.ownername)},;;;\nFN:${stylish.fancy31(Config.ownername)}\nitem1.TEL;waid=${Config.ownernumber}:${Config.ownernumber}\nitem1.X-ABLabel:Mobile\nEND:VCARD`, jpegThumbnail: Config.image_3, thumbnail: Config.image_3, sendEphemeral: true, }, }, };
    await anyaV2.sendMessage(nezuko.chat, {
      image: https://i.imgur.com/452xilv.jpeg,
      caption: caption,
      gifPlayback: true,
      contextInfo: {
        externalAdReply: {
          title: Config.botname,
          body: '𝗜𝗠 𝗔𝗟𝗜𝗩𝗘🌀',
          thumbnail: https://i.imgur.com/xZ45hxR.jpeg,
          showAdAttribution: true
        }
      }
    }, {quoted:ownerq});
  }
}
