import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('📡')
  let res = `https://api-fgmods.ddns.net/api/textpro/devil?text=${response[0]}&apikey=RF9mFuF7`
  m.react('🗿')
  conn.sendFile(m.chat, res, 'devil.jpg', `ya gitu`, m, false)
}
handler.help = ['ydevil'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(ydevil)$/i
handler.limit = true
handler.premium = false

export default handler