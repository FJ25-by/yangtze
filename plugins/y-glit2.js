import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('🏃‍♂️')
  let res = `https://api-fgmods.ddns.net/api/textpro/glitch2?text=${response[0]}&text2=${response[1]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('🏁')
}
handler.help = ['y-glit'].map(v => v + ' <text>|<text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(y-glit)$/i
handler.limit = true
handler.premium = true

export default handler