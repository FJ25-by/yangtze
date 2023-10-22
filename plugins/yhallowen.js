import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('📡')
  let res = `https://api-fgmods.ddns.net/api/textpro/halloween?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'hallowen.jpg', `Success`, m, false)
  m.react('🎃')
}
handler.help = ['hallowen'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(hallowen)$/i
handler.limit = true
handler.premium = false

export default handler