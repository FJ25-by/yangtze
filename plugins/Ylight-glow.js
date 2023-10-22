import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh: .ylight'
  await m.react('⏳')
  let res = `https://api-fgmods.ddns.net/api/textpro/lightglow?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'lightglow.jpg', `✅`, m, false)
  m.react('✅')
}
handler.help = ['ylight'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(ylight)$/i
handler.limit = true
handler.premium = false

export default handler