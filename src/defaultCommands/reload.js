const fs = require("fs")

module.exports = {
    name: 'reload',
    reqArgs: 0,
    usage: '<command>',
    execute({ message, args, client, handler}) {
            if (fs.existsSync(`${require.main.path}\\${handler.commandsDir}\\${args[0]}.js`)) {
            delete require.cache[require.resolve(`./${args[0]}.js`)]
                message.reply(`Successfully reloaded command: "${args[0]}"`)
            } else {
                message.reply('That command doesn\'t exist. Next time try inputting a command that exists c:')
            }
    }
}