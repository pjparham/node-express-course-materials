const { get } = require('lodash')

const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// Notes: this is very important. the util and util.promisify allowed us to comment out the get
// text function, which already made things much simplier. but then adding .promises
// to the end of require('fs') made readFile and writeFile act as readFilePromise and 
// writeFilePromise were acting. this is gettting into the weeds of node and the concepts of this lesson
// are hugely important.

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');
        await writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS AWESOME : ${first} , ${second}`,
            { flag: 'a' }
        )
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}
start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data)
//             }
//         })
//     })
// }


// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))


// console.log('started a first task')
// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if (err){
//          console.log(err)
//          return
//     }
//     console.log(result)
//     console.log('completed first task')
// })
// console.log('starting next task')