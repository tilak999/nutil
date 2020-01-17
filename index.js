const fs = require('fs')

const input = process.argv
const modulePath = './'+input[2]
const moduleName = input[2]

if(fs.existsSync(modulePath)){ 
    input.splice(0,2);
    if(typeof require(modulePath) == 'function') require(modulePath)(input)
    else {
        console.log("'"+moduleName+"'",'Module must export a function.')
        console.log("See Example: https://gist.github.com/")
    }
}
