const fs = require('fs')
const path = require('path')

function loadCMDS(dir, handler) {
    fs.readdir(`${require.main}\\${dir}`, (files, err) => {
        let totalCommands = 0
        for (const cmd in files) {
            totalCommands++
        }
        console.log(`Loaded a total of ${totalCommands} commands.`)
        for (const cmd of files) {
            const File = require(cmd)
            if (handler.showLoadedCMDS) {
            if (isReady(File)) {
                console.log(`Stop Prefab => loaded command ${File.name}`)
                handler.commands.set(File.name, File)
            } else {
                console.log(`Stop Prefab =>Failed to load command "${File.name}"`)
            }
        }
        if (!isReady(File)) console.log(`Stop Prefab => Failed to load command "${File.name}"`)
        }
    })
}
function isReady(file) {
    if (!file.callback || !file.name) {
        return false
    } else {
        return true
    }
}
module.exports = loadCMDS