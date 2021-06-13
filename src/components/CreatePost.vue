<template>
  <div class="row justify-content-center ">
    <div class="col-10 d-flex flex-column my-5 shadow b-round">
      <form class="form-group" @submit.prevent="createPost">
        <textarea class="form-control my-3" type="text-area" v-model="state.newPost.body" placeholder="text"></textarea>
        <input class="form-control" type="text" v-model="state.newPost.imgUrl" placeholder="image URL">
        <button type="button" class="btn btn-outline-success float-right my-3">
          Send Post
        </button>
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
      async createPost() {
        await postsService.createPost(state.newPost)
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
