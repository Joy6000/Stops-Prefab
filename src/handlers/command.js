const fs = require('fs')

function loadCMDS(dir, handler) {
    fs.readdir(`${require.main.path}\\${dir}`, (err, files) => {
        let totalCommands = 0
        for (const cmd in files) {
            totalCommands++
        }
        console.log(`Loaded a total of ${totalCommands} commands.`)
        for (const cmd of files) {
            const File = require(`${require.main.path}\\${dir}\\${cmd}`)

            if (fs.lstatSync(`${require.main.path}\\${dir}\\${cmd}`).isDirectory(), (err, stats)) {
                fs.readdir(`${require.main.path}\\${dir}\\${cmd}`, (err, files) => {
                    for (const cmd in files) {
                        totalCommands++
                    }
                    for (const command of files) {
                        const File_0 = require(`${require.main.path}\\${dir}\\${cmd}\\${command}`)
                        if (isReady(File_0)) {
                            if (handler.showLoadedCMDS = true) {
                                console.log(`Stop Prefab => loaded command "${File_0.name}"`)
                            }
                            handler.commands.set(File_0.name, File)
                        } else {
                            console.log(`Stop Prefab => Failed to load command "${command}"`)
                        }
                    }
                }) 
            }

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