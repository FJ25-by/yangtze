import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ\nContoh: .yangtze-animeai https://telegra.ph/file/dd68e7b55ba929d5af44c.jpg'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.caliph.biz.id/api/animeai?img=${response[0]}&apikey=7WEWUL4z`
  conn.sendFile(m.chat, res, 'animeai.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['yangtze-animeai'].map(v => v + ' <url>')
handler.tags = ['logo','maker']
handler.command = /^(yangtze-animeai)$/i
handler.limit = true
handler.premium = false

export default handler