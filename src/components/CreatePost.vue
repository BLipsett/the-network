<template>
  <div class="row justify-content-center ">
    <div class="col-10 d-flex flex-column my-5 shadow b-round">
      <form class="form-group" @submit="createPost">
        <textarea class="form-control my-3" type="text-area" v-model="state.newPost.body" placeholder="text"></textarea>
        <input class="form-control" type="text" v-model="state.newPost.imgUrl" placeholder="image URL">
        <button type="submit" class="btn btn-outline-success float-right my-3">
          Send Post
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { postsService } from '../services/PostsService'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      newPost: {}
    })
    return {
      state,
      async createPost() {
        try {
          await postsService.createPost(state.newPost)
        } catch (error) {
          Notification.toast('Must add text to submit a post')
        }
      }

    }
  }
}
</script>

<style scoped>
.b-round {
  background-color: rgb(252, 249, 249);
  border-radius: 5px;
}

</style>
