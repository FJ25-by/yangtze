import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .marvel Yangtze|FJ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.betabotz.org/api/textpro/marvel-logo3?text=${response[0]}&text2=${response[1]}&apikey=tpJs3BPP`
  conn.sendFile(m.chat, res, 'marve-logo3.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['marvel'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(marvel)$/i
handler.limit = true
handler.premium = true

export default handler