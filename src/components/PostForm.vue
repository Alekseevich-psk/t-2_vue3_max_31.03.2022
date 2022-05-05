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
                link: ""
            },
        };
    },
    props: {
        postsCount: {
            type: Number,
            required: true,
        },
    },
    methods: {
        addPost: function () {
            this.post.id = this.postsCount + 1;
            this.post.link = this.translit(this.post.title);
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
                id: "",
                link: ""
            };
        },

        translit: word =>  {
            var converter = {
                а: "a",
                б: "b",
                в: "v",
                г: "g",
                д: "d",
                е: "e",
                ё: "e",
                ж: "zh",
                з: "z",
                и: "i",
                й: "y",
                к: "k",
                л: "l",
                м: "m",
                н: "n",
                о: "o",
                п: "p",
                р: "r",
                с: "s",
                т: "t",
                у: "u",
                ф: "f",
                х: "h",
                ц: "c",
                ч: "ch",
                ш: "sh",
                щ: "sch",
                ь: "",
                ы: "y",
                ъ: "",
                э: "e",
                ю: "yu",
                я: "ya",
            };

            word = word.toLowerCase();

            var answer = "";
            for (var i = 0; i < word.length; ++i) {
                if (converter[word[i]] == undefined) {
                    answer += word[i];
                } else {
                    answer += converter[word[i]];
                }
            }

            answer = answer.replace(/[^-0-9a-z]/g, "-");
            answer = answer.replace(/[-]+/g, "-");
            answer = answer.replace(/^\-|-$/g, "");
            return answer;
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
