<template>
    <div>
        <h3>Количество лайков: <span>{{ likes }}</span> </h3>
        <button @click="countLike" class="btn btn-primary">Увеличить количество</button>
    </div>
</template>

<script>

export default {
    data() {
        return {
            likes: 0,
        }
    }, 
    methods: {

        countLike: function() {
            return this.likes += 1;
        }

    }
}

</script>

<style scoped>

</style>
