import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://xzn.wtf/api/onepiece?text=${response[0]}&apikey=yangtze`
  conn.sendFile(m.chat, res, 'onepiece.jpg', `ᴅᴏɴᴇ ʏᴀ`, m, false)
}
handler.help = ['onepiece'].map(v => v + ' <text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(onepiece)$/i
handler.limit = true
handler.premium = false

export default handler