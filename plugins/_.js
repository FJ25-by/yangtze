let handler = async (m, { conn, text, command }) => {
	
    if (!text) return conn.reply(m.chat, `${command} ga ada, lu kenapa? kalau ngantuk tuh tidur aja`, m)
	
}
handler.command = /^(meni|meno)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.limit = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

export default handler