    const Discord = require('discord.js')
    const Start = require('../utils/utils')
    class Bot {
        constructor(client, options = {}) {
            this.client = client;
            this.prefix = '!';
            this.token = options.token;
            this.mongoURI = options.mongoURI;
            this.showWarns = true;
            this.showLoadedCMDS = true;
            this.commands = new Discord.Collection();
            this.commandsDir = options.commandsDir;
            this.events = new Discord.Collection();
            this.eventsDir = options.eventsDir;
            this.owners = [];
            this.showLoadedEVNS = true;
            this.loadDFTS = true;


            if (this.showWarns === true) {
            if (!this.client) console.warn('Stop Prefab => Missing Discord Client Instance.')
            if (!this.commandsDir) console.warn('Stop Prefab => Missing commands directory.')
            if (!this.eventsDir) console.warn('Stop Prefab => Missing events directory.')
            if (!this.mongoURI) console.warn('Stop Prefab => No MongoURI provided.')
            }
            Start(client, options.commandsDir, options.eventsDir, this)


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
         * @param {boolean} showWarns 
         */
        showWarnings(showWarn) {
            if (typeof showWarns !== 'boolean') throw new TypeError('Stop Prefab => The Show Warns option must be of boolean value. (true/false)')
            this.showWarns = showWarn
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
         * @deprecated 
         */
        setCommandsDir(commandsDir) {
            this.commandsDir = commandsDir
            return this
        }
        /**
         * 
         * @deprecated
         */
        loadDefaults(load) {
            if (typeof load !== 'boolean') throw new TypeError('Stop Prefab => The Load Defaults option must be of boolean value. (true/false)')
            this.loadDFTS = load
            return this
        }
        showLoadedEvents(showEVNS) {
            if (typeof showEVNS !== 'boolean') throw new TypeError('Stop Prefab => The Show Loaded Events option must be of boolean value. (true/false)')
            this.showLoadedEVNS = showEVNS
            return this
        }
    }
    

module.exports = Bot