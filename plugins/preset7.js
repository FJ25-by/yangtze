import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 7 」*
https://alight.link/5LW5C4jqAgT19P7k9
`.trim()
  m.reply(caption)
}

handler.help = ['p7']
handler.tags = ['AlightMotion']
handler.command = /^(p7)$/i
handler.limit = true

export default handler
