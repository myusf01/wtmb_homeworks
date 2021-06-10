<template>
  <div class="tweetComposer">
    <ProfilePhoto class="photo" :size="48" />

    <div class="composeArea">
      <textarea
        type="text"
        id="composeTweetText"
        name="composeTweetText"
        placeholder="Neler oluyor hayatta?"
        rows="1"
        required
      />
      <div class="composeFooter">
          
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePhoto from '../ProfilePhoto.vue'

export default {
  name: 'Composer',

  components: {
    ProfilePhoto
  }
}
</script>
<style lang="postcss" scoped>
:focus {
  outline: .5px solid #969696;
}
.tweetComposer {
  display: flex;
  flex-direction: row;
  padding: 4px 16px;
  width: 100%;
  height: auto;
  border-bottom: 1px solid var(--c-border-color);
  @media (--t) {
    max-width: 599px;
    min-height: 170px;
  }
}

.photo {
  margin-right: 12px;
  padding-top: 4px;
}

.composeArea {
  display: flex;
  width: 100%;
  padding-top: 4px;
}
textarea {
  width: 100%;
  max-width: 460px;
  height: 120px;
  min-height: 50px;
  padding: 12px 10px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 20px;
}

textarea::placeholder {
  color: #afafaf;
}

</style>
