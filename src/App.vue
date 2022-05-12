<template>
    <div class="post">
        <post-form @create="createPost" :postsCount="this.posts.length"></post-form>
        <post-list @removePost="removePost" :posts="posts"></post-list>
    </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import PostItem from "@/components/PostItem.vue";

export default {
    components: { PostList, PostForm, PostItem },
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
    mounted() {
        // console.log(this.posts);
    },
    methods: {
        createPost(post) {
            this.posts.unshift(post);
        },

        removePost(id) {
            console.log(id);
        },
    },
};
</script>

<style scoped></style>
