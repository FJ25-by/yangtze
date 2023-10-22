import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  m.reply('ᴡᴀɪᴛ ᴀ ᴍɪɴᴜᴛᴇ')
  let res = `https://api.caliph.biz.id/api/hitler?url=${response[0]}&apikey=7WEWUL4z`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['hitler'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(hitler)$/i
handler.diamond = true
handler.premium = false

export default handler