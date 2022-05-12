<template>
    <div>
        <div class="post__align mb-3 text-end">
            <!-- <button-reverse post="this.posts"/> -->
        </div>
        <post-item v-for="post in posts" :key="post.id" @removePost="removePost" :post="post" />
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
        removePost(id) {
            console.log(id);
            console.log(this.posts);
            this.posts.slice(id, 1)
        },
    },
};
</script>

<style scoped>
.post span {
    font-weight: 500;
}
</style>
