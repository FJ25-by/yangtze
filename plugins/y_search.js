import { googleIt } from '@bochilteam/scraper';

let handler = async (m, { conn, command, args }) => {
    const fetch = (await import('node-fetch')).default;
    let full = /f$/i.test(command);
    let text = args.join` `;
    if (!text) return conn.reply(m.chat, 'Ingin mencari apa di Yangtze_Search ?', m);
    m.reply(global.wait); // Menampilkan pesan loading

    let url = 'https://duckduckgo.com/?q=' + encodeURIComponent(text);
    let search = await googleIt(text);
    let msg = search.articles.map(({ title, url, description }) => {
        return `*🔍 [${title}]-Yangtze_Search*\n${description}\n_${url}_`;
    }).join('\n\n');

    try {
        let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer();
        if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw '';
        await conn.sendFile(m.chat, ss, 'screenshot.png', msg, m);
    } catch (e) {
        m.reply(msg);
    }
};

handler.help = ['apa', 'yangtzesearch'].map(v => v + ' <pencarian>');
handler.tags = ['internet', 'tools', 'search', 'Yangtze'];
handler.command = ['yangtze', 'yangtzesearch', 'apa', 'ys'];

export default handler;
