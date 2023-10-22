let handler = async (m, { conn, text }) => {
	conn.sendMessage(m.chat, {
text: '┏━━⊜ *_STICKER_* ━⊜\n┃⋄ .stickertag (caption|reply media)\n┃⋄ .sticktag <url>\n┃⋄ .stickanime  (Ⓟ)\n┃⋄ .animestick  (Ⓟ)\n┃⋄ .attp <text>\n┃⋄ .sfull\n┃⋄ .stickercry\n┃⋄ .emojimix <emoji+emoji> (Ⓛ)\n┃⋄ .getsticker (Ⓛ)\n┃⋄ .stickerhentai  (Ⓟ)\n┃⋄ .stick+18  (Ⓟ)\n┃⋄ .ssearch <name>  (Ⓟ)\n┃⋄ .smaker (Ⓛ)\n┃⋄ .smeme (teks|teks)\n┃⋄ .sticker\n┃⋄ .toimg <sticker>\n┃⋄ .tovid\n┃⋄ .ttp\n┃⋄ .ttp2\n┃⋄ .ttp3\n┃⋄ .ttp4\n┃⋄ .ttp5\n┃⋄ .attp\n┃⋄ .attp2\n┃⋄ .attp3\n┃⋄ .ttp <text>\n┃⋄ .take <nama>|<autor>\n┃⋄ .qc\n┗━━━━━━━━⬣',
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'Menu Sticker',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.command = /^(menusticker)$/i
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