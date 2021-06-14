<template>
  <div class="row my-4">
    <div class="col-12 m-auto border p-0 shadow">
      <div class="row">
        <div class="col-12 d-flex p-3 align-items-center">
          <router-link :to="{name:'ProfilePage', params: { id: post.creatorId }}" :key="post.creatorId" @click="setActiveAccount(post.creatorId)">
            <img
              :src="post.creatorPicture"
              class="user-icon"
            >
          </router-link>
          <div class=" ml-3">
            <h5 class="m-0">
              {{ post.creatorEmail }}
            </h5>
            <p>{{ timeAgo }}</p>
          </div>
          <i v-if="account.id === post.creatorId" class="fas fa-trash ml-auto" @click="deletePost(post.id)">
          </i>
        </div>
      </div>
      <p class="post-text">
        {{ post.body }}
      </p>
      <img :src="post.img">
      <p v-if="typeof post.likes == 'number'">
        {{ post.likes }}
      </p>
      <button @click="likePost(post.id)">
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import { postsService } from '../services/PostsService'
import moment from 'moment'
import { profilesService } from '../services/ProfilesService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  props: {
    post: { type: Object, required: true }
  },
  setup(props) {
    const timeAgo = moment(props.post.createdAt).fromNow(true)
    const state = reactive({

    })
    return {
      state,
      timeAgo,
      account: computed(() => AppState.account),
      likePost(id) {
        logger.log('like dis post')
        postsService.likePost(id)
      },

      deletePost(id) {
        logger.log(id)
        postsService.deletePost(id)
      },

      setActiveAccount(id) {
        profilesService.setActiveAccount(id)
      }
    }
  }
}
</script>

<style scoped>
.border{
  border: darkblue 2px solid;
}
img {
  width: 100%
}

.user-icon{
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}

.post-text{
  font-size: 18px;
}

</style>
