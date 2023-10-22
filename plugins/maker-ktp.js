import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ\nContoh\nktp Nik|Nama|Tempat/Tgl Lahir|Jenis kelamin|Golongan Darah|Alamat|RT/RW|Kelurahan|Kecamatan|Agama|Status Perkawinan|Pekerjaan|Kewarganegaraan|Berlaku Hingga|Provinsi|kabupaten|Link Foto Muka'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://oni-chan.my.id/api/py-chan/ktpmaker?nik=${response[0]}&nama=${response[1]}&ttl=${response[2]}&jk=${response[3]}&gd=${response[4]}&almt=${response[5]}&rtw=${response[6]}&kel=${response[7]}&kc=${response[8]}&agm=${response[9]}&st=${response[10]}&krj=${response[11]}&ngr=${response[12]}&blk=${response[13]}&prv=${response[14]}&kab=${response[15]}&picturl=${response[16]}&apikey=CYGb-y85t-Wvyh`
  conn.sendFile(m.chat, res, 'ktp.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['ktp'].map(v => v + ' <text>')
handler.tags = ['logo', 'maker']
handler.command = /^(ktp)$/i
handler.limit = false
export default handler