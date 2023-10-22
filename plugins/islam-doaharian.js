import axios from 'axios'
let handler = async(m, { conn, text }) => {

	axios.get(`https://api.maulanaabot.repl.co/islamic/doaharian?apikey=yangtze25`).then ((res) => {
	 	let hasil = `*${res.data.result.title}*
*${res.data.result.arabic}*\n
*${res.data.result.latin}*\n\n${res.data.result.translation}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['doaharian']
handler.tags = ['islam']
handler.command = /^(doaharian)$/i

handler.exp = 0
handler.diamond = true

export default handler
