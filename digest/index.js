module.exports = function(args){
    const crypto = require('crypto')
    let hash = crypto.createHash(args[1]).update('some_string').digest("hex")
    console.log(hash)
}