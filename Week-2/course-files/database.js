const fs =  require('fs')

const save = function (filename, data) {
    fs.writeFile(filename, JSON.stringify(data))
}

const load = function (filename) {
    return JSON.parse(fs.readFile(filename, 'utf8'))

}


module.exports = {
    save,
    load
}
