import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  activeAccount: null,
  posts: [],
  ads: [],
  searchPosts: [],
  searchProfiles: [],
  totalPages: 0,
  currentPage: 1
})
