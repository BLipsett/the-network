<template>
  <div v-if="activeAccount" class="col-md-10 my-4">
    <div class="row">
      <div class="col-12">
        <div v-if="activeAccount.coverImg">
          <img class="cover-art" :src="activeAccount.coverImg" alt="background image">
        </div>
        <div v-else>
          <img class="cover-art" src="'https: wallpapercave.com/wp/wp4575152.jpg'">
        </div>
      </div>
      <div class="col-6">
        <img class="user-pic" :src="activeAccount.picture">
        <i v-if="activeAccount. graduated == true" class="fas fa-user-graduate"></i>
        <div class="name-section">
          <p>
            {{ activeAccount.class }}
          </p>
          <p>
            <b>
              {{ activeAccount.name }}
            </b>
          </p>
        </div>
      </div>
      <div class="col-3 ml-auto d-flex justify-content-end">
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-github-square"></i>
        <i class="far fa-file"></i>
      </div>
      <div class="col-12 bio">
        <p>{{ activeAccount.bio }} </p>
      </div>
    </div>
    <button type="button" class="btn btn-primary d-flex ml-auto" data-toggle="modal" data-target="#profileModal" @click="ProfileModal">
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
  top: -45%;
  left: 10%;
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
}

.name-section {
  margin-top: 3rem;
  margin-left: 2rem;
}

.bio {
  font-style: italic;
}

i {
  font-size: 2rem;
  color: grey;
  padding: 4px;
}

</style>
