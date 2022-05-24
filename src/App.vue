<template>
    <div>
        <nav-bar />
        <router-view />
    </div>
</template>
<script>
import NavBar from "@/components/UI/NavBar.vue";
export default {
    components: { NavBar },
};
</script>
<style scope></style>
