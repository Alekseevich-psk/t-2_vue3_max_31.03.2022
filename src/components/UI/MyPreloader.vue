<template>
    <div v-if="show" class="post__preloader text-center pt-5">
        <div class="spinner-border" role="status">
            <span class="sr-only"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "my-preloader",
        props: {
            show: {
                type: Boolean,
                default: false
            }
        },
    };
</script>

<style scoped></style>