<template>
    <form>
        <input name="search" id="search" type="text" v-model="value" placeholder="Buscar...">
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
form {
    max-width: 600px;
    margin: 30px auto 60px auto;
    position: relative;
}

#search {
    width: 100%;
    padding: 20px;
    border: none;
}

#search:focus,
#search:hover {
    outline: none;
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(30,60,90,.2);
}

#send {
    width: 62px;
    height: 62px;
    text-indent: -150px;
    background: url('../assets/search.svg') no-repeat center center;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 0;
    box-shadow: none;
    top: 0;
}
</style>