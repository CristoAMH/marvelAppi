<template>
    <div>
       <router-link  class="comicImg" :style="{backgroundImage : `url(${this.comic.thumbnail.path}.${this.comic.thumbnail.extension} )`}" :to="{path:'/comic', query: {id: this.comic.id}}"></router-link>
    </div>

</template>

<script>
export default {
    name: 'ComicItem',
    props : ['comic'],

    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
    
    .comicImg {
        display: block;
        height: 400px;
        width: 300px;
        margin: 10px;
        background-size: cover;
        border-radius: 5px;
    }
</style>

