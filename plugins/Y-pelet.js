import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://oni-chan.my.id/api/canvas/dukun-pelet?picturl=${response[0]}&apikey=CYGb-y85t-Wvyh`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['pelet'].map(v => v + ' <url>')
handler.tags = ['logo','maker']
handler.command = /^(pelet)$/i
handler.diamond = true
handler.premium = false

export default handler