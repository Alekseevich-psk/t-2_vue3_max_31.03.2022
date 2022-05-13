<template>
    <input v-model="modelValue" @input="query" type="text" class="form-control mb-2">
</template>

<script>
    export default {
        name: "input-search",
        props: {
            modelValue: {
                type: String
            }
        },
        methods: {
            query(event) {
                this.$emit("update:modelValue", event.target.value)
            }
        }
    }
</script>

<style scoped>

</style>