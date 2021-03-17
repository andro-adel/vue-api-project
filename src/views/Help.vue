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
            pagename: "Help",
            pagedescription: "This is help us page"
        };
    },
    name: "Help"
};
</script>
