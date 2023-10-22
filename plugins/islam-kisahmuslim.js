import axios from 'axios'
import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {

  await m.reply('Random Kisah Islamic')
	axios.get(`https://api.zahwazein.xyz/islami/kisahmuslim?apikey=zenzkey_59f5aaa3b6`).then ((res) => {
	 	let hasil = `*Judul* :${res.data.result.Judul}
*Kisah*: ${res.data.result.Cerita}`

    conn.sendFile(m.chat, res.data.result.Thumb, 'kisah.jpg', hasil, m)
	})
}
handler.help = ['kisahislam']
handler.tags = ['islam']
handler.command = /^(kisahislam)$/i

handler.exp = 0
handler.limit = false

export default handler
