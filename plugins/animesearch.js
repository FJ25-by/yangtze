import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Mau Cari Anime Apa?`
  await m.reply('Searching...')
	axios.get(`https://xzn.wtf/api/oploverz?&search=${text}&apikey=nekopoi`).then ((res) => {
	 	let hasil = `*Tittle :${res.data.title}*
*Link*: ${res.data.link}
*Type*: ${res.data.type}
*Image/Foto:* ${res.data.img}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['animesearch','search']
handler.tags = ['anime']
handler.command = /^(search|animesearch)$/i

handler.exp = 0
handler.diamond = true

export default handler
