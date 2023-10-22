import axios from 'axios'
let handler = async(m, { conn, text }) => {

	axios.get(`https://api.zahwazein.xyz/randomtext/jawaquote?apikey=zenzkey_59f5aaa3b6`).then ((res) => {
	 	let hasil = `*${res.data.result.message}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['jawa']
handler.tags = ['quotes']
handler.command = /^(jawa)$/i

handler.exp = 0
handler.limit = true

export default handler
