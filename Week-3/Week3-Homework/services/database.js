const fs = require('fs')
const Flatted = require('flatted')
const { reject } = require('lodash')






const save = function (filename, callback) {
    fs.writeFile(filename, (err,data) =>{
        callback(err,JSON.stringify(data))
    })
}

const load = function (filename, callback) {
    fs.readFile(filename, 'utf8', (err, file) => {
        if (err){
            console.log("There'a read error")
            callback(err)
            return
        } 
        
        callback(null, JSON.parse(file))
        })
}


