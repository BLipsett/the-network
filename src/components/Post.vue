<template>
  <div class="row my-4">
    <div class="col-12 m-auto border p-0 shadow">
      <p class="post-text">
        {{ post.body }}
      </p>
      <img :src="post.img">
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
      state
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

.post-text{
  font-size: 18px;
}

</style>
