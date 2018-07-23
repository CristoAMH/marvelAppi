<template>
    <div class="comic">
        <div class="imgContainer" >
            <div class="nonBlur">
                <img  class="comicImg" :src="comic.thumbnail.path+'.'+comic.thumbnail.extension">
            </div>
        </div>
        <div class="comicInfo">
            <h1>{{comic.title}}</h1>
            <ul>
                <h2>Creators</h2>
                <li v-for="(creator, idx) in comic.creators.items" :key="creator.id">
                    {{idx + 1}}. {{creator.name}}
                </li>
            </ul>
            <ul class="characters">
                <h2>Characters</h2>
                <li v-for="(character, idx) in comic.characters.items" :key="character.id">
                    {{idx + 1}}. {{character.name}}
                </li>
            </ul>
            <ul>
                <h2>Stories</h2>
                <li v-for="(stories, idx) in comic.stories.items" :key="stories.id">
                    {{idx + 1}}. {{stories.name}}
                </li>
            </ul>
        </div>    
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'renderComic',
    data() {
        return {
            comic : { thumbnail : {}},
            comicId : this.$route.query.id
        }
    },
    methods : {
        getComic(){
            axios.get(`https://gateway.marvel.com/v1/public/comics/${this.comicId}?ts=1&apikey=7f5803f57ba2de36c2a4b3c500cc44d6&hash=b2103bfaddd1ac4abe349bd7fd0c726a`)
            .then(res => {
                this.comic = res.data.data.results[0];
            }).catch(err => {
                console.log(err);
            })
        }
    },
    created() {
        this.getComic();
    }

}
</script>

<style scoped>
    .comic {
        display: flex;
        flex-direction: row;
    }
    .comicInfo {
        height: 100%;
        width: 100%;
        color: white;
        background-color: aliceblue;
    }
    .comicInfo h1 {
        margin: 0;
        padding: 70px 30px;
        background-color: #333333;
    }
    .comicInfo h2 {
        padding: 10px;
        margin: 0;
        background-color: #4E4E4E;
        text-align: left;
    }
    .comicInfo ul {
        margin: 0;
        padding: 0;
    }
    .comicInfo li {
        padding: 10px;
        list-style-type: none;
        background-color: #565656;
        text-align: left;
    }
    .comicInfo li:nth-child(even) {
        background-color: #676767;
        text-align: left;
    }
    .comicImg {
        max-height: 640px;
        border-radius: 5px;
        -webkit-box-shadow: 7px 10px 38px -4px rgba(0,0,0,0.75);
        -moz-box-shadow: 7px 10px 38px -4px rgba(0,0,0,0.75);
        box-shadow: 7px 10px 38px -4px rgba(0,0,0,0.75);
    }
    .imgContainer {
        padding: 70px ;
    }
    .characters {
        color: #000;
    }
    .characters h2 {
        background: #EDEEEF;
    }
    .characters li{
        background-color: #EDEEEF;
    }
    .characters li:nth-child(even){
        background: #DCDCDC;
    }


</style>
