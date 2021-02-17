// const { reject } = require("lodash")
const fs = require("fs")



let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename,'utf8', (err, contents)=> {
            if (err) return reject(err)

            resolve(contents)
        })
    })
}


// ReadFile(__dirname +'/files/1.txt')
//     .then(console.log)
//     .then(() => ReadFile(__dirname + '/files/2.txt'))
//     .then(console.log)
//     .then(() => ReadFile(__dirname + '/files/3.txt'))
//     .then(console.log)
//     .catch(err => console.log(err))



async function main() {
    const contents1 = await readFile(__dirname + "/files/1.txt")
    console.log(contents1)
    const contents2 = await readFile(__dirname + "/files/2.txt")
    console.log(contents2)

}

main();
console.log('alooo')
console.log('ne vaaaaar')