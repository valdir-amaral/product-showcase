<template>
    <form>
        <input name="search" id="search" type="text" v-model="value">
        <input type="submit" id="send" value="Buscar" @click="searchProducts" @click.prevent>
    </form>
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    },
    methods: {
        searchProducts() {
            this.$router.push({query: {q: this.value}})
        }
    }
}
</script>

<style scoped>

</style>