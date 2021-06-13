<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-3">
          <Login />
        </div>
        <div class="col-md-6">
          <Search v-for="p in searchProfiles" :key="p.id" :profile="p" />
          <Post v-for="p in searchPosts" :key="p.id" :post="p" />
        </div>
        <div class="col-md-3">
          <Ad />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({

    })
    return {
      state,
      searchPosts: computed(() => AppState.searchPosts),
      searchProfiles: computed(() => AppState.searchProfiles)

    }
  }

}
</script>

<style>

</style>
