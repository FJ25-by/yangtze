import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Masukan Link`
  await m.react('🗜')
	axios.get(`https://xzn.wtf/go_shorten?long_url=${text}&apikey=nekopoi`).then ((res) => {
	 	let hasil = `*Before Url: ${res.data.long_url}*
*After Url: ${res.data.short_url}*`

    conn.reply(m.chat, hasil, m)
	})
	m.react('📝')
}
handler.help = ['shorturl3']
handler.tags = ['tools']
handler.command = /^(shorturl3)$/i

handler.exp = 0
handler.diamond = false

export default handler
