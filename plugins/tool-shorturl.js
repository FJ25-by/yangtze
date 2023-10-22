import fetch from 'node-fetch'
let handler = async (m, { text }) => {
  if (!text) throw 'Masukan url/link nya mana?\n> .tinyurl https://google.com'
  let res = await fetch(`https://api.betabotz.org/api/tools/tinyurl?url=${text}&apikey=xASpa9Cn`)
  let json = await res.json()
  if (json.status) m.reply(json.result)
  else throw 'Link Invalid!\nPeriksa url anda'
}
handler.help = ['short'].map(v => v + ' <link>')
handler.tags = ['internet']
handler.command = /^short(url)$/i

export default handler
