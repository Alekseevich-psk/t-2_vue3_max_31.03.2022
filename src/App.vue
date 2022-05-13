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
import axios from "axios";

export default {
    components: { PostList, PostForm, PostItem },
    data() {
        return {
            posts: [],
            title: "",
            body: "",
            reverse: false,
            popupVisible: false,
        };
    },
    mounted() {
        this.fetchPost();
    },
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

        async fetchPost() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
                // response.data.forEach((element) => {
                //     this.posts.push(element);
                // });
                this.posts = response.data;
            } catch (e) {
                alert("error");
            }
        },

    },
};
</script>

<style scoped></style>
