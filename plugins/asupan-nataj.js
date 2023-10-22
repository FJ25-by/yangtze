import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomasupan/natajadeh?apikey=zenzkey_59f5aaa3b6'
		conn.sendFile(m.chat, url, null, '', m)
	m.reply('_..._');
		}
handler.help = ['natajadeh']
handler.tags = ['asupan']
handler.command = /^(natajadeh)$/i

handler.diamond = false

export default handler