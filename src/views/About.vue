<template>
    <div class="about">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pagename: "About Us",
            pagedescription: "This is about us page"
        };
    },
    name: "About"
};
</script>
