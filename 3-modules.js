// CommonJS, every file is module (by default)
// Modules - Encapsulated Code
const { john, peter } = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative')
require(`./7-new-info`)
sayHi('Suzan')
sayHi(john)
sayHi(peter)