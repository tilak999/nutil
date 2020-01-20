const cli = require('../commander');
const crypto = require('crypto')

cli.description('Generate hexadecimal digest from a given string.')
    .option('-a, --algorithm [md5|sha256|sha512]', 'Algorithm to use for digest generation', 'md5');

module.exports = function (args) {
    try {
        cli.parse(args)
        let hash = crypto.createHash(cli.algorithm).update(cli.args[0]).digest("hex")
        console.log(hash)
    } catch (e) {
        console.log(e.code == 'ERR_INVALID_ARG_TYPE' ? 'error: Argument `data` missing' : e.toString())
    }
}