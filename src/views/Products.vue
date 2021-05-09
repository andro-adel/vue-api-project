<template>
<section>
    <div class="our-Products">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div v-for="post in posts"
            :key="post.id">
            <h3>{{post.name_en}}</h3>
            </div>
    </div>
    <div class="row col-12 mx-0 px-5 mt-5 mb-5 text-center">
    <div class="card" style="width: 18rem;" v-for="image in images"
            :key="image.id">
  <img :src="photo+image.image" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    </div>
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
            images: [],
            photo: "http://127.0.0.1:8000/storage//"
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

    // mounted () {
    //     var self = this;
    //     axios.get('http://localhost:8000/api/photos')
    //     .then(function(res) {
    //         self.images = res.data;
    //         console.log('Data: ',res.data);
    //     })
    //     .catch(function(error){
    //         console.log('Errors: ',error);
    //     })
    // }
}
</script>


