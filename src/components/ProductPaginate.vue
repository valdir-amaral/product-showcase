<template>
    <ul v-if="totalPages > 1">
        <li v-for="page in pages" :key="page">
            <RouterLink :to="{query: query(page)}">{{ page }}</RouterLink>
        </li>
    </ul>

</template>

<script>

export default {
    name: 'ProductPaginate',
    props: {
        productsPerPage: {
            type: Number,
            default: 1
        },
        totalProducts: {
            type: Number,
            default: 1
        }
    },
    methods: {
        query(page) {
            return {
                ...this.$route.query,
                _page: page
            }
        }
    },
    computed: {
        pages() {
            const current = Number(this.$route.query._page);
            const range = 9;
            const offset = Math.ceil(range / 2)
            const total = this.totalPages;
            const pagesArr = [];

            for(let i = 1; i <= total; i++) {
                pagesArr.push(i);
            }

            pagesArr.splice(0, current - offset);
            pagesArr.splice(range, total);
            return pagesArr
        },
        totalPages() {
            const total = Math.ceil(this.totalProducts / this.productsPerPage);

            // Se por algum acaso do destino ocorrer uma divisão por 0, previne erros
            return total !== Infinity ? Math.ceil(total) : 0;
        }
    }
}
</script>

<style>
ul {
    grid-column: 1 / -1;
}
li {
    display: inline-block;
}

li a {
    padding: 2px 8px;
    border-radius: 2px;
    margin: 4px;
}

li a.router-link-exact-active {
    background: #87f;
    color: #fff;
}
</style>
