<template>
    <div class="our-Products">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pagename: "Products",
            pagedescription: "This is help us page"
        };
    },
    name: "Products"
};
</script>
