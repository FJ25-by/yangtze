import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ʟɪɴᴋ\nᴄᴏɴᴛᴏʜ: .triggered https://telegra.ph/file/439f97ae23af1c8521dc0.png'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.erdwpe.com/api/maker/triggered?url=${response[0]}`
  conn.sendFile(m.chat, res, 'triggered.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['triggered'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(triggered)$/i
handler.limit = true
handler.premium = false

export default handler