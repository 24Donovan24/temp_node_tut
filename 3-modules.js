//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative_flavour')
require('./7-mind-grenade') //can still run even variable not assigned or invoked
//console.log(data)
//console.log(names)


// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)