import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/photooxy/naruto?text=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'naruto.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logo-naruto'].map(v => v + ' <text>')
handler.tags = ['logo']
handler.command = /^(logo-naruto)$/i
handler.limit = false
export default handler