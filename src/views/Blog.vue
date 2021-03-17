<template>
    <div class="our-blog">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <post />
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <sidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import post from "@/components/blog/blogpost.vue";
import sidebar from "@/components/blog/blogsidebar.vue";
export default {
    data: function() {
        return {
            pagename: "Blog",
            pagedescription: "This is blog us page"
        };
    },
    name: "Blog",
    components: {
        post,
        sidebar
    }
};
</script>
