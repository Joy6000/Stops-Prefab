import * as Discord from 'discord.js'

declare module 'stops-djs-prefab' {
    export class Bot {
        constructor(client, options: {});
        // {options}
        public client: Object
        public commandsDir: String
        public eventsDir: String
        private commands: Discord.Collection
        private events: Discord.Collection
        private prefix: String
        // {methods}
        public method; setPrefix(prefix: String);
        public method1; setMongoURI(URI: String);
        public method2; showWarnings(showWarn: Boolean);
        public method3; showLoadedCommands(showCMDS: Boolean);
        public method4; setOwners(Owners: Array<String>);
        public method5; showLoadedEvents(showEVNS: Boolean);
    }
}