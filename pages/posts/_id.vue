<template>
  <div class="post-detail">
    <p class="pid">Post ID : {{ post.id }}</p>
    <h1>Post Title : {{ post.title }}</h1>
    <p>Post Details : {{ post.body }}</p>
    <nuxt-link to="/posts">
      <button class="back-btn">
        Back to Posts
      </button>
    </nuxt-link>
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

  .pid {
    font-weight: 600;
  }

  h1 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 20px;
  }

  .back-btn {
    width: fit-content;
    height: auto;
    padding: 15px;
    border-radius: 20px;
    background-color: #fff;
    color: #043f06;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
</style>
