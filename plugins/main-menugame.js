let handler = async (m, { conn, text }) => {
	conn.sendMessage(m.chat, {
text: '┏━━⊜ *_GAME_* ━⊜\n┃⋄ .asahotak\n┃⋄ .casino <jumlah>\n┃⋄ .iqtest\n┃⋄ .tebakangka <angka>\n┃⋄ .caklontong\n┃⋄ .dadu\n┃⋄ .delttt\n┃⋄ .family100\n┃⋄ .kuis\n┃⋄ .lengkapikalimat\n┃⋄ .math <mode>\n┃⋄ .mtk <mode>\n┃⋄ .siapakahaku\n┃⋄ .slot <jumlah taruhan>\n┃⋄ .suit\n┃⋄ .susunkata\n┃⋄ .tebaktebakan\n┃⋄ .tebakbendera\n┃⋄ .tebakgame\n┃⋄ .tebakkabupaten\n┃⋄ .tebakkata\n┃⋄ .tebaklirik\n┃⋄ .tebaklogo\n┃⋄ .tebaksiapa\n┃⋄ .tebaksurah\n┃⋄ .tekateki\n┃⋄ .tictactoe <nama room>\n┃⋄ .attack\n┃⋄ .atk\n┃⋄ .war\n┃⋄ .judilimit <jumlah>\n┃⋄ .pancing <type>\n┃⋄ .fightcentaur\n┃⋄ .fightgriffin\n┃⋄ .fightkucing\n┃⋄ .fightkyubi\n┃⋄ .fightnaga\n┃⋄ .fightphonix\n┃⋄ .hunt\n┃⋄ .slot\n┃⋄ .jackpot\n┃⋄ .suitpvp @tag\n┃⋄ .tebakanime\n┃⋄ .tebakgambar\n┃⋄ .ww\n┃⋄ .wwjoin\n┃⋄ .wwleft\n┃⋄ .wwplayer\n┃⋄ .wwstart\n┗━━━━━━━━⬣',
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'Menu Game',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.command = /^(menugame)$/i
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