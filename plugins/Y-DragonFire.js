import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh: .dragonfire yangtze'
  await m.react('😑')
  let res = `https://api.zahwazein.xyz/ephoto/dragonfire?text=${response[0]}&apikey=zenzkey_59f5aaa3b6`
  conn.sendFile(m.chat, res, 'dragonfire.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('🤙')
}
handler.help = ['dragonfire'].map(v => v + ' <text>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(dragonfire)$/i
handler.diamond = 10
handler.premium = false

export default handler