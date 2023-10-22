let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh: .trans YANGTZE'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api-fgmods.ddns.net/api/textpro/transformers?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'transformers.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['trans'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(trans)$/i
handler.limit = true
handler.premium = false

export default handler