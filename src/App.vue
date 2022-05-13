<template>
    <div class="post">
        <my-popup v-model:show="popupVisible">
            <post-form @create="createPost" :postsCount="this.posts.length"></post-form>
        </my-popup>
        <div class="post__align mb-3 d-flex justify-content-between">
            <button-add @click="showPopup">Добавить пост</button-add>
            <my-select v-if="posts.length > 0" v-model="selectedSort" :options="sortOptions"></my-select>
        </div>
        <input-search v-if="posts.length > 0" v-model="queryEnter" placeholder="Поиск.."></input-search>
        <post-list @removePost="removePost" :posts="sortedAndSearchesPosts"></post-list>
        <my-preloader v-if="preloader"></my-preloader>
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
            preloader: true,
            selectedSort: "",
            queryEnter: "",
            sortOptions: [
                {
                    value: "id",
                    name: "По id",
                },
                {
                    value: "title",
                    name: "По названию",
                },
                {
                    value: "body",
                    name: "По содержимому",
                },
            ],
        };
    },
    mounted() {
        this.fetchPost();
    },
    watch: {},
    computed: {
        sortedPost() {
            return [...this.posts].sort((p1, p2) => p1[this.selectedSort]?.localeCompare(p2[this.selectedSort]));
        },

        sortedAndSearchesPosts() {
            return this.sortedPost.filter(post => post.title.includes(this.queryEnter))
        }
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
                }, 100);
            } catch (e) {
                alert("error");
            }
        },
    },
};
</script>

<style scoped></style>
