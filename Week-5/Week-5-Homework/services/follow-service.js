const BaseService = require('./base-service')
const FollowModel = require('../models/Follow')

class FollowService extends BaseService {
    model = FollowModel
}


module.exports = new FollowService();