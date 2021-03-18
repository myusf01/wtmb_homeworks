const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel

    async getUserById(userID){
        return this.findItem(userID)
    }
    
}


module.exports = new UserService()