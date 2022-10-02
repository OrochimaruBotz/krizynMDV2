let handler = async (m, { conn }) => {
let caption = `*📮: HALLO KAK SAYA GOJOBOTZ,SILAHKAN KLIK BUTTON DI BAWAH UNTUK MENGETAHUI FITUR BOT*`

conn.sendButton( m.chat, caption, `©️ GojoBotzMD`, `Menu`, `.menu`, m)

       }
       
handler.customPrefix = /^(Hallo|Hay|Bot|Haibot|Hai|Hay|menu)/i
handler.command = new RegExp
module.exports = handler
