import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .anonymous yangtze'
  await m.react('⏳')
  let res = `https://api.zahwazein.xyz/ephoto/anonymous?text=${response[0]}&apikey=zenzkey_59f5aaa3b6`
  conn.sendFile(m.chat, res, 'anonymous.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
m.react('🎭')
}
handler.help = ['anonymous'].map(v => v + ' <text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(anonymous)$/i
handler.diamond = true
handler.premium = false

export default handler