<template>
    <div class="our-blog">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <post
                            v-for="post in posts"
                            :key="post.id"
                            :views="post.views"
                            :title="post.title"
                            :date="post.date"
                            :content="post.content"
                            :author="post.author"
                            :category="post.category"
                        />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <sidebar
                            v-for="title in titles"
                            :key="title.id"
                            :id="title.id"
                            :title="title.title"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import post from "@/components/blog/blogpost.vue";
import sidebar from "@/components/blog/blogsidebar.vue";
import jsonposts from "../json/MOCK_DATA.json";
import axios from "axios";
export default {
    name: "Signup",
    components: {
        post,
        sidebar
    },
    data: function() {
        return {
            pagename: "Signup",
            pagedescription: "This is blog us page",
            posts: jsonposts,
            titles: []
        };
    },
    created() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts`)
            .then(response => {
                this.titles = response.data;
            });
    }
};
</script>
