import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  await m.react('🥱')
  let res = `https://oni-chan.my.id/api/canvas/merdeka78-v3?picturl=${response[0]}&apikey=Qjei-QCKp-ywkl`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('🇮🇩')
}
handler.help = ['17Agustus2023'].map(v => v + ' <url>')
handler.tags = ['logo','maker']
handler.command = /^(17Agustus2023)$/i
handler.diamond = false
handler.premium = false

export default handler