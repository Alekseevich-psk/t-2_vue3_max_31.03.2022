<template>
    <div>
        <div class="post__align mb-3 text-end">
            <button
                type="button"
                @click="reversePost"
                v-bind:class="{ 'btn-success': isActive, 'btn-outline-secondary': !isActive }"
                class="btn"
            >
                Сортировать
            </button>
        </div>
        <post-item v-for="post in posts" :key="post.id" :post="post"/>
    </div>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
    components: { PostItem },
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
        reversePost: function () {
            this.posts.reverse();
            this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped>
.post span {
    font-weight: 500;
}
</style>
