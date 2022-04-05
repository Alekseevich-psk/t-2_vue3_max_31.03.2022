<template>
    <div class="post">

        <div class="post__add mb-3 p-3">
            <form>
                <p class="b">Добавить пост</p>
                <div class="post__form-group form-group mb-2">
                    <label for="formGroupExampleInput" class="mb-2">Название</label>
                    <input v-bind:value="title" @input='title = $event.target.value' type="text" class="form-control" id="formGroupExampleInput" />
                </div>
                <div class="post__form-group form-group mb-2">
                    <label for="formGroupExampleInput2" class="mb-2">Описание</label>
                    <input v-bind:value="body" @input='body = $event.target.value' type="text" class="form-control" id="formGroupExampleInput2" />
                </div>
                <div class="post__align pt-4">
                    <button type="button" @click="addPost" class="btn btn-primary">Добавить пост</button>
                </div>
            </form>
        </div>

        <div class="post__align mb-3 text-end">
            <button type="button" @click="reversePost" v-bind:class="{ 'btn-success': isActive, 'btn-outline-secondary': !isActive,  }" class="btn">Сортировать</button>
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
import TestComponent from "./components/TestComponent.vue";

export default {
    data() {
        return {
            posts: [
                { id: 1, title: "javaScript", body: "Описание поста", link: "/post-1" },
                { id: 2, title: "PHP", body: "Описание поста", link: "/post-2" },
                { id: 3, title: "HTML", body: "Описание поста", link: "/post-3" },
            ],
            title: "",
            body: "",
            isActive: false,
        };
    },
    components: {
        TestComponent,
    },
    created: function() {
        this.posts.reverse();
    },
    methods: {
        countLike: function () {
            return (this.likes += 1);
        },

        addPost: function () {
            let newPost = {
                id: this.posts.length + 1,
                title: this.title,
                body: this.body
            }

            this.posts.push(newPost);
        },

        reversePost: function() {
            this.posts.reverse();
            this.isActive = !this.isActive;

            console.log(this.isActive);
        }

    },
};
</script>

<style scoped>
.post__item,
.post__add {
    border: 1px solid rgb(209, 209, 209);
    border-radius: 8px;
}

.post span {
    font-weight: 500;
}
</style>
