import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh .txt2 woman,hair+cut+collor+red,full+body,bokeh'
  m.reply('ᴘʀᴏꜱᴇꜱ\nGa Sabar? Ngapain pake fitur ini.')
  let res = `https://xzn.wtf/api/txt2img?text=${response[0]}&apikey=yangtze`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['txt2'].map(v => v + ' <text>')
handler.tags = ['ai','yangtze']
handler.command = /^(txt2)$/i
handler.diamond = false
handler.premium = true

export default handler