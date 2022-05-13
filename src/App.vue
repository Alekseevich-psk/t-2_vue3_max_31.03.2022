<template>
    <div class="post">
        <my-popup v-model:show="popupVisible">
            <post-form @create="createPost" :postsCount="this.posts.length"></post-form>
        </my-popup>
        <post-list @removePost="removePost" @showPopup="showPopup" @reversePost="reversePost"
                   :posts="posts"></post-list>
        <my-preloader v-model:show="preloader"></my-preloader>
    </div>
</template>

<script>
    import PostList from "@/components/PostList.vue";
    import PostForm from "@/components/PostForm.vue";
    import PostItem from "@/components/PostItem.vue";
    import axios from "axios";
    import MyPreloader from "@/components/UI/MyPreloader";

    export default {
        components: {MyPreloader, PostList, PostForm, PostItem},
        data() {
            return {
                posts: [],
                title: "",
                body: "",
                reverse: false,
                popupVisible: false,
                preloader: true,
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
                    setTimeout(async () => {
                        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
                        this.posts = response.data;
                        this.preloader = false;
                    }, 1000);
                } catch (e) {
                    alert("error");
                }
            },
        },
    };
</script>

<style scoped></style>
