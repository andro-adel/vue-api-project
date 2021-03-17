<template>
    <div class="our-blog">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="container">
            <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
            >
                <strong>Holy guacamole!</strong> You should check in on some of
                those fields below.
                <button
                    type="button"
                    class="close"
                    data-dismiss="alert"
                    aria-label="Close"
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pagename: "Blog",
            pagedescription: "This is blog us page"
        };
    },
    name: "Blog"
};
</script>
