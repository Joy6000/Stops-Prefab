# Installation
`npm install stops-djs-prefab`
# Initialization
Index: 
```js
const Discord = require('discord.js')
const client = new Discord.Client()
const botPrefab = require('stops-djs-prefab')

new botPrefab(client, {
    commands: 'commands' // Commands Directory
})
.setPrefix('>') // sets prefix
.setMongoURI('MONGOURI') // Must have a mongo server up and running!
.showWarnings(false) // If set to false warnings will not show. Set to true by default.
.showLoadedCommands(false) // If set to false it will not log all commands that were successfully loaded. Set to true by default.
.setOwners(['123456789123456789']) // Sets bot owners for owneronly commands.
```
### Making a command
Command File in Commands Directory: 
```js
module.exports = {
    name: 'ping',
    aliases: 'p',
    execute({ message, args, client }) {
        message.reply('Pong!!')
    }
}
```
### Making an event
#### Coming Soon!!
