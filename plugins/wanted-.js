import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ url'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api-fgmods.ddns.net/api/maker/wanted?url=${response[0]}&apikey=RF9mFuF7`
  conn.sendFile(m.chat, res, 'wanted.jpg', `ꜱᴜᴅᴀʜ`, m, false)
}
handler.help = ['ywan'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(ywan)$/i
handler.limit = true
handler.premium = false

export default handler