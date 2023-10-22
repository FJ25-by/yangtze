let handler  = async (m, { conn, usedPrefix: _p }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
let info = `
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', `*Totalfitur: ${totalf}*`, 'status@broadcast')
}
handler.command = /^(totalfitur)$/i
handler.owner = false
handler.register = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
