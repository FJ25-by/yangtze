import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nExample: .black-pink yangtze'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.anna.biz.id/api/textpro/blackpink?text=${response[0]}`
  conn.sendFile(m.chat, res, 'blackpink.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['black-pink'].map(v => v + ' <text>')
handler.tags = ['maker', 'premium','logo']
handler.command = /^(black-pink)$/i
handler.limit = true
handler.premium = false

export default handler
