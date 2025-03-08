<template>
  <div class="post-detail">
    {{ post }}
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    // console.log('Requested post id:', params.id)
    try {
      const post = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      return { post }
    } catch (error) {
      console.error('Error fetching post:', error)
      return { post: {} }
    }
  }
}
</script>

<style scoped lang="scss">
.post-detail {
  padding: 20px;
}
</style>
