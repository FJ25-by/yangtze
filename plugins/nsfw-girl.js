import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.fgmods.xyz/api/img/girl?apikey=RF9mFuF7'
		conn.sendFile(m.chat, url, null, '', m)
	m.reply('Wait....');
		}
handler.help = ['girl','cwe']
handler.tags = ['asupan']
handler.command = /^(gerl|cwe)$/i

handler.diamond = true

export default handler