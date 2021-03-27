const loadCMDS = require('../handlers/command')
const messageListener = require('../events/message')
const ready = require('../events/ready')

function Start (client, token, dir, handler) {
    loadCMDS(dir, handler)
    client.on('message', message => {
        messageListener(client, message, handler)
    })
    ready(client)
}
module.exports = Start