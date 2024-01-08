<template>
  <section>
    <h1>🛒&nbsp; Compre ou Venda &nbsp; 📢</h1>
    <ProductSearch />
    <ProductList />
  </section>
    
</template>

<script>
import ProductSearch from '@/components/ProductSearch.vue';
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'HomeView',
  components: {
    ProductSearch,
    ProductList
  }
}
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>