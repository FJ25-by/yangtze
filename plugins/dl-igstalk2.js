import axios from 'axios'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Mau Cari Siapa?\n\nContoh: ${usedPrefix+command} boru.to4484`
  await m.reply('Searching...')
	axios.get(`https://xzn.wtf/api/igstalkv2?user=${text}&apikey=yangtze`).then ((res) => {
	 	let hasil = `*Name :${res.data.full_name}*
*Status Private*: ${res.data.is_private}
*Akun Bisnis*: ${res.data.is_business}`

    conn.sendFile(m.chat, res.data.profile_pic_url, 'igstalk.jpg', hasil, m)
	})
}
handler.help = ['igstalk2']
handler.tags = ['dl','yangtze']
handler.command = /^(igstalk2)$/i

handler.exp = 0
handler.diamond = true

export default handler
