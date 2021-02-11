const fs = require('fs')
const Flatted = require('flatted')

const save = function (filename, callback) {
    fs.writeFile(filename, (err,data) =>{
        callback(err,JSON.stringify(data))
    })
}

const load = function (filename, callback) {
    fs.readFile(filename, 'utf8', (err, file) => {
        callback(err, JSON.parse(file));

    })
}


module.exports = {
    save,
    load
}