import { AppState } from '../AppState'
import Post from '../models/Post'
import { logger } from '../utils/Logger'
import Notification from '../utils/Notification'

const { api } = require('./AxiosService')

class PostsService {
  async getPosts() {
    try {
      const res = await api.get('/api/posts?page=' + AppState.currentPage)
      AppState.posts = res.data.posts.map(p => new Post(p))
      logger.log(res.data)
    } catch (error) {
      Notification.error(error, 'error')
    }
  }

  async getUserPosts(id) {
    const res = await api.get('api/profiles/' + id + '/posts')
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log(res)
  }

  async createPost(newPost) {
    try {
      const res = await api.post('/api/posts', newPost)
      logger.log(res)
    } catch (error) {
      Notification.error(error, 'error')
    }
  }

  async deletePost(id) {
    const res = await api.delete('/api/posts/' + id)
    logger.log(res)
  }

  async searchPosts(query) {
    logger.log('made it to postservice')
    const res = await api.get('/api/posts?query=' + query)
    AppState.searchPosts = res.data.posts.map(p => new Post(p))
    logger.log('posts search', res)
  }

  async likePost(id) {
    await api.post('/api/posts/' + id + '/like')
  }
}

export const postsService = new PostsService()
