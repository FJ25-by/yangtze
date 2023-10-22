import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nExample: .ninjalogo yangtze|fj'
  m.reply('Wait one minute')
  let res = `https://api-fgmods.ddns.net/api/textpro/ninja-logo?text=${response[0]}&text2=${response[1]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'ninja-logo.jpg', `Ga Sesuai Harapan? Buat Sendiri`, m, false)
}
handler.help = ['ninjalogo'].map(v => v + ' <text|text>')
handler.tags = ['logo','maker']
handler.command = /^(ninjalogo)$/i
handler.limit = true
handler.premium = false

export default handler