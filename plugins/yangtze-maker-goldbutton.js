import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.betabotz.org/api/ephoto/ytgoldbutton?text=${response[0]}&apikey=ud64JWfj`
  conn.sendFile(m.chat, res, 'ytgoldbutton.jpg', `Pakai Limit Ya Perhari 5`, m, false)
}
handler.help = ['goldbutton'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(goldbut)$/i
handler.diamond = true
handler.premium = true

export default handler