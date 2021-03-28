const loadCMDS = require('../handlers/command')
const loadEVNTS = require('../handlers/event')
const messageListener = require('../events/message')
const ready = require('../events/ready')

async function Start (client, CMDdir, EVNDir, handler) {
    loadCMDS(CMDdir, handler)
    loadEVNTS(EVNDir, handler, client)
    client.on('message', message => {
        messageListener(client, handler, message)
    })
    ready(client)
}
module.exports = Start