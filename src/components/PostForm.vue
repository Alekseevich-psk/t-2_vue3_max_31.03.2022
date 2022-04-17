<template>
    <div class="post__add mb-3 p-3">
        <form @submit.prevent>
            <p class="b">Добавить пост</p>
            <div class="post__form-group form-group mb-2">
                <label for="formGroupExampleInput" class="mb-2">Название</label>
                <input v-model="post.title" type="text" class="form-control" id="formGroupExampleInput" />
            </div>
            <div class="post__form-group form-group mb-2">
                <label for="formGroupExampleInput2" class="mb-2">Описание</label>
                <input v-model="post.body" type="text" class="form-control" id="formGroupExampleInput2" />
            </div>
            <div class="post__align pt-4">
                <button type="button" @click="addPost" class="btn btn-primary">Добавить пост</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                id: "",
                title: "",
                body: "",
            },
        };
    },
    props: {
        posts: {
            type: Array,
            required: true,
        },
    },
    mounted() {
        // console.log(this.posts.length);
    },
    methods: {
        addPost: function () {
            this.post.id = this.posts.length + 1;
            this.$emit("create", this.post);
            (this.title = ""), (this.body = ""), (this.id = "");
        },
    },
};
</script>

<style scoped>
.post__item,
.post__add {
    border: 1px solid rgb(209, 209, 209);
    border-radius: 8px;
}
</style>
