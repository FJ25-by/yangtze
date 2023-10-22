import fetch from 'node-fetch';
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) {
    throw `Masukkan URL!\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/ZSLx6qhwM`;
  }
    if (!args[0].match(/tiktok/gi)) {
      throw `URL Tidak Ditemukan!`;
    }
    m.reply('*Mohon tunggu...*');
    try {
    const api = await fetch(`https://api.zahwazein.xyz/downloader/ttslide?apikey=zenzkey_59f5aaa3b6&url=${args[0]}`);
    const res = await api.json();
    var {
      id, 
      region, 
      title,
      play
    } = res.result
    for (let i of res.result) {
    await sleep(3000)
    conn.sendFile(m.chat, i, null, `${htki}DL-TT IMAGE${htka}`, m);
        }
  } catch (e) {
    console.log(e);
    throw `🚩 *Terjadi kesalahan, cek apikey mu!*`
  }
};
handler.command = handler.help = ['tiktokimage','ttimg','tiktokimg'];
handler.tags = ['dl'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

export default handler
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}