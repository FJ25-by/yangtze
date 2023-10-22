import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.zahwazein.xyz/photooxy/memory?url=${response[0]}&apikey=zenzkey_59f5aaa3b6`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['memo'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(memo)$/i
handler.limit = false
handler.premium = false

export default handler