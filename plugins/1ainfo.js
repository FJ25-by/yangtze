const { createHash } = require ('crypto')
let handler = async (m, { text, usedPrefix }) => {
let user = global.db.data.users[m.sender]
if(user.registered !== false) throw 'Kamu Sudah mendaftar!!\nIngin daftar ulang? ketik unreg'
    user.registered = true
    let sn = createHash('md5').update(m.sender).digest('hex')
    let totfit = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
    let p = `*┌${htkio} *VERSION* ${htkao}
${pekok} *Nama*: Yangtze
${htto} *By:* FJ
${pekok} *Versi:* 5.7
${htto} *Fitur* : ${totfit}
${pekok} *Team Community*: Phobia Team
└────${htkao}`
    const arr = [
        { text: `*[ I ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ I N ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ I N F ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ I N F O ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ I N F O B ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ I N F O  B O ]*\n\n${p}`, timeout: 100 },
        { text:  `*[ I N F O  B O T ]*\n\n${p}`, timeout: 100 },
    ];

    const lll = await conn.sendMessage(m.chat, { text: 'Sedang melihat info di package....' }, { quoted: m });

    for (let i = 0; i < arr.length; i++) {
        await new Promise(resolve => setTimeout(resolve, arr[i].timeout));
        await conn.relayMessage(m.chat, {
            protocolMessage: {
                key: lll.key,
                type: 14,
                editedMessage: {
                    conversation: arr[i].text
                }
            }
        }, {});
    }
}

handler.help = ['ver','versi','versibot']
handler.tags = ['info']
handler.command = /^(ver|versi|versibot)$/i

export default handler