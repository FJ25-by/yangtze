import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh: .y-wolf yangtze|fj'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api-fgmods.ddns.net/api/textpro/logowolf?text=${response[0]}&text2=${response[1]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'logowolf.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['y-wolf'].map(v => v + ' <text|text>')
handler.tags = ['logo','maker']
handler.command = /^(y-wolf)$/i
handler.limit = true
handler.premium = false

export default handler