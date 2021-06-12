<template>
  <h3> User Profules </h3>
  <Thread />
</template>

<script>
import { watchEffect } from '@vue/runtime-core'
import { postsService } from '../services/PostsService'
import { profilesService } from '../services/ProfilesService'
import { useRoute } from 'vue-router'

export default {
  setup() {
    const route = useRoute()
    watchEffect(async() => {
      try {
        await profilesService.getUserProfile(route.params.id)
        await postsService.getUserPosts(route.params.id)
      } catch (error) {
        Notification.error(error, 'error')
      }
    })
    return {

    }
  }

}
</script>

<style>

</style>
