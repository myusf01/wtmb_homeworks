const BaseService = require('./base-service')
const LikeModel = require('../models/like')

class LikeService extends BaseService {
    constructor() {
        super(LikeModel, `${__dirname}/../database/like-database.json`)
    }
}


module.exports = new LikeService();