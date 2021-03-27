    const Discord = require('discord.js')
    const Start = require('../utils/utils')
    class Bot {
        constructor(client, options = {}) {
            this.client = client;
            this.prefix = '!';
            this.mongoURI = options.mongoURI;
            this.token = options.token;
            this.showWarns = true;
            this.showLoadedCMDS = true;
            this.commands = new Discord.Collection();
            this.commandsDir = options.commandsDir;
            this.owners = [];

            const {prefix, mongoURI, token, showWarns, commandsDir } = options
            if (showWarns === true) {
            if (!client) console.warn('Stop Prefab => Missing Discord Client Instance')
            if (!prefix) console.warn('Stop Prefab => No prefix passed in. Defaulting to \'!\'')
            if (!token) console.warn('Stop Prefab => No token passed in. Halted')
            if (!mongoURI) console.warn('Stop Prefab => No MongoURI provided.')
            }
            Start(this.client, this.token, commandsDir, this)


        }
        /**
         * 
         * @param {String} prefix 
         */
        setPrefix(prefix) {
            if (typeof prefix !== 'string') throw new TypeError('Stop Prefab => Prefix must be a string')
            this.prefix = prefix
        }
        /**
         * 
         * @param {String} URI MUST HAVE A MONGO SERVER UP AND RUNNING!!!
         */
        setMongoURI(URI) {
            if (typeof URI !== 'string') throw new TypeError('Stop Prefab => URI must be a string')
            this.mongoURI = URI
        }
        /**
         * 
         * @param {String} token 
         */
        setToken(token) {
            if (typeof token !== 'string') throw new TypeError('Stop Prefab => Token must be a string')
            this.token = token
        }
        /**
         * 
         * @param {boolean} showWarns 
         */
        showWarnings(showWarns) {
            if (typeof showWarns !== 'boolean') throw new TypeError('Stop Prefab => The Show Warns option must be of boolean value. (true/false)')
            this.showWarns = showWarns
        }
        /**
         * 
         * @param {boolean} showCMDS 
         */
        showLoadedCommands(showCMDS) {
            if (typeof showCMDS !== 'boolean') throw new TypeError('Stop Prefab => The Show Loaded Commands option must be of boolean value. (true/false)')
            this.showLoadedCMDS = showCMDS
        }
        /**
         * 
         * @param {Array<String>} Owners 
         */
        setOwners(Owners) {
            if (typeof Owners === 'string') Owners = [Owners];
            this.owners = Owners
        }
    }
    

module.exports = Bot