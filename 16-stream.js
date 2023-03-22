// how we've used readFileSync and readFile in the past, it gets hold file and some files are BIG
// storing in variable every time can waste lots of system memory

// solution -> read stream option
const { createReadStream } = require('fs')

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000,encoding: 'utf8' });

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 900000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' s})

//event syntax, event listener listening for data
stream.on('data', (result) => {
    console.log(result)
})

stream.on('data', (err) => console.log(err))