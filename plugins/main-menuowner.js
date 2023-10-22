let handler = async (m, { conn, text }) => {
	conn.sendMessage(m.chat, {
text: '┏━━⊜ *_OWNER_* ━⊜\n┃⋄ .block\n┃⋄ .unblock\n┃⋄ .pushkontak\n┃⋄ .men\n┃⋄ .add/tambahmods <@user>\n┃⋄ .prem *@tag|days*\n┃⋄ .bugmenu\n┃⋄ .deleteuser\n┃⋄ .enable2 <option>\n┃⋄ .disable2 <option>\n┃⋄ .enable3 <option>\n┃⋄ .disable3 <option>\n┃⋄ .addprem [@user] <hari>\n┃⋄ .nomerlink <nomer>\n┃⋄ .nrl <nomer>\n┃⋄ .cheatlimit\n┃⋄ .delowner [@user]\n┃⋄ .setppbotfull\n┃⋄ .expired <days>\n┃⋄ .addowner [@user]\n┃⋄ .addprem <@tag>\n┃⋄ .banchat\n┃⋄ .listban\n┃⋄ .ban @user\n┃⋄ .broadcast\n┃⋄ .cariteman\n┃⋄ .caridoi\n┃⋄ .cleartmp\n┃⋄ .delexpired@\n┃⋄ .delprem @user\n┃⋄ .email\n┃⋄ .getplugin\n┃⋄ .join <chat.whatsapp.com> <days>\n┃⋄ .reset <62xxx>\n┃⋄ .restart\n┃⋄ .setbotbio <teks>\n┃⋄ .sfp <teks>\n┃⋄ .unbanchat\n┃⋄ .unban @user\n┃⋄ .update\n┃⋄ .promote @user\n┃⋄ .saveplugin <name file>\n┃⋄ .savefile <name file>\n┃⋄ .titlein <nama>\n┃⋄ .upsw <text|reply>\n┃⋄ .upsw <text>\n┗━━━━━━━━⬣',
contextInfo: {
externalAdReply: {
title: 'YANGTZE',
body: 'Menu Owner',
thumbnailUrl: 'https://telegra.ph/file/33c034eac0087f3ffd4c5.jpg',
sourceUrl: '',
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.command = /^(menuowner)$/i
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