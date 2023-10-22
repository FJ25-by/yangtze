import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api-fgmods.ddns.net/api/textpro/logobear?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['y-logobear'].map(v => v + ' <text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(y-logobear)$/i
handler.diamond = 2
handler.premium = false
handler.exp = true

export default handler