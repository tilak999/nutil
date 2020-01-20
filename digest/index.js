module.exports = function(args){
    const crypto = require('crypto')
    let hash = crypto.createHash(args[1]).update(args[2]).digest("hex")
    console.log(hash)
}