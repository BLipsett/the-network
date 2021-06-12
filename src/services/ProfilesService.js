const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')

class ProfilesService {
  async getUserProfile(id) {
    const res = await api.get('/api/profiles/' + id)
    logger.log(res)
  }
}

export const profilesService = new ProfilesService()
