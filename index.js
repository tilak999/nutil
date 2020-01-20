#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const input = process.argv

if (input[2]) {

    const modulePath = path.join(process.mainModule.path, input[2])
    const moduleName = input[2]

    if (fs.existsSync(modulePath)) {

        /* modify the args array to pass it to modules*/
        input.splice(1,1)
        input[1] = modulePath
        
        if (typeof require(modulePath) == 'function') require(modulePath)(input)
        else {
            console.log("'" + moduleName + "'", 'Module must export a function.')
            console.log("See Example: https://gist.github.com/")
        }
    }
} else {
    console.log("Usage:")
    console.log("npx","nutil","[Module]","[Module Args]")
}