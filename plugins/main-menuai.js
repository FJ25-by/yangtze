let handler = async (m, { conn, text }) => {
	conn.sendMessage(m.chat, {
text: '┏━━⊜ *_ai_* ━⊜\n┃⋄ .yangtze-ai  (Ⓛ)\n┃⋄ .art  (Ⓟ)\n┃⋄ .comics  (Ⓟ)\n┃⋄ .disney  (Ⓟ)\n┃⋄ .jojo  (Ⓟ)\n┃⋄ .renaissance  (Ⓟ)\n┃⋄ .yasuo  (Ⓟ)\n┃⋄ .ai (Ⓛ)\n┃⋄ .openai (Ⓛ)\n┃⋄ .aremini  (Ⓟ)\n┃⋄ .enhancer  (Ⓟ)\n┃⋄ .hdr  (Ⓟ)\n┃⋄ .colorize  (Ⓟ)\n┃⋄ .txt <prompt>\n┃⋄ .txt2 <text>  (Ⓟ)\n┃⋄ .y-ai <text>  (Ⓟ)\n┗━━━━━━━━⬣',
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'Menu Ai',
thumbnailUrl: 'https://telegra.ph/file/9bebc82fcd79f26e8c8ee.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.command = /^(menu-ai)$/i
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