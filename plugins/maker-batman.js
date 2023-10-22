import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.betabotz.org/api/textpro/batman-logo?text=${response[0]}&apikey=oVOwnKrk`
  conn.sendFile(m.chat, res, 'batman-logo.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['batman'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(batman)$/i
handler.diamond = true
handler.premium = true

export default handler