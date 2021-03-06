import { AppState } from '../AppState'

const { logger } = require('../utils/Logger')
const { api } = require('./AxiosService')

class ProfilesService {
  async getUserProfile(id) {
    await api.get('/api/profiles/' + id)
  }

  async setActiveAccount(id) {
    const res = await api.get('/api/profiles/' + id)
    AppState.activeAccount = res.data
    logger.log('the active user ', res.data)
  }

  async getAccount() {
    const res = await api.get('/account')
    logger.log('account info', res)
  }

  async editProfile(info) {
    await api.put('/account', info)
  }

  async searchProfiles(query) {
    const res = await api.get('/api/profiles?query=' + query)
    logger.log('prof search here', res)
    AppState.searchProfiles = res.data
  }
}

export const profilesService = new ProfilesService()
