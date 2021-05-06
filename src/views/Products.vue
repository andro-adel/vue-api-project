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
    <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">Left</button>
  <button type="button" class="btn btn-primary">Middle</button>
  <button type="button" class="btn btn-primary">Right</button>
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
            posts: []
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
    }
}
</script>


