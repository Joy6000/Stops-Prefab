const fs = require('fs')
const path = require('path')

function loadCMDS(dir, handler) {
    fs.readdir(`${require.main.path}\\${dir}`, (err, files) => {
        let totalCommands = 0
        for (const cmd in files) {
            totalCommands++
        }
        console.log(`Loaded a total of ${totalCommands} commands.`)
        for (const cmd of files) {
            const File = require(`${require.main.path}\\${dir}\\${cmd}`)
            if (handler.showLoadedCMDS === true) {
            if (isReady(File)) {
                console.log(`Stop Prefab => loaded command "${File.name}"`)
                handler.commands.set(File.name, File)
            } else {
                console.log(`Stop Prefab => Failed to load command "${cmd}"`)
            }
        }
    }
        
  })
}
function loadDefaults (handler) {
    if (handler.defaults === true) {
        fs.readdir('./defaultCommands', (err, files) => {
            for (const cmd of files) {
                const File = require(`../defaultCommands/${cmd}`)
                handler.commands.set(File.name, File)
            }
        })
    }

}

function isReady(file) {
    if (!file.execute || !file.name || !file || file === {}) {
        return false
    } else {
        return true
    }
}

module.exports.loadAll = { loadCMDS, loadDefaults }