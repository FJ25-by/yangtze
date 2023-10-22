let handler = async (m, { conn, text }) => {
	conn.sendMessage(m.chat, {
text: '┏━━⊜ *_YANGTZE_* ━⊜\n┃⋄ .fast-ai (Ⓛ)\n┃⋄ .ai (Ⓛ)\n┃⋄ .openai (Ⓛ)\n┃⋄ .cekapilolhuman\n┃⋄ .cekapizahwazein\n┃⋄ .igstalk2 (Ⓛ)\n┃⋄ .reminifree <url>\n┃⋄ .m-del <url> (Ⓛ)\n┃⋄ .face <url>\n┃⋄ .passed <url>\n┃⋄ .hitler <url> (Ⓛ)\n┃⋄ .horor <text>\n┃⋄ .pubg <text> (Ⓛ)\n┃⋄ .triggered <url>\n┃⋄ .wastedtuh <url> (Ⓛ)\n┃⋄ .resize <width> <height>\n┃⋄ .txt <prompt>\n┃⋄ .txt2 <text>  (Ⓟ)\n┃⋄ .anonymous <text> (Ⓛ)\n┃⋄ .aov <text> (Ⓛ) (Ⓟ)\n┃⋄ .dota <text>  (Ⓟ)\n┃⋄ .dragonfire <text> (Ⓛ)\n┃⋄ .y-glit <text>|<text>  (Ⓟ)\n┃⋄ .y-logobear <text> (Ⓛ)\n┃⋄ .memo <url>\n┃⋄ .onepiece <text>\n┃⋄ .tweet <text>|<text>\n┃⋄ .twit <text>|<text>\n┃⋄ .yangtze-ai <prompt>\n┃⋄ .wanted <url>\n┃⋄ .ps4 <url> (Ⓛ) (Ⓟ)\n┃⋄ .triggered <url>\n┃⋄ .yangtzeremini <url> (Ⓛ)\n┃⋄ .ytkomen <text>\n┃⋄ .ytcomment <text>\n┃⋄ .ytkom <text>\n┃⋄ .upscale <url>\n┃⋄ .upscale2 <url>\n┃⋄ .upscale3 <url>\n┃⋄ .YangtzeHd <url>\n┗━━━━━━━━⬣',
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'Menu Yangtze',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.command = /^(menuyangtze)$/i
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