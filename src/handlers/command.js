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
            const File = require(`${path}\\${cmd}`) 
            if (isReady(File)) {
                if (handler.showLoadedCMDS = true) { 
                console.log(`Stop Prefab => loaded command "${File.name}"`)
                  }
                handler.commands.set(File.name, File)
                console.log(`Loaded a total of ${totalCommands} commands.`)
            } else {
                console.log(`Stop Prefab => Failed to load command "${cmd}"`)
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