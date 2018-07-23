<template>
  <div >
    <ul class="container">
      <li class="comic" v-for="comic in comicList" :key="comic.id">
        <ComicItem :comic="comic" ></ComicItem>
      </li>
    </ul>
    <comicPage :hero="hero" :currentPage="currentPage" :totalPages="totalPages"></comicPage>
  </div>
</template>

<script>
import axios from 'axios';
import md5 from 'js-md5';
import ComicItem from './ComicItem'
import ComicPage from './ComicPage'

export default {
  name : 'ComicList',
  props : ['hero'],
  data () {
    return {
      comicList : { data : { results : []}},
      totalPages : 0,
      currentPage : 0,
      comicsPerPage : 10,
      publicKey : '7f5803f57ba2de36c2a4b3c500cc44d6',
      privateKey : '08a55aedd964866bf1d99dd3d872ba783768c5dd'    
    }
  },
  created() {
    this.currentPage = this.$route.params.pages;
    if(this.$route.path === '/') this.currentPage = 1;
    this.getComics()
  },
  methods : {
    getComics(){
      const url = this.getUrl();
      axios(url)
      .then(res => {
        this.comicList = res.data.data.results;
        this.totalPages = Math.ceil(res.data.data.total  / this.comicsPerPage);
      }).catch(err => {
        console.log(err);
      })
    },
    getUrl() {
      const now = Date.now();
      const baseUrl = 'http://gateway.marvel.com/';
      const endPoint = 'v1/public/comics?';
      const ts = `ts=${now}`;
      const titleStartWith = `titleStartsWith=${this.hero}&`
      const offSet = `&offset=${(this.currentPage -1)*this.comicsPerPage} `;
      const limit = `&limit=${this.comicsPerPage}`
      const apikey = `&apikey=${this.publicKey}`;
      const hash = '&hash=' + md5(now + this.privateKey + this.publicKey);
      if(this.hero === ""){
        return baseUrl + endPoint + ts + offSet  + limit + apikey + hash;
      } else {
        const url = baseUrl + endPoint + titleStartWith + ts + offSet  + limit + apikey + hash;
        console.log(url);
        return url
      }
    }
  },
  watch : {
    hero(){
      this.$router.push({path : `/comics/p1`,query : {search : this.hero}})
      this.getComics();
    },
    '$route'() {
      this.currentPage = this.$route.params.pages;
      if(this.$route.path === '/') this.currentPage = 1;
      this.getComics();
    }
  },
  components: {
    ComicItem,
    ComicPage
  }
}
</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comic {    
    list-style-type: none;
  }
  .container {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: #262626;
    margin: 0;
  }
</style>
