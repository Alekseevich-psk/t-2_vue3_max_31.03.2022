<template>
    <div class="post__wrap-btn m-1">
        <button @click="removePost" class="btn btn-danger">Удалить</button>
    </div>
</template>

<script>
export default {
    name: "button-remove",
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
    mounted() {
        // console.log(this.id);
    },
    provide() {
        return {
            test: 'test',
        };
    },
    methods: {
        removePost() {
            this.$emit("removePost", this.id);
        },
    },
};
</script>

<style scoped></style>
