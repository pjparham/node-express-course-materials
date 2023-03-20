const { readFileSync, writeFileSync } = require('fs');

console.log('start')
//reading files
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
const third = readFileSync('./content/result-sync.txt', 'utf-8')

// console.log(first, second);

//writing files
// if file isn't there, node creates it
// if file is there, node overwrites the values
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
)
console.log('done with this task');
console.log('starting the next one');