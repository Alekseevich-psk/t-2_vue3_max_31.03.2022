<template>
    <button type="button" @click="active" :class="{ 'btn-success': isActive, 'btn-outline-secondary': !isActive }" class="btn">
        <slot/>
    </button>
</template>

<script>
export default {
    name: "button-reverse",
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        active() {
            (this.isActive) ? this.isActive = false : this.isActive = true;
        },
    },
};
</script>

<style scoped></style>
