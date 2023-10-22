import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.caliph.biz.id/api/openai/dalle?query=${response[0]}&apikey=7WEWUL4z`
  conn.sendFile(m.chat, res, 'dalle.jpg', `©Yangtze`, m, false)
}
handler.help = ['y-ai'].map(v => v + ' <text>')
handler.tags = ['maker','ai','yangtze']
handler.command = /^(y-ai)$/i
handler.limit = true
handler.premium = true

export default handler