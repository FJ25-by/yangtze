import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Mana link nya?`
  await m.reply('Searching...')
	axios.get(`https://api.maulanaabot.repl.co/tools/read-qr?apikey=yangtze25&img=${text}`).then ((res) => {
	 	let hasil = `*Read Qr : ${res.data.result}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['readqr <link>']
handler.tags = ['internet','tools']
handler.command = /^(readqrcode|readqr)$/i

handler.exp = 0
handler.diamond = true

export default handler
