import { googleImage } from '@bochilteam/scraper';

var handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Sungai`;
    m.reply(global.wait); // Menampilkan pesan loading

    const res = await googleImage(text);
    let image = res.getRandom();
    let link = image;
    conn.sendFile(m.chat, link, 'bimg.jpg', `*🔎Result..*\n\n_🔁History : ${text}_\n_📂Ukuran : 800GB_\n_🌐Source : ${link}_`, m);
};

handler.help = ['yaimg <dicari>', 'yangtzeimage <dicari>', 'yimg <dicari>'];
handler.tags = ['internet', 'Yangtze'];
handler.command = ['yaimg', 'yangtzeimage', 'yimg'];

export default handler;
