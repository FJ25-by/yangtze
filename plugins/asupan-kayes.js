import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zahwazein.xyz/randomasupan/kayes?apikey=zenzkey_59f5aaa3b6'
		conn.sendFile(m.chat, url, null, '', m)
	m.reply('.....');
		}
handler.help = ['kayes']
handler.tags = ['asupan']
handler.command = /^(kayes)$/i

handler.diamond = true

export default handler