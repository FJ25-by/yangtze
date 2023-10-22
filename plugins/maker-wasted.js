import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴜʀʟ'
  await m.react('📸')
  let res = `https://api.caliph.biz.id/api/wasted?url=${response[0]}&apikey=7WEWUL4z`
  conn.sendFile(m.chat, res, 'yangtze.jpg', `©ʏᴀɴɢᴛᴢᴇ`, m, false)
  m.react('💾')
}
handler.help = ['wastedtuh'].map(v => v + ' <url>')
handler.tags = ['logo','maker','yangtze']
handler.command = /^(wastedtuh)$/i
handler.diamond = true
handler.premium = false

export default handler