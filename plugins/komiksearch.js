let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  let res = await fetch(`https://api.xyroinee.xyz/api/anime/komiku-search?q=${text}&apikey=RgHdLmWPX9`)
  let json = await res.json()
  json = json.data.map((v) => `*Title:* ${v.title}\n*Title_ID:* ${v.title_id}\n*Awal:* ${v.awal}\n*Terbaru:* ${v.terbaru}\n*Link:* ${v.url}\nDeskripsi: ${v.description}`).join`\n\n°°°°°°°°°°°°°°°°°°°°°°°°°°°°°\n\n`
  conn.reply(m.chat,  json, m)
}
handler.help = ['komikusearch']
handler.tags = ['anime']
handler.command = /^(komikusearch)$/i
handler.limit = true

export default handler