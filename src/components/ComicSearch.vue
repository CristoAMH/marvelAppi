<template>
    <div class="comicSearch">
        <input @keyup.enter="getSearcher" v-model='hero' type="search" placeholder="Title starts with...">
    </div>
</template>

<script>
    import axios from 'axios'
export default {

    name : 'comicSearch',
    data() {
        return {
            hero : "",
        }
    },
    methods : {
        getSearcher() {
            axios.get(`https://gateway.marvel.com/v1/public/comics?titleStartsWith=${this.hero}&ts=1&apikey=7f5803f57ba2de36c2a4b3c500cc44d6&hash=b2103bfaddd1ac4abe349bd7fd0c726a`)
            .then(res => {
                this.$emit('sendHero', this.hero);
            })
        }
    }
}
</script>

<style scoped>
    input {
    width: 100%;
    padding: 12px 20px;
    border: none;
    border-bottom: 1px solid grey;  
}
</style>


