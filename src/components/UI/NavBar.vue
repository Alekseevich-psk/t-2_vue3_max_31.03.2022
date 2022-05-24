<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/posts" class="nav-link">Posts</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link">About project</router-link>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <!-- <input v-model="modelValue" @input="query" type="text" class="form-control mb-2" /> -->
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: "nav-bar",
    // props: {
    //     modelValue: {
    //         type: String,
    //     },
    // },
    // methods: {
    //     query(event) {
    //         this.$emit("update:modelValue", event.target.value);
    //     },
    // },
};
</script>

<style scope></style>
