<template>
    <div class="post__wrap-btn m-1">
        <button @click="removePost" class="btn btn-danger">Удалить</button>
    </div>
</template>

<script>
export default {
    name: 'button-remove',
    methods: {
        removePost() {
            console.log(this.$parent);
        },
    },
};
</script>

<style scoped></style>
