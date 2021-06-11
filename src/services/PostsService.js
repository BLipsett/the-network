import { AppState } from '../AppState'
import Post from '../models/Post'

const { api } = require('./AxiosService')

class PostsService {
  async getPosts() {
    const res = await api.get('/api/posts')
    AppState.posts = res.data.posts.map(p => new Post(p))
  }

  createPost() {
    console.log('Create a post')
  }
}

export const postsService = new PostsService()
