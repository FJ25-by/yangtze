import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api-fgmods.ddns.net/api/maker/facepal?url=${response[0]}&apikey=RF9mFuF7`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `©Yangtze`, m, false)
}
handler.help = ['face'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(face)$/i
handler.money = true
handler.premium = false

export default handler