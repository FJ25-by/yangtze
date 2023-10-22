import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/maker/wanted?url=${response[0]}`
  conn.sendFile(m.chat, res, 'wanted.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['wanteed'].map(v => v + ' <url>')
handler.tags = ['logo','maker']
handler.command = /^(wanteed)$/i
handler.limit = true
handler.premium = false

export default handler