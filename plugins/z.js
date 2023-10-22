import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('❓')
  let res = `https://api.maulanaabot.repl.co/filter/canvas/fxnxx?apikey=As66AfM7&img=${response[0]}`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
m.react('🏁')
}
handler.help = ['makerxn'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(makerxn)$/i
handler.limit = false
handler.level = 2
handler.premium = false

export default handler