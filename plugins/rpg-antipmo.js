let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
Masyaallah, pertahankan iman mu brother
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*SUBHANALLAH*', 'status@broadcast')
}
handler.command = /^(antipmo)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
