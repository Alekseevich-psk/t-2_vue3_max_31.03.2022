<template>
    <div class="post">
        <my-popup v-model:show="popupVisible">
            <post-form @create="createPost" :postsCount="this.posts.length"></post-form>
        </my-popup>
        <post-list @removePost="removePost" @showPopup="showPopup" @reversePost="reversePost" :posts="posts"></post-list>
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
            reverse: false,
            popupVisible: false,
        };
    },
    mounted() {},
    methods: {
        createPost(post) {
            if (this.reverse) {
                this.posts.push(post);
            } else {
                this.posts.unshift(post);
            }

            this.popupVisible = false;
        },

        reversePost(val) {
            this.reverse = val;
        },

        showPopup() {
            this.popupVisible = true;
        },

        removePost(post) {
            this.posts = this.posts.filter((p) => p.id !== post.id);
        },
    },
};
</script>

<style scoped></style>
