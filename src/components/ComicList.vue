<template>
  <div >
    <ul class="container">
      <li class="comic" v-for="comic in comicList" :key="comic.id">
        <ComicItem :comic="comic" ></ComicItem>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import ComicItem from './ComicItem'

export default {
  name : 'ComicList',
  props : ['heroId'], 
  data () {
    return {
      comicList : { data : { results : []}},     
    }
  },
  created() {
    this.getCommics()
  },
  methods : {
    getCommics(){
      axios(`https://gateway.marvel.com/v1/public/characters/${this.heroId}/comics?limit=10&ts=1&apikey=7f5803f57ba2de36c2a4b3c500cc44d6&hash=b2103bfaddd1ac4abe349bd7fd0c726a`)
      .then(res => {
        this.comicList = res.data.data.results;
      }).catch(err => {
        console.log(err);
      })
    }
  },
  watch : {
    heroId(){ 
      this.getCommics();
    }
  },
  components: {
    ComicItem
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comic {    
    list-style-type: none;
  }
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
