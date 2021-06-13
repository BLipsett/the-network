<template>
  <div>
    <img :src="profile.picture">
    <p>{{ profile.class }}</p>
    <p>{{ profile.name }}</p>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  props: {
    profile: { type: Object, required: true }
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

<style lang='scss' scoped>

img {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
}

</style>
