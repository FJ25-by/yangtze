let handler = async (m, { conn, args }) => {
  m.reply('SABAR YAAAA')
  let res = `./media/sc.zip`
  conn.sendFile(m.chat, res, 'yangtze.zip', `Download Module Sendiri`, m, false)
}
handler.help = ['sc']
handler.tags = ['internet']
handler.command = /^(sc)$/i
handler.diamond = 80
handler.premium = false

export default handler