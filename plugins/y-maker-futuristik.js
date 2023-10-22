import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh: .futur yangtze'
  await m.react('⏳')
  let res = `https://api-fgmods.ddns.net/api/textpro/futuristic?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'futuristic.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('✅')
}
handler.help = ['futuristik'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(futur|futuristik)$/i
handler.limit = true
handler.premium = false

export default handler