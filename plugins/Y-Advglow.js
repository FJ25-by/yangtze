import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .advglow yangtze'
  m.reply('.....LOAD.....')
  let res = `https://api-fgmods.ddns.net/api/textpro/advancedglow?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'advancedglow.jpg', `🗿🗿🗿`, m, false)
  m.react('😗')
}
handler.help = ['advglow','advancedglow'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(advglow|advancedglow)$/i
handler.limit = true
handler.premium = false

export default handler