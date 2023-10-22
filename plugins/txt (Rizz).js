import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw `ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh ${usedPrefix + command} woman,hair+cut+collor+red,full+body,bokeh`
  m.reply('ᴘʀᴏꜱᴇꜱ\nGa Sabar? Ngapain pake fitur ini.')
  let res = `https://xzn.wtf/api/txt2img?text=${response[0]}&apikey=Rizz`
  conn.sendFile(m.chat, res, 'Rizz.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.command = /^(Rizz-ai)$/i
handler.diamond = false
handler.premium = false
handler.level = false

export default handler