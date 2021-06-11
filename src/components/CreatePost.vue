<template>
  <div class="row">
    <div class="col-12 d-flex flex-column">
      <h1> Create Post form for acc holders </h1>
      <form @submit.prevent="createPost">
        <textarea type="text-area" v-model="state.newPost.body" placeholder="text"></textarea>
        <input type="text" v-model="state.newPost.imgUrl" placeholder="image URL">
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postsService } from '../services/PostsService'
export default {
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      createPost() {
        postsService.createPost()
      }

    }
  }
}
</script>

<style>

</style>
