const fs = require('fs')
const readdir = require('recursive-readdir')

function loadCMDS(dir, handler) {
    const path = `${require.main.path}\\${dir}`
    readdir(path, (err, files) => {
        let totalCommands = 0
        for (const cmd in files) {
            totalCommands++
        }
        for (const cmd of files) {
            const File = require(`${cmd}`) 
            if (isReady(File)) {
                if (handler.showLoadedCMDS = true) { 
                console.log(`Stop Prefab => loaded command "${File.name}"`)
                  }
                handler.commands.set(File.name, File)
                console.log(`Loaded a total of ${totalCommands} commands.`)
            } else {
                const failed = cmd.replace(/^.*[\\\/]/, '')
                console.log(`Stop Prefab => Failed to load command "${failed}"`)
            }

        }
        
        
  })
function isReady(file) {
    if (!file.execute || !file.name || !file || file === {}) {
        return false
    } else {
        return true
    }
  }
}

module.exports = loadCMDS