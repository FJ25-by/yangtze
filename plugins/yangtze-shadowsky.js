import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/photooxy/shadow-sky?text=${response[0]}`
  conn.sendFile(m.chat, res, 'shadow-sky.jpg', `Done :>`, m, false)
}
handler.help = ['shadowsky'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(shadowsky)$/i
handler.limit = true
handler.diamond = true
export default handler