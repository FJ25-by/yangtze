function handler(m) {
  
  const kontak = {
	"displayName": 'My owner',
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:FJST OFFC\nitem1.TEL;waid=6285774510196:6285774510196\nitem1.X-ABLabel:\nJangan Spam\nURL;My Web:https://fjofficial.me\nEMAIL;Email Owner:fajar2523gg@gmail.com\nORG: PEMILIK BOT\nEND:VCARD`
}
const kontak2 = {
	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:Fajril\nitem1.TEL;waid=6285211230074:6285211230074\nitem1.X-ABLabel:\nJangan Spam\nURL;My Web:https://nekopoicare.com\nEMAIL;Email Owner:zhindev@gmail.com\nORG: OWNER2\nEND:VCARD`
}

conn.sendMessage(m.chat, { contacts: { contacts: [kontak, kontak2] }}, { quoted: m })
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler