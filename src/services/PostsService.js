import { AppState } from '../AppState'
import Post from '../models/Post'
import { logger } from '../utils/Logger'

const { api } = require('./AxiosService')

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log(res.data)
  }

  async getUserPosts(id) {
    const res = await api.get('api/profiles/' + id + '/posts')
    AppState.posts = res.data.posts.map(p => new Post(p))
    logger.log(res)
  }

  async createPost(newPost) {
    const res = await api.post('/api/posts', newPost)
    logger.log(res)
  }

  async deletePost(id) {
    const res = await api.delete('/api/posts/' + id)
    logger.log(res)
  }

  async searchPosts(query) {
    logger.log('made it to postservice')
    const res = await api.get('/api/posts?query=' + query)
    logger.log('posts search', res)
  }
}

export const postsService = new PostsService()
