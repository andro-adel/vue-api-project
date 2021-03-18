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
import jsontitles from "@/json/MOCK_DATA.json";
export default {
    data: function() {
        return {
            pagename: "Blog",
            pagedescription: "This is blog us page",
            posts: jsonposts,
            titles: jsontitles
        };
    },
    name: "Blog",
    components: {
        post,
        sidebar
    }
};
</script>
