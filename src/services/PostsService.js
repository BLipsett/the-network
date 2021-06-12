import { AppState } from '../AppState'
import Post from '../models/Post'
import { logger } from '../utils/Logger'

const { api } = require('./AxiosService')

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    AppState.posts = res.data.posts.map(p => new Post(p))
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
}

export const postsService = new PostsService()
