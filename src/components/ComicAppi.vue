<template>
    <div class="ComicAppi">
        <h1>MARVEL COMIC API</h1>
        <comicSearch class="comicSearch" @sendHero='getHero'></comicSearch>
        <comicList :heroId='heroId'></comicList>
    </div>
</template>

<script>
import ComicList from './ComicList'
import ComicSearch from './ComicSearch'
export default {

    name : 'ComicAppi',
    data() {
        return {
            heroId : ''
        }
    },
    components : {
        ComicSearch,
        ComicList
    },
    methods : {
        getHero(heroId) {
            this.heroId = heroId;
        }
    }
}
</script>

<style scoped>

    h1 {
        background-color: red;
    }
    .comicSearch {
        background-color: brown;
    }
</style>


