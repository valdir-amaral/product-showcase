<template>
    <section class="products-container">
        <div v-if="products && products.length" class="products">
            <div class="product" v-for="product in products" :key="product.id">
                <RouterLink to="/">
                    <img v-if="product.photos" :src="product.photos[0].src" :alt="product.photos[0].title">
                    <p class="price">{{ product.price }}</p>
                    <h2 class="title">{{ product.name }}</h2>
                    <p>{{ product.description }}</p>
                </RouterLink>
            </div>
            <ProductPaginate :totalProducts="productsQuantity" :productsPerPage="productsPerPage" />
        </div>
        <div v-else-if="products && !products.length">
            <p class="no-results">Busca sem resultados :/ Tente buscar outro termo.</p>
        </div>
        <div v-else>
            <p>Carregando...</p>
        </div>
        
    </section>
</template>

<script>
import { api } from '@/services.js';
import { serialize } from '@/helpers';
import ProductPaginate from '@/components/ProductPaginate.vue';

export default {
    name: 'ProductList',
    components: {
        ProductPaginate
    },
    data() {
        return {
            products: null,
            productsPerPage: 3,
            productsQuantity: 0
        }
    },
    computed: {
        url() {
            const query = serialize(this.$route.query)
            return `/products?_limit=${this.productsPerPage}${query}` 

        }
    },
    methods: {
        getProducts() {
            api.get(this.url).then(res => {
                this.productsQuantity = Number(res.headers['x-total-count'])
                this.products = res.data;
            })
        }
    },
    watch: {
        url() {
            this.getProducts();
        }
    },
    created() {
        this.getProducts();
    }
}
</script>

<style scoped>
.products-container {
    max-width: 1000px;
    margin: 0 auto;
}
.products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin: 30px;
}

.product {
    box-shadow: 0 4px 8px rgba(30,60,90,.1);
    padding: 10px;
    background: white;
    border-radius: 4px;
    transition: all .2s;
}

.product:hover {
    box-shadow: 0 6px 12px rgba(30,60,90,.2);
    transform: scale(1.1);
    position: relative;
    z-index: 1;
}

.product img {
    border-radius: 4px;
    margin-bottom: 20px;
}

.title {
    margin-bottom: 10px;
}
.price {
    color: #e80;
    font-weight: bold;
}
.no-results {
    text-align: center;
}
</style>