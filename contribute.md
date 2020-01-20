# Contribute Module

The goal of `nutil` is to provide standalone utilities that can used without any installation steps (using `npx`). All the modules in `nutil` are dependency free (zero `node_modules`) and doesn't require any third party library to work. We encourage you to build self contained utility modules. If your module has more than 1000 lines of code then it would be better to publich the module as independent utility. We focus on adding value utils in small package :)

### Steps to create a module
1. Fork the `nutil` repository (required, to submit pull request)
2. Let's say we want to name our module **hello-module**
```sh
# clone your forked repository
cd nutil
mkdir hello-module

# create an empty index.js inside the hello-module directory
touch ./hello-module/index.js 
```
3. Add the following code to the `index.js` file
```node
// Require commander to parse input arguments passed to the module
const cli = require('../commander');

// for details, see: https://www.npmjs.com/package/commander
cli.description('Simple module to say `hello, {user}`')
    .option('-n, --name [username]', 'Name that will be printed along side hello', 'friend');

// Export the module's main function
module.exports = function(args){
    cli.parse(args)
    console.log("Hello," cli.name)
}
```
4. Save the file and run the below command to test the newly created module.
```sh
npm run main hello-module -n Jarvis
# output: Hello, Jarvis
```

finally, when you are ready to publish the module to the world open a pull request with us. Please include a short description of the module while submitting the pull request.
