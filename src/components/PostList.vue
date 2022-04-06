<template>
    <div>
        <div class="post__align mb-3 text-end">
            <button
                type="button"
                @click="reversePost"
                v-bind:class="{ 'btn-success': isActive, 'btn-outline-secondary': !isActive }"
                class="btn"
            >
                Сортировать
            </button>
        </div>

        <div v-for="post in posts" :key="post.id" class="post__item p-3 mb-2 d-flex justify-content-between align-items-center">
            <div class="post__wrap-text">
                <p class="post__title mb-0">
                    Название: <span>{{ post.title }}</span>
                </p>
                <p class="post__desc mb-0">
                    Опсиание: <span>{{ post.body }}</span>
                </p>
            </div>
            <div class="post__wrap-btn">
                <a href="{{ post.link }}" class="btn btn-primary">Посмотреть</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true,
        }
    }
};
</script>

<style scoped>
.post span {
    font-weight: 500;
}
.post__item,
.post__add {
    border: 1px solid rgb(209, 209, 209);
    border-radius: 8px;
} 
</style>
