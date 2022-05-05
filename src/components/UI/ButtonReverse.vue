<template>
    <button type="button" @click="reversePost" :class="{ 'btn-success': isActive, 'btn-outline-secondary': !isActive }" class="btn">
        Сортировать
    </button>
</template>

<script>
export default {
    name: "button-remove",
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    methods: {
        reversePost: function () {
            console.log(this.posts);
            // this.posts.reverse();
            // this.isActive = !this.isActive;
        },
    },
};
</script>

<style scoped></style>
