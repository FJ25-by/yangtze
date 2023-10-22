import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://xzn.wtf/api/cover-lol?text=${response[0]}&apikey=nekopoi`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `Done`, m, false)
}
handler.help = ['lolcover'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(lolcover)$/i
handler.diamond = true
handler.premium = false

export default handler