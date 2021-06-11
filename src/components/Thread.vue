<template>
  <div class="container-fluid">
    <div class="row justify-content-center border my-3">
      <div class="col-md-8">
        <h3>Here is the thread component</h3>
        <Post v-for="p in posts" :key="p.id" :post="p" />
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
      posts: computed(() => AppState.posts)
    }
  }

}
</script>

<style>

</style>
