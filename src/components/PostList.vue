<template>
    <div>
        <div v-if="posts.length > 0">
            <transition-group name="post">
                <post-item v-for="post in posts" :key="post.id" :post="post" @removePost="removePost(post)"/>
            </transition-group>
        </div>
        <div v-else>
            <h3>Список постов пуст</h3>
        </div>
    </div>
</template>

<script>
    import PostItem from "./PostItem.vue";
    import ButtonAdd from "./UI/ButtonAdd.vue";
    import ButtonReverse from "./UI/ButtonReverse.vue";

    export default {
        components: {PostItem, ButtonReverse},
        data() {
            ButtonAdd;
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

            showPopup() {
                this.$emit("showPopup", true);
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

    .post-item {
        display: inline-block;
        margin-right: 10px;
    }
    .post-enter-active,
    .post-leave-active {
        transition: all 0.4s ease;
    }
    .post-enter-from,
    .post-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .flip-post-move {
        transition: transform 0.8s ease;
    }
</style>
