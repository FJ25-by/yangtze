var handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) throw 'Berikan URL dari Google Drive!'
  try {
    var vid = `https://api-fgmods.ddns.net/api/downloader/gdrive?url=${text}&apikey=RF9mFuF7`
    var aud = `https://api-fgmods.ddns.net/api/downloader/gdrive?url=${text}&apikey=RF9mFuF7` 
    await conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mpeg' }, { quoted: m }) 
    await conn.sendMessage(m.chat, { video: { url: vid }, mimetype: 'video/mp4' }, { quoted: m })
    await conn.sendMessage(m.chat, { zip: { url: zip }, mimetype: 'zip/archive' }, { quoted: m })
  } catch (e) {
    throw 'Video/Audio/Zip Tidak Ditemukan'
  }
}
handler.command = handler.help =['googledrive','gd','gdrv'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
export default handler;
