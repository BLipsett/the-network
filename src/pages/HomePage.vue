<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-3">
          <Login />
        </div>
        <div class="col-md-6">
          <CreatePost v-if="user.isAuthenticated" />
          <Thread />
          <div>
            <button @click="changePage(-1)">
              Prev
            </button>
            <button @click="changePage(1)">
              Next
            </button>
          </div>
        </div>
        <div class="col-md-3">
          <Ad />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Thread from '../components/Thread.vue'
import { postsService } from '../services/PostsService'
import { adsService } from '../services/AdsService'
import CreatePost from '../components/CreatePost.vue'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  components: { Thread, CreatePost },
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        postsService.getPosts()
        adsService.getAds()
        logger.log(AppState.user)
      } catch (error) {
        Notification.error(error, 'error')
      }
    })
    return {
      user: computed(() => AppState.user),
      changePage(n) {
        AppState.currentPage += n
        postsService.getPosts()
      }

    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
