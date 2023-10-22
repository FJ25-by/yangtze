import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://xzn.wtf/api/removebg?url=${response[0]}&apikey=yangtze`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['rmbg'].map(v => v + ' <url>')
handler.tags = ['tools']
handler.command = /^(rmbg)$/i
handler.diamond = true
handler.premium = false

export default handler