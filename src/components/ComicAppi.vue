<template>
    <div class="ComicAppi">
        <h1>MARVEL COMIC API</h1>
        <comicSearch class="comicSearch" @sendHero='getHero'></comicSearch>
        <comicList :hero='hero'></comicList>
        
    </div>
</template>

<script>
import ComicList from './ComicList'
import ComicSearch from './ComicSearch'
export default {

    name : 'ComicAppi',
    data() {
        return {
            hero : ""
        }
    },
    components : {
        ComicSearch,
        ComicList,
    },
    methods : {
        getHero(hero) {
            this.hero = hero;
        }
    }
}
</script>

<style scoped>

    h1 {
        margin: 0;
        padding: 30px;
        background-color: #BD1023;
        color: #FFF;
        font-family: 'Marvel', sans-serif;
    }
</style>


