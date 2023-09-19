
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
//https://api.betabotz.org
//https://api.botcahx.live
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.lann && global.btc
// - Contoh global.btc = 'ngaksk?'//register di https://api.botcahx.live
// - Contoh global.lann = 'Ntahla' //register key di https://api.betabotz.org
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.


// List Key 
// Betabotz = digunakan hampir di semua fitur kecuali linkshort
// Botcahx  = digunakan untuk linkshort saja

global.owner = ['6283821362840','6281511073726','6282246997688']  
global.mods = ['6283821362840','6281511073726','6282246997688']
global.prems = ['6283821362840','6281511073726','6282246997688']
global.nameowner = 'BAYU RIZKI ZULFIKRI'
global.numberowner = '6283821362840' 
global.mail = 'bayurizkizulfikri@gmail.com' 
global.dana = '6283821362840'
global.pulsa = '6283821362840'
global.gopay = '6283821362840'
global.namebot = 'Zull-Assistant'
global.gc = 'https://chat.whatsapp.com/JxkJzuEXzGQ55C8lgmodjw'
global.web = 'https://bayu-r-z.blogspot.com/'
global.instagram = 'https://instagram.com/uby_015'
global.wm = 'Zull-Assistant'
global.watermark = wm
global.wm2 = '⫹⫺ Beta Bot'
global.wm3 = '© BAYU RIZKI ZULFIKRI'
global.wm4 = 'made by BAYU RIZKI ZULFIKRI'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = 'Bot WhatsApp'

//---- image thumbnail 
global.thumb = './foto2.jpg'

//===> Apikey
global.lann = '7jh7USsh' //isi apikey mu https://api.betabotz.org
global.btc = 'tAhTSeRa'//Isi apikey di https://api.botcahx.live
global.APIs = {   
  lann: 'https://api.betabotz.org',
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.betabotz.org': '7jh7USsh' //isi apikey mu https://api.betabotz.org
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
