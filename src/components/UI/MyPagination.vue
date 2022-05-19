<template>
    <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center pt-4">
            <li class="page-item" @click="selectPage(1)">
                <a class="page-link" href="#!" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>

            <li class="page-item" 
            v-for="numberPage in totalPages" 
            :key="numberPage" 
            @click="selectPage(numberPage)"
            :class="{
                'active' : numberPage === this.pageSelectNow
                }"
            >
                <a class="page-link" href="#!">{{ numberPage }}</a>
            </li>

            <li class="page-item" @click="selectPage(totalPages)">
                <a class="page-link" href="#!" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "my-pagination",
    data() {
        return {
            pageSelectNow: 1,
        }
    },
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
    },
    methods: {
        selectPage(numberPage) {
            this.pageSelectNow = numberPage;
            this.$emit("selectPage", numberPage);
        },
    },
};
</script>

<style scoped></style>
