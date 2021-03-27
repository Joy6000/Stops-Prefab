const loadCMDS = require('../handlers/command')
function login(client, token) {
    client.login(token)
}

function Start (client, token, dir, handler) {
    loadCMDS(dir, handler)
    login(client, token)
}
module.exports = Start