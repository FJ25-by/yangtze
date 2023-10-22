import axios from 'axios'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴀɴɢɢᴀʟ ʟᴀʜɪʀ ʙᴜʟᴀɴ ᴛᴀʜᴜɴ\nEx: .pernikahan 25|01|9000'
  await m.reply('Searching...')
	axios.get(`https://api.botcahx.live/api/primbon/tanggaljadianpernikahan?tanggal=${response[0]}&bulan=${response[1]}&tahun=${response[2]}&apikey=ODD7eFr7`).then ((res) => {
	 	let hasil = `*${res.data.result.message.tanggal}*

${res.data.result.message.karakteristik}
${res.data.result.message.catatan}`
conn.reply(m.chat, hasil, m)
})
}

handler.help = ['pernikahan'].map(v => v + ' <tgl>|<bln>|<tahun>')
handler.tags = ['fun']
handler.command = /^(pernikahan)$/i
handler.limit = true
handler.premium = false

export default handler