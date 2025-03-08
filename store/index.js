export const state = () => ({
  posts: [],
  lastFetched: null,
});

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
    state.lastFetched = new Date().getTime();
  },
};

export const actions = {
  async fetchPosts({ state, commit }) {
    const now = new Date().getTime();
    const fifteenMinutes = 15 * 60 * 1000;

    if (
      state.posts.length &&
      state.lastFetched &&
      now - state.lastFetched < fifteenMinutes
    ) {
      return;
    }
    try {
      const posts = await this.$axios.$get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      commit("setPosts", posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  },
};
