import axios from 'axios'
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`https://api.erdwpe.com/api/randomgambar/couplepp`).then ((res) => {
	 	let hasil = `*Cowok: ${res.data.result.male}*
*Cewek*: ${res.data.result.female}
\nDOWNLOAD/SCREENSHOT SENDIRI ATAU BISA MENGGUNAKAN .DLPINTEREST`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['ppkopel']
handler.tags = ['internet']
handler.command = /^(ppkopel)$/i

handler.exp = 0
handler.limit = false

export default handler
