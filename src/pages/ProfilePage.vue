<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <Profile />
      </div>
      <div class="col-md-10">
        <Thread />
      </div>
    </div>
    <div class="col-md-2">
      <Ad />
    </div>
  </div>
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
        await profilesService.getAccount()
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
