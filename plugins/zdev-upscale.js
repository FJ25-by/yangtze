import fetch from 'node-fetch';
import { addWatermark } from '../lib/jimp.js';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Silakan berikan url gambar.`

  m.reply('_*Loading...*_\nⓘTolong jangan spam');  // menambahkan respon loading

  let url = `https://api.caliph.biz.id/api/upscale?img=${text}&apikey=bnKKcR5p`

  let res = await fetch(url, {
    method: 'GET',
  })

  if (!res.ok) throw `Gagal Upscale, pastikan URL gambar sudah benar.`

  // Add watermark
  let bufferWithWatermark = await addWatermark(await res.buffer(), '');

  await conn.sendFile(m.chat, bufferWithWatermark, 'zdev.png', '*© Yangtze*', m)
}
handler.command = /^(upscale|upscale2|upscale3|yhd|yangtzehd)$/i
handler.help = ['upscale <url>','upscale2 <url>','upscale3 <url>','YangtzeHd <url>']
handler.tags = ['tools', 'yangtze']
handler.limit = true

export default handler
