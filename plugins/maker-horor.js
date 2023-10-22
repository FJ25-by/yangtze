import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nExample: .horor halo'
  await m.react('❓')
  let res = `https://api.betabotz.org/api/ephoto/horor?text=${response[0]}&apikey=ud64JWfj`
  conn.sendFile(m.chat, res, 'yangtze.jpg', ``, m, false)
  m.react('❗')
}
handler.help = ['horor'].map(v => v + ' <text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(horor)$/i
handler.diamond = false
handler.premium = false

export default handler