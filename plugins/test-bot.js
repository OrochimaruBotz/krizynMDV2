let handler = async (m, { conn }) => {
let caption = `*Gw tau lu cuman coba jaringan doang🗿*`

conn.sendButton( m.chat, caption, `©️ GojoBotz`, `BISA Humanz`, `.👍`, m)

       }
       
handler.customPrefix = /^(tes)/i
handler.command = new RegExp
module.exports = handler
