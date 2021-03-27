module.exports = (client, handler, message) => {
    const { prefix, owners, commands } = handler


    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.substring(prefix.length).split(/ /g)
    const commandName = args[0]
    console.log(args)
    args.shift()

    const commandOBJ = commands.get(commandName) || commands.find(cmd => cmd.aliases && cmd.aliases.length && cmd.aliases.includes(commandName))

    if (!commandOBJ) return

    if (commandName.ownerOnly && !owners.includes(message.author.id)) return

    if (commandOBJ.guildOnly && !message.guild) return message.reply('This command can only be used in a server.')

    if (commandOBJ.reqArgs && commandOBJ.reqArgs > args.length) {
        if (commandOBJ.usage) {
            message.channel.send(`Incorrect usage. Use: ${commandName}${commandOBJ.usage} next time.`)
            return
        } else {
            message.channel.send('Incorrect usage. There doesn\'t seem to be a `usage` property. Try contacting one of the bot developers.')
            return
        }
    }

    if (commandOBJ.nsfwOnly && !message.channel.nsfw) {
        message.channel.send('This channel isn\'t nsfw :P take it somewhere else, for example an actual nsfw channel this time.')
        return
    }
    if (commandOBJ.reqPerms) {
        if (message.guild) {
            const missingPermission = message.channel.permissionsFor(message.member).missing(commandOBJ.reqPerms)
            if (missingPermission) {
                message.reply(`You kinda need the ${missingPermission.map(perm => `${perm.toLowerCase().replace('_', ' ')}`).join(', ')} permission(s) to use the command.`)
                return
            }
        }
    }
    if (commandOBJ.reqBotPerms) {
        if (message.guild) {
            const missingPermission = message.channel.permissionsFor(message.member).missing(commandOBJ.reqPerms)
            if (missingPermission) {
                message.reply(`I kinda need the ${missingPermission.map(perm => `${perm.toLowerCase().replace('_', ' ')}`).join(', ')} permission(s) to run the command.`)
                return
            }
        }
    }
    if (commandOBJ.requiredRoles) {
        if (message.guild) {
            const role = message.guild.roles.cache.find(r => r.name === commandOBJ.requiredRoles)

            if (!role) throw new TypeError(`The role ${role} does not exist in ${message.guild.name}. Please use an existing role next time please thanks`)

            if (!message.member.roles.cache.has(role.id)) return
        }
    }

    try {
        commandOBJ.execute({ message, args, client })
    } catch (err) {
        message.reply(`There was an error processing your request. The command that this issue is occuring in is called ${commandName}. If this persists try contacting the bot developer.`)
        console.log(err)
    }

}