<template>
  <div class="row my-4">
    <div class="col-12 m-auto border p-0 shadow">
      <p class="post-text">
        {{ post.body }}
      </p>
      <img :src="post.img">
      <h4>{{ post.creatorEmail }} + {{ post.creatorId }} </h4>
      <router-link :to="{name:'ProfilePage', params: { id: post.creatorId }}" :key="post.creatorId">
        <img
          :src="post.creatorPicture"
          class="user-icon"
        >
      </router-link>
      <p v-if="typeof post.likes == 'number'">
        {{ post.likes }}
      </p>
      <button @click="likePost">
        Like
      </button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    post: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
    })
    return {
      state,
      likePost() {
        console.log('like dis post')
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
  height: 3rem;
  width: 3rem;
  border-radius: 25%;
}

.post-text{
  font-size: 18px;
}

</style>
