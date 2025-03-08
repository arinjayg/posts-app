<template>
  <div class="posts-page">
    <h1>Posts</h1>
    <div class="posts-container">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '~/components/PostCard.vue'

export default {
  components: {
    PostCard
  },
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

  .posts-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
}
</style>
