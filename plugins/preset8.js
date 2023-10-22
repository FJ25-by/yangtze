import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 PRESET 8 」*
https://alight.link/Aa1BMME6XSDk5qaEA
`.trim()
  m.reply(caption)
}

handler.help = ['p8']
handler.tags = ['AlightMotion']
handler.command = /^(p8)$/i
handler.limit = true

export default handler
