import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://xzn.wtf/api/nsfw?search=waifu&apikey=yangtze'
		conn.sendFile(m.chat, url, null, 'WAH SUS', m)
	m.reply('Pengen Coli Ya?');
		}
handler.help = ['xwaifu']
handler.tags = ['nsfw']
handler.command = /^(xwaifu)$/i

handler.money = true

export default handler