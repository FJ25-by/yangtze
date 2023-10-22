import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomasupan/notnot?apikey=zenzkey_59f5aaa3b6'
		conn.sendFile(m.chat, url, null, '', m)
	m.reply('_Sabar om..._');
		}
handler.help = ['notnot']
handler.tags = ['asupan']
handler.command = /^(notnot)$/i

handler.diamond = true

export default handler