<template>
    <div class="post">
        <post-form></post-form>
        <post-list  :posts="posts"></post-list>
    </div>

</template>

<script>

import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
// import PostList from "./components/PostList.vue";

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
            isActive: false,
        };
    }, 
    created: function() {
        this.posts.reverse();
    },
    methods: {
        countLike: function () {
            return (this.likes += 1);
        },

        addPost: function () {

        },

        reversePost: function() {
            this.posts.reverse();
            this.isActive = !this.isActive;
        }

    },
};
</script>

<style scoped>

</style>
