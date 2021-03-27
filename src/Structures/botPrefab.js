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
            this.commandsDir = 'commands';
            this.owners = [];


            if (this.showWarns === true) {
            if (!this.client) console.warn('Stop Prefab => Missing Discord Client Instance')
            if (!this.prefix) console.warn('Stop Prefab => No prefix passed in. Defaulting to \'!\'')
            if (!this.mongoURI) console.warn('Stop Prefab => No MongoURI provided.')
            }
            Start(client, this.commandsDir, this)


        }
        /**
         * 
         * @param {String} prefix 
         */
        setPrefix(prefix) {
            if (typeof prefix !== 'string') throw new TypeError('Stop Prefab => Prefix must be a string')
            this.prefix = prefix
            return this
        }
        /**
         * 
         * @param {String} URI MUST HAVE A MONGO SERVER UP AND RUNNING!!!
         */
        setMongoURI(URI) {
            if (typeof URI !== 'string') throw new TypeError('Stop Prefab => URI must be a string')
            this.mongoURI = URI
            return this
        }
        /**
         * 
         * @deprecated You must login yourself. Expect this feature to be added in a later version.
         */
        setToken(token) {
            if (typeof token !== 'string') throw new TypeError('Stop Prefab => Token must be a string')
            this.token = token
            return this
        }
        /**
         * 
         * @param {boolean} showWarns 
         */
        showWarnings(showWarns) {
            if (typeof showWarns !== 'boolean') throw new TypeError('Stop Prefab => The Show Warns option must be of boolean value. (true/false)')
            this.showWarns = showWarns
            return this
        }
        /**
         * 
         * @param {boolean} showCMDS 
         */
        showLoadedCommands(showCMDS) {
            if (typeof showCMDS !== 'boolean') throw new TypeError('Stop Prefab => The Show Loaded Commands option must be of boolean value. (true/false)')
            this.showLoadedCMDS = showCMDS
            return this
        }
        /**
         * 
         * @param {Array<String>} Owners 
         */
        setOwners(Owners) {
            if (typeof Owners === 'string') Owners = [Owners];
            this.owners = Owners
            return this
        }
        /**
         * 
         * @param {String>} commandsDir
         */
        setCommandsDir(commandsDir) {
            this.commandsDir = commandsDir
            return this
        }
    }
    

module.exports = Bot