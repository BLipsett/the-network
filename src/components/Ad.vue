<template>
  <div class="container-fluid advert-bar">
    <div class="row my-3 justify-content-around">
      <div class="col-10 my-3 shadow" v-for="ad in ads" :key="ad.id">
        <h4>{{ ad.title }}</h4>
        <img :src="ad.tall">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({

    })
    return {
      state,
      ads: computed(() => AppState.ads)

    }
  }

}
</script>

<style scoped>
.advert-bar{

}

img {
  width: 100%;
}

</style>
