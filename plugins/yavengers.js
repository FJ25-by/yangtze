import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .avangers Yangtze|FJ'
  await m.react('📡')
  let res = `https://api.betabotz.org/api/textpro/avengers-logo?text=${response[0]}&text2=${response[1]}&apikey=oVOwnKrk`
  conn.sendFile(m.chat, res, 'avangers-logo.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react(done)
}
handler.help = ['avangers'].map(v => v + ' <text|text>')
handler.tags = ['logo','maker']
handler.command = /^(avangers)$/i
handler.limit = true
handler.premium = true

export default handler