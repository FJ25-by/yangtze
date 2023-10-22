import axios from 'axios'
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')
	axios.get(`https://api.xyroinee.xyz/api/search/jadwalbola?&apikey=KPGglMGrkZ`).then ((res) => {
	 	let hasil = `*Jadwal: ${res.data.data}*`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['jadwalbola']
handler.tags = ['internet']
handler.command = /^(jadwalbola)$/i

handler.exp = 0
handler.limit = true

export default handler
