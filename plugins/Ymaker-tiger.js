import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ\n\nᴄᴏɴᴛᴏʜ: .tiger https://telegra.ph/file/01b117052fbe0a882b2ae.jpg'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.zahwazein.xyz/ephoto/tiger?url=${response[0]}&apikey=zenzkey_59f5aaa3b6`
  conn.sendFile(m.chat, res, 'tiger.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['tiger'].map(v => v + ' <url>')
handler.tags = ['logo','maker']
handler.command = /^(tiger)$/i
handler.diamond = true
handler.premium = false

export default handler