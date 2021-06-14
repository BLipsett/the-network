<template>
  <div class="row">
    <div class="col-12 border my-3 profile-card d-flex p-4">
      <img :src="profile.picture">
      <div class="d-flex flex-column justify-content-center ml-3">
        <p class="classDate">
          {{ profile.class }}
        </p>
        <p class="name">
          {{ profile.name }}
        </p>
      </div>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,500;1,100&display=swap');

img {
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
}

p {
   margin-bottom: 2px;
}

.classDate {
  font-family: 'Fira Sans', sans-serif;
  font-weight: 100;
  font-style: italic;

}

.name {
 font-family: 'Fira Sans', sans-serif;;
  font-size: 20px;
}

.profile-card {
  background-color: white;
}

</style>
