<template>
    <div class="comicPages">
        <nav>
            <ul>
                <li>
                    <router-link @click='currentPage' :to="{name: 'getComicsFromPages' , params: {pages: 1}, query : {search: hero}}">First</router-link>
                </li>
                <li v-for="page in availablePages" :key="page">
                    <router-link :to="{name: 'getComicsFromPages' , params: {pages: page}, query : {search: hero}}">{{page}}</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'getComicsFromPages' , params: {pages: totalPages}, query : {search: hero}}">Last</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name : "ComicPage",
    props : ['currentPage', 'totalPages', 'hero'],
    data(){
        return {
        }
   
    },
    computed : {
        availablePages(){
            let availablePages

            if(Number(this.currentPage) === 1 || Number(this.currentPage)  === 2 ){
                return availablePages = [this.currentPage, Number(this.currentPage) + 1, Number(this.currentPage) + 2]
            } else if(this.currentPage === this.totalPages || this.currentPage === this.totalPages -1 ) {
                return availablePages = [ Number(this.totalPages) - 2, Number(this.totalPages) - 1 , this.totalPages   ]
            } else {
               return availablePages = [this.currentPage - 2, this.currentPage -1 , this.currentPage, Number(this.currentPage) + 1, Number(this.currentPage) + 2];
            }
        }
    }

}
</script>

<style scoped>
    .comicPages {
        width: 100%;
        background-color: #BD1023;
    }
    ul {
        margin: 0;
    }
    li {
        margin: 0;
        padding: 15px;
        height: 100%;
        width: auto;
        list-style-type: none;
        display: inline-block;
    }
    li a {
        color: #FFF;
        text-decoration: none;
    }
    .currentPage {
        background-color: #000;
    }

</style>


