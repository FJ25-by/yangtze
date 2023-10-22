let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .game Yangtze<wm>|ya<text>'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api-fgmods.ddns.net/api/textpro/video-game-classic?text=${response[0]}&text2=${response[1]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'video-game-classic.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['vg'].map(v => v + ' <text|text>')
handler.tags = ['logo','maker']
handler.command = /^(vg)$/i
handler.limit = true
handler.premium = false

export default handler