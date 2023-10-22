import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜᴋᴜʀᴀɴ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://alpis.eu.org/api/maker/resize?url=${response[0]}&width=${response[1]}&height=${response[2]}&apikey=c7bc6bf5`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['resize1'].map(v => v + ' <link image>|<w>|<h>')
handler.tags = ['maker','tools']
handler.command = /^(resize1)$/i
handler.diamond = true
handler.premium = false

export default handler