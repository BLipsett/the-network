<template>
  <div class="d-flex flex-wrap loginBox">
    <div class="justify-content-center">
      <router-link :to="{name:'ProfilePage', params: { id: account.id }}" :key="account.id" @click="setActiveAccount(account.id)">
        <img class="userPic" :src="user.picture">
      </router-link>
    </div>
    <p>{{ user.name }}</p>
    <div class="d-flex flex-column my-3 text-left">
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-github-square"></i>
      <i class="far fa-file"></i>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { profilesService } from '../services/ProfilesService'
export default {
  setup() {
    const state = reactive({

    })
    return {
      state,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      setActiveAccount(id) {
        profilesService.setActiveAccount(id)
      }
    }
  }

}
</script>

<style scoped>
.userPic{
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
}

.loginBox{
  margin-top: 3rem;
}

</style>
