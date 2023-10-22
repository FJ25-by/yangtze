import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://xzn.wtf/api/torch-srgan?url=${response[0]}&apikey=yangtze`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `free remini`, m, false)
}
handler.help = ['reminifree'].map(v => v + ' <url>')
handler.tags = ['yangtze']
handler.command = /^(reminifree)$/i
handler.limit = false
handler.premium = false

export default handler