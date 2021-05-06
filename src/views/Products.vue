<template>
    <div class="our-Products">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div v-for="post in posts"
            :key="post.id">
            <h3>{{post.name_en}}</h3>
            </div>
    </div>

    <!-- <div>
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</div>
<button class="btn btn primary">click</button> -->
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
