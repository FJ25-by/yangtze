import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\n\nContoh: .custom yangtze|Batman\nDaftar Efek: Allain\nAllain 2\nKahlii 3\nNakroth 4\nPreyta 2\nSkud 2\nTaara 4\nValhein 4\nArum 4\nButterfly 6\nWukong\nWukong Woman\nWonder Woman 2\nSuperman'
  await m.react('☣️')
  let res = `https://oni-chan.my.id/api/ephoto360/amazing-aov-wallpaper-online-full-hd-for-mobile?text=${response[0]}&efek=${response[1]}&apikey=CYGb-y85t-Wvyh`
  conn.sendFile(m.chat, res, 'amazing-aov-wallpaper-one-full-hd-for-mobile.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
  m.react('☑️')
}
handler.help = ['custom'].map(v => v + ' <text>|<efek>')
handler.tags = ['logo','maker']
handler.command = /^(custom)$/i
handler.limit = true
handler.premium = true

export default handler