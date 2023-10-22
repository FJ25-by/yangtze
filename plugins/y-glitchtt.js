import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .gtt yangtze|by FJ'
  await m.react('🙈')
  let res = `https://api-fgmods.ddns.net/api/textpro/glitchtiktok?text=${response[0]}&text2=${response[1]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'glitchtiktok.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('🙉')
}
handler.help = ['gtt'].map(v => v + ' <text|text>')
handler.tags = ['logo','maker']
handler.command = /^(gtt)$/i
handler.limit = true
handler.premium = false

export default handler