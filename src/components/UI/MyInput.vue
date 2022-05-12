<template>
    <div class="post__form-group form-group mb-2" :class="{ warning: err }">
        <label for="formGroupExampleInput" class="mb-2"><slot /></label>
        <input :value="modelValue" @input="updateInput" class="form-control" id="formGroupExampleInput" />
        <p class="post__form-error">*Заполните форму</p>
    </div>
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number],
        err: Boolean,
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        },
    },
};
</script>

<style scoped>
.warning input {
    border: 1px solid red;
}

.post__form-group {
    box-sizing: border-box;
    transition: 0.14s;
}

.post__form-error {
    display: none;
    padding: 0;
    margin: 0;
}

.warning .post__form-error{
    display: block;
    color: red;
}

</style>
