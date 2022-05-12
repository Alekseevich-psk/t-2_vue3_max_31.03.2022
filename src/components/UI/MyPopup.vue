<template>
    <div class="popup" v-if="show" @click="hidePopup">
        <div class="popup__overlay">
            <div @click.stop class="popup__body">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "my-popup",
    data() {
        return {};
    },
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        hidePopup() {
            this.$emit('update:show', false);
        }
    },
};
</script>

<style scoped>

.popup__overlay {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(49, 49, 49, 0.8);
}

.popup__body {
    background-color: #fff;
    min-width: 360px;
    max-width: 540px;
    height: auto;
    align-items: flex-start;
    margin: auto;
    border-radius: 10px;
}

</style>
