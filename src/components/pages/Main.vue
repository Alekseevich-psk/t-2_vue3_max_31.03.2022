<template>
    <div class="post mb-4">
        <div class="post__align mb-3 d-flex justify-content-between">
            <button-add @click="showPopup">Добавить пост</button-add>
            <my-select v-if="posts.length > 0" v-model="selectedSort" :options="sortOptions"></my-select>
        </div>
        <input-search v-if="posts.length > 0" v-model="queryEnter" placeholder="Поиск.."></input-search>
        <post-list @removePost="removePost" :posts="sortedAndSearchesPosts"></post-list>
        <div ref="observer" class="post__scroll"></div>
        <my-preloader v-if="preloader"></my-preloader>

        <my-popup v-model:show="popupVisible">
            <post-form @create="createPost" :postsCount="this.posts.length"></post-form>
        </my-popup>
        <!-- <my-pagination :totalPages="this.totalPages" @selectPage="changePage" /> -->
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
            page: 0,
            limit: 10,
            totalPages: 0,
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
        // this.loadMorePosts();

        new IntersectionObserver(
            (entry, observer) => {
                if (entry[0].isIntersecting) {
                    this.preloader = true;
                    this.loadMorePosts();
                    this.page += 1;
                }
            },
            {
                thresholds: 0.5,
                rootMargin: "0px",
            }
        ).observe(this.$refs.observer);
    },
    watch: {
        // page() {
        //     this.loadMorePosts();
        // },
    },
    computed: {
        sortedPost() {
            return [...this.posts].sort((p1, p2) => p1[this.selectedSort]?.localeCompare(p2[this.selectedSort]));
        },

        sortedAndSearchesPosts() {
            return this.sortedPost.filter((post) => post.title.toLowerCase().includes(this.queryEnter.toLowerCase()));
        },
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

        changePage(count) {
            this.page = count;
        },

        async loadMorePosts() {
            try {
                setTimeout(async () => {
                    const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    });
                    this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
                    // this.posts = response.data;
                    this.posts = [...this.posts, ...response.data];
                    this.preloader = false;
                }, 500);
            } catch (e) {
                alert("error");
            }
        },
    },
};
</script>

<style scoped>
.post__scroll {
    height: 10px;
    width: 100%;
}
</style>
