import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh .txt woman,hair+cut+collor+red,full+body,bokeh'
  m.reply('ᴘʀᴏꜱᴇꜱ\nGa Sabar? Ngapain pake fitur ini.')
  let res = `https://xzn.wtf/api/txt2img?text=${response[0]}&apikey=nekopoi`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['txt'].map(v => v + ' <prompt>')
handler.tags = ['ai','yangtze']
handler.command = /^(txt)$/i
handler.diamond = false
handler.premium = false
handler.level = 20

export default handler