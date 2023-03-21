const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data)
            }
        })
    })
}

const start = async () =>{
    try {
        const first = await getText('./content/first.txt');
    } catch (error) {
        console.log(error)
    }


}
// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
start()


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