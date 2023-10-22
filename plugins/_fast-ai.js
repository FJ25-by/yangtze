import axios from 'axios'
let handler = async(m, { conn, text }) => {
if (!text) throw `Mau Nanya Apa?`
	axios.get(`https://api-fgmods.xyz/api/info/openai2?text=${text}&apikey=RF9mFuF7`).then ((res) => {
	 	let hasil = `*${res.data.result}*`

    conn.sendMessage(m.chat, {
text: hasil,
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'OPENAI',
thumbnailUrl: 'https://telegra.ph/file/f16eb734e8e0efa09a414.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
	})
}
handler.help = ['fast-ai']
handler.tags = ['internet','yangtze']
handler.command = /^(fast-ai)$/i

handler.exp = 0
handler.diamond = 2

export default handler
