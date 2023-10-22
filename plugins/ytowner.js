let handler = async (m, { conn }) => {
conn.reply(m.chat, fgyt, m) 
}
handler.help = ['ytowner']
handler.tags = ['main']
handler.command = /^(ytowner)$/i

export default handler
