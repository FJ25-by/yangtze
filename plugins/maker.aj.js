import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/maker/pet?url=${response[0]}`
  conn.sendFile(m.chat, res, 'pet.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['pet'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(peet)$/i
handler.limit = true
handler.premium = false

export default handler