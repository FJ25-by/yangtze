import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh .txt-admingc woman,hair+cut+collor+red,full+body,bokeh'
  m.reply('\n```Sabar dong admin```\n')
  let res = `https://kiicodeofficial.my.id/api/ai/text2img?text=${response[0]}&apikey=Zetet3KODi`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['txt-admingc'].map(v => v + ' <prompt>')
handler.tags = ['ai','yangtze']
handler.command = /^(txt-admingc)$/i
handler.diamond = false
handler.premium = false
handler.level = false
handler.admin = true

export default handler