let handler = async (m, { conn }) => {
conn.reply(m.chat, fgig, m) 
}
handler.help = ['igowner']
handler.tags = ['main']
handler.command = /^(igowner)$/i

export default handler
