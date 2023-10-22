import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  await m.react('⌨️')
  let res = `https://api.caliph.biz.id/api/delete?url=${response[0]}&apikey=7WEWUL4z`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('💻')
}
handler.help = ['m-del'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(m-del)$/i
handler.diamond = true
handler.premium = false

export default handler