<template>
    <div class="comicSearch">
        <input @keyup.enter="getHeroId" v-model='hero' type="search" placeholder="Hero Name here">
    </div>
</template>

<script>
    import axios from 'axios'
export default {

    name : 'comicSearch',
    data() {
        return {
            hero : "",
            heroId : ""
        }
    },
    methods : {
        getHeroId() {
            axios.get(`https://gateway.marvel.com/v1/public/characters?name=${this.hero}&ts=1&apikey=7f5803f57ba2de36c2a4b3c500cc44d6&hash=b2103bfaddd1ac4abe349bd7fd0c726a`)
            .then(res => {
                console.log(res.data.data.results[0].id);
                this.heroId = res.data.data.results[0].id;
                this.$emit('sendHero', this.heroId);
            })
        }
    }
}
</script>

<style scoped>

</style>


