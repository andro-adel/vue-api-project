<template>
    <div class="header">
        <div class="logo">Elzero Vue</div>
        <ul>
            <li>
                <router-link to="/" exact>
                    <a>Home</a>
                </router-link>
            </li>
            <li>
                <router-link to="/about" tag="li">
                    <a>About</a>
                </router-link>
            </li>
            <li>
                <router-link to="/help" tag="li" replace>
                    <a>Help</a>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "AppHeader"
};
</script>

<style lang="scss" scoped>
.header {
    background-color: #333;
    color: #fff;
    overflow: hidden;
    .logo {
        font-size: 24px;
        padding: 20px;
        float: left;
        width: 200px;
    }
    ul {
        float: left;
        width: calc(100% - 200px);
        margin: 0;
        li {
            padding: 20px;
            display: inline-block;
            font-size: 18px;

            a {
                color: #fff;
                text-decoration: none;

                &:hover {
                    color: #42b983;
                }
            }
        }
    }
}
</style>
