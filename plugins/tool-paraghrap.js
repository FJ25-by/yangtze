import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Masukan *MINIMAL* 200kata`
	axios.get(`https://xzn.wtf/api/paraphraser?text=${text}&apikey=nekopoi`).then ((res) => {
	 	let hasil = `*${res.data.countWord}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['paragraph']
handler.tags = ['tools']
handler.command = /^(paragraph)$/i

handler.exp = 0
handler.diamond = true

export default handler
