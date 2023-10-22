import axios from 'axios'
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`https://api.maulanaabot.repl.co/randomtext/ceritahorror?apikey=yangtze25`).then ((res) => {
	 	let hasil = `*Judul :${res.data.judul}*
*Thumbnail*: ${res.data.thumbnail}
*Cerita*: ${res.data.cerita}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['ceritahoror']
handler.tags = ['fun']
handler.command = /^(ceritahoror)$/i

handler.exp = 0
handler.limit = true

export default handler
