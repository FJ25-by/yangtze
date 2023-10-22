let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.anna.biz.id/api/textpro/logo-wolf4?text=${response[0]}&text2=${response[1]}`
  conn.sendFile(m.chat, res, 'logo-wolf4.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logowolf','wolf'].map(v => v + ' <text>')
handler.tags = ['logo','maker']
handler.command = /^(logowolf|wolf)$/i
handler.limit = true
handler.premium = false

export default handler