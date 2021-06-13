<template>
  <div class="modal fade"
       id="profileModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Edit Profile
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editProfile">
            <div class="form-group">
              <input v-model="state.info.coverImg" class="form-control" type="text" placeholder="Cover Image Url">
              <input v-model="state.info.github" class="form-control" type="text" placeholder="Github">
              <input v-model="state.info.linkedin" class="form-control" type="text" placeholder="LinkedIn">
              <input v-model="state.info.picture" class="form-control" type="text" placeholder="Profile Image Url">
              <input v-model="state.info.class" class="form-control" type="text" placeholder="Attending Class">
              <input v-model="state.info.resume" class="form-control" type="text" placeholder="Resume">
              <textarea v-model="state.info.bio" class="form-control" type="text-area" placeholder="Bio Section" rows="5"></textarea>
            </div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">
              Save changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { profilesService } from '../services/ProfilesService'
import { logger } from '../utils/Logger'
import Notification from '../utils/Notification'
export default {
  setup() {
    const state = reactive({
      info: {}
    })
    return {
      state,
      async editProfile() {
        try {
          logger.log('update prof')
          await profilesService.editProfile(state.info)
        } catch (error) {
          Notification.error(error, 'error')
        }
      }

    }
  }

}
</script>

<style>

</style>
