<template>
  <div v-if="activeAccount" class="col-md-8 offset-md-2 my-4">
    <div v-if="activeAccount.coverImg">
      <img class="cover-art" :src="activeAccount.coverImg" alt="background image">
    </div>
    <div v-else>
      <img class="cover-art" src="'https: wallpapercave.com/wp/wp4575152.jpg'">
    </div>
    <div>
      <img class="user-pic" :src="activeAccount.picture">
    </div>
    <p>{{ activeAccount.bio }} </p>
    <p>
      {{ activeAccount.name }}
    </p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#profileModal" @click="ProfileModal">
      edit
    </button>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed } from '@vue/runtime-core'
export default {
  setup() {
    const state = reactive({

    })
    return {
      state,
      activeAccount: computed(() => AppState.activeAccount)

    }
  }

}
</script>

<style scoped>
.cover-art{
  position: relative;
  object-fit: cover;
  height: 30vh;
  min-width: 100%;
}

.user-pic {
  position: absolute;
  top: 60%;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
}

</style>
