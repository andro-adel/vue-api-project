<template>
    <div class="post-box">
        <span class="post-views">10</span>
        <h3 class="post-title">Blog Post Title</h3>
        <span class="post-date">18-3-2021</span>
        <p class="post-content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, cum
            unde ea deserunt omnis neque quae iure dicta, accusantium voluptate
            officiis, aliquid natus fugit eius temporibus repellat. Aliquid,
            quos obcaecati?
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-author">Post Author</span>
            </div>
            <div class="col-sm-6 text-right">
                <span class="post-category">Category Name</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "post"
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #f00;
        border-radius: 4px;
        padding: 1px 5px;
        text-align: center;
        font-weight: bold;
    }
    .post-date {
        display: block;
        color: #818080;
        padding: 0 0 5px;
        font-size: 14px;
    }
    .post-content {
        line-height: 1.8;
        color: #666;
    }
    .post-author {
        background-color: #607d88;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
    .post-category {
        background-color: #607d88;
        padding: 6px 10px;
        border-radius: 4px;
        color: #fff;
    }
}
</style>
