import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh: .twit Yangtze|ini ya\n\nCatatan: .tweet <nickname>|<postingan>'
  await m.react('🕟')
  let res = `https://api.zahwazein.xyz/creator/maketweet?text2=${response[0]}&text=${response[1]}&apikey=zenzkey_59f5aaa3b6`
  conn.sendFile(m.chat, res, 'maketweet.jpg', `tweeter`, m, false)
  m.react('✅')
}
handler.help = ['tweet','twit'].map(v => v + ' <text>|<text>')
handler.tags = ['maker','yangtze']
handler.command = /^(tweet|twit)$/i
handler.limit = true
handler.premium = false

export default handler