import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('⛈️')
  let res = `https://api-fgmods.ddns.net/api/textpro/thunder?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'thunder.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('⚡')
}
handler.help = ['thunder'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(thunder)$/i
handler.limit = true
handler.premium = false

export default handler