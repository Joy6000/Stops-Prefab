const { loadAll } = require('../handlers/command')
const messageListener = require('../events/message')
const ready = require('../events/ready')

async function Start (client, dir, handler) {
    loadAll.loadCMDS(dir, handler)
    // loadAll.loadDefaults(handler)
    client.on('message', message => {
        messageListener(client, handler, message)
    })
    ready(client)
}
module.exports = Start