import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('🖨')
  let res = `https://api.maulanaabot.repl.co/sertifikat/mlserti?apikey=As66AfM7&text=${response[0]}`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ᴄᴏɴɢʀᴀᴛᴜʟᴀᴛɪᴏɴs`, m, false)
  m.react('🧾')
}
handler.help = ['mlsertifikat'].map(v => v + ' <text> (Coming Soon)')
handler.tags = ['logo','maker']
handler.command = /^(mlsertifikat)$/i
handler.limit = true
handler.premium = true

export default handler