<template>
  <div class="col-md-3">
    <form @submit.prevent="searchPosts(), searchProfiles()" class="form-group">
      <input v-model="state.search.query" placeholder="search for posts or people" class="form-control">
      <button>search</button>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'
import { profilesService } from '../services/ProfilesService'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const state = reactive({
      search: {}
    })
    return {
      state,
      async searchPosts() {
        try {
          logger.log('search a post')
          await postsService.searchPosts(state.search.query)
        } catch (error) {
          Notification.error(error)
        }
      },
      async searchProfiles() {
        try {
          logger.log('search a post')
          await profilesService.searchProfiles(state.search.query)
        } catch (error) {
          Notification.error(error)
        }
      }
    }
  }

}
</script>

<style>

</style>
