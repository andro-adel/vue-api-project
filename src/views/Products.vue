<template>
<section>
    <div class="our-Products">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
    </div>

    <div class="row col-12 mx-0 px-5 mt-5 mb-5 text-center">
        <div class="card" style="width: 18rem;" v-for="post in posts"
                :key="post.id">
            <div v-for="image in post.images"
                :key="image.id">
                <img :src="photo+image.image" class="card-img-top">
            </div>
            <div class="card-body">
                <h5 class="card-title">{{post.name_en}}</h5>
                <p class="card-text">{{post.description_en}}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
     <div class="overflow-auto">
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</section>
</template>

<script>
import axios from "axios";
export default {
    name: "Products",
    data: function() {
        return {
            pagename: "Products",
            pagedescription: "This is help us page",
            posts: [],
            photo: "http://127.0.0.1:8000/storage//",
            currentPage: 1,
            perPage: 3,
        };
    },
    
    mounted () {
        var self = this;
        axios.get('http://localhost:8000/api/products')
        .then(function(res) {
            self.posts = res.data;
            console.log('Data: ',res.data);
        })
        .catch(function(error){
            console.log('Errors: ',error);
        })
    },

    computed: {
      rows() {
        return this.posts.length
      }
    }
}
</script>


