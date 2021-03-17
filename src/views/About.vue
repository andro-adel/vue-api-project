<template>
    <div class="about">
        <h1>This is an about page</h1>
        <welcome />
    </div>
</template>

<script>
// @ is an alias to /src
import welcome from "@/components/welcomemessage.vue";

export default {
    name: "About",
    components: {
        welcome
    }
};
</script>
