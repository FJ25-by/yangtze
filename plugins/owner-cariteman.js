/*
Di Buat : Zyko MD
©Zyko MD 2023

 * ig: @zzyko_04
 * yt: @zykobotz
 * tt: @zzyko_04

Jangan di hapus creatornya kack
Saya capek ngetik kode 

"Wahai orang-orang yang beriman, mengapakah kamu mengatakan sesuatu yang tidak kamu kerjakan?
Amat besar kebencian di sisi Allah bahwa kamu mengatakan apa-apa yang tidak kamu kerjakan."
(QS ash-Shaff: 2-3).
*/

import PhoneNumber from 'awesome-phonenumber';
let handler = async (m, { conn }) => {
  let randomCountryCode = Math.random() < 0.5 ? '+62' : getRandomForeignCountryCode();
  let randomPhoneNumber = generateRandomPhoneNumber(randomCountryCode);
  while (!isWhatsAppNumber(randomPhoneNumber)) {
    randomCountryCode = getRandomForeignCountryCode();
    randomPhoneNumber = generateRandomPhoneNumber(randomCountryCode);
  }
  await delay(4000); 
  conn.reply(m.chat, 'Sedang mencari...', m);
  await delay(4000); 
  conn.reply(m.chat, 'Berhasil mendapatkan satu orang', m);
  await delay(5000); 
  conn.sendMessage(
    m.chat,
    { text: `Nih Kak ${randomPhoneNumber}\n\nhttps://wa.me/${randomPhoneNumber.split("@")[0]}` },
    m
  );
};
function getRandomForeignCountryCode() {
  let countryCodes = ['+60', '+86', '+81', '+90']; // Kode negara untuk Malaysia, Cina, Jepang, Turki, dst.
  return countryCodes[Math.floor(Math.random() * countryCodes.length)];
}
function generateRandomPhoneNumber(countryCode) {
  let phoneNumber = countryCode;
  for (let i = 0; i < 9; i++) {
    phoneNumber += Math.floor(Math.random() * 10);
  }
  return phoneNumber;
}
function isWhatsAppNumber(phoneNumber) {
  const pn = new PhoneNumber(phoneNumber);
  return pn.isValid() && pn.isMobile();
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
handler.help = ['cariteman', 'caridoi']
handler.tags = ['owner']
handler.command = /^(cariteman|caridoi)$/i;
handler.level = 10
export default handler;
