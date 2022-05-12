<template>
    <div v-if="posts.length > 0">
        <div class="post__align mb-3 text-end">
            <button-reverse @click="postReverseSort">Показать начало списка</button-reverse>
        </div>
        <post-item v-for="post in posts" :key="post.id" :post="post" @removePost="removePost(post)" />
    </div>
    <div v-else>
        <h3>Список постов пуст</h3>
    </div>
</template>

<script>
import PostItem from "./PostItem.vue";
import ButtonReverse from "./UI/ButtonReverse.vue";

export default {
    components: { PostItem, ButtonReverse },
    data() {
        return {
            isActive: false,
            reversePost: false,
        };
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    created: function () {
        this.posts.reverse();
    },
    methods: {
        removePost(post) {
            this.$emit("removePost", post);
        },

        postReverseSort() {
            this.reversePost ? (this.reversePost = false) : (this.reversePost = true);
            this.$emit("reversePost", this.reversePost);
            this.posts.reverse();
        },
    },
};
</script>

<style scoped>
.post span {
    font-weight: 500;
}
</style>
