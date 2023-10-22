import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.botcahx.live/api/wallpaper/programing?apikey=kr9xgA4J'
	conn.sendFile(m.chat, `Nih ${command}`, await(await fetch(url)).buffer(),m)
}
handler.command = /^(programing)$/i
handler.tags = ['image']
handler.help = ['programing']
handler.premium = false
handler.limit = 2

export default handler