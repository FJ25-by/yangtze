import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.xyroinee.xyz/api/asupan/image/indonesia?apikey=zrPrFGHQQk'
		conn.sendFile(m.chat, url, null, 'INGAT APA? INGAT DOSA', m)
	m.reply('_Sabar_');
		}
handler.help = ['lokal']
handler.tags = ['asupan']
handler.command = /^(lokal)$/i

handler.diamond = true

export default handler