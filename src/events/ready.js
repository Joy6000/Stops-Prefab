module.exports = (client) => {
    client.on('ready', () => {
        console.log(`Ready and logged in as: ${client.user.tag}`)
    })
}