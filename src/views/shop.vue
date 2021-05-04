<template>
    <div class="our-help">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pagename: "shop",
            pagedescription: "This is shop us page"
        };
    },
    name: "Shop"
};
</script>
