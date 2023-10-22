import api from 'hxz-api'
let handler = async (m, { conn, text, usedPrefix, command }) => {
 
 if (!text) throw ` Gunakan link Facebook!\n\n📌 Example:\n*${usedPrefix + command}* https://fb.watch/7B5KBCgdO3`
let response = await api.fbdown(text)
 	  
 conn.sendFile(m.chat, response.Normal_video, 'fb.mp4', wm, m)
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^((facebook2|fb2)(downloder|dl)?)$/i
export default handler