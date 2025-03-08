<template>
  <div class="post-card">
    <div class="card-content">
      <p class="pid">Post ID : {{ post.id }}</p>
      <h2>Post Title : {{ post.title }}</h2>
      <p>Post Details : {{ post.body.substring(0, 100) }}...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.post-card {
  display: block;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .card-content {
    .pid {
      font-weight: 600;
    }

    h2 {
      font-size: 1.2em;
      margin-bottom: 10px;
    }

    p {
      font-size: 0.9em;
    }
  }
}
</style>
