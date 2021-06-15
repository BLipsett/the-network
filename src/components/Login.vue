<template>
  <div v-if="user.isAuthenticated" class="d-flex flex-wrap loginBox">
    <div class="col-10 justify-content-center">
      <router-link :to="{name:'ProfilePage', params: { id: account.id }}" :key="account.id" @click="setActiveAccount(account.id)">
        <img class="userPic" :src="account.picture">
      </router-link>
      <p>{{ account.class }}</p>
      <p><b>{{ account.name }}</b></p>
    </div>
    <div class="d-flex flex-column my-3 text-left link-bois">
      <a href="https://www.linkedin.com/in/brian-lipsett/" target="blank"><i class="fab fa-linkedin"></i><p>{{ account.linkedin }}</p></a>
      <a href="https://github.com/BLipsett" target="blank"><i class="fab fa-github-square"><p>{{ account.github }}</p></i></a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="blank"><i class="far fa-file"><p>{{ account.resume }}</p></i>
      </a>
    </div>
  </div>
  <div v-else>
    <h3>Log In to create posts and view profiles</h3>
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

<style lang='scss' scoped>
.userPic{
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
}

.link-bois {
  a {
    color: grey;
    text-decoration: none;
  }

  i {
    font-size: 2rem;
    padding: 2px;
  }

  p {
    padding: 3px;
    margin-left: 2px;
  display: inline-flex;
    font-size: 16px;
  }
}

.loginBox{
  margin-top: 3rem;
}

</style>
