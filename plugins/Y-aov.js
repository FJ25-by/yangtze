import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  await m.react('🔍')
  let res = `https://api.zahwazein.xyz/ephoto/aov?text=${response[0]}&apikey=zenzkey_59f5aaa3b6`
  conn.sendFile(m.chat, res, 'aov.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
m.react('💸')
}
handler.help = ['aov'].map(v => v + ' <text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(aov)$/i
handler.diamond = true
handler.premium = true

export default handler