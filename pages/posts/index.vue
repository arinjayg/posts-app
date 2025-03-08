<template>
  <div class="posts-page">
    <h1>Posts</h1>
    <p>{{ posts }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['posts'])
  },
  async created() {
    await this.$store.dispatch('fetchPosts')
  }
}
</script>

<style lang="scss">
.posts-page {
  padding: 20px;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
