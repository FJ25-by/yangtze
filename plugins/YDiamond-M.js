import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('⛏️')
  let res = `https://api.fgmods.xyz/api/textpro/diamond?text=${response[0]}&apikey=ofq7ObXN`
  conn.sendFile(m.chat, res, 'diamond.jpg', `💎ᴅᴏɴᴇ💎`, m, false)
  m.react('💎')
}
handler.help = ['dm','diamond'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(dm|diamond)$/i
handler.limit = true
handler.premium = false

export default handler