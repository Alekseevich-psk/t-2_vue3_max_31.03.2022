<template>
    <div class="post__item p-3 mb-2 d-flex justify-content-between align-items-center">
        <div class="post__wrap-text">
            <p class="post__title mb-0">
                id: <span>{{ post.id }}</span>
            </p>
            <p class="post__title mb-0">
                Название: <span>{{ post.title }}</span>
            </p>
            <p class="post__desc mb-0">
                Опсиание: <span>{{ post.body }}</span>
            </p>
        </div>
        <div class="post__wrap-btn d-flex justify-content-between">
            <button-show />
            <button-remove @click="removePost" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            requered: true,
        },
    },
    methods: {
        removePost() {
            this.$emit("removePost");
        },
    },
};
</script>

<style scoped>
.post__item,
.post__add {
    border: 1px solid rgb(209, 209, 209);
    border-radius: 8px;
}
</style>
