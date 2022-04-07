<template>
    <div class="post">
        <post-form @create="createPost"></post-form>
        <post-list  :posts="posts"></post-list>
    </div>

</template>

<script>

import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";

export default {
  components: { PostList, PostForm },
    data() {  
        return {
            posts: [
                { id: 1, title: "javaScript", body: "Описание поста", link: "/post-1" },
                { id: 2, title: "PHP", body: "Описание поста", link: "/post-2" },
                { id: 3, title: "HTML", body: "Описание поста", link: "/post-3" },
            ],
            title: "",
            body: "",
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
        }
    }
};
</script>

<style scoped>

</style>
