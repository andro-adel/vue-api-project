<template>
    <div class="sidebar">
        <div class="post-box">
            <h1>{{ id }}</h1>
            <h1>{{ title }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    props: ["id", "title"],
    name: "sidebar"
};
</script>
