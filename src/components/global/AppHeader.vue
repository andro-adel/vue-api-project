<template>
    <div class="header">
        <div class="container">
            <img alt="logo" src="../assets/Screenshot_1.png" />
            <ul class="text-right">
                <li>
                    <router-link to="/" exact>
                        <a>Home</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/blog">
                        <a>Sign-Up</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/about">
                        <a>Sign-In</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/help" replace>
                        <a>Products</a>
                    </router-link>
                </li>
                <li>
                    <router-link to="/shop" replace>
                        <a>Shopping Cart</a>
                    </router-link>
                </li>
            </ul>
        </div>
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
    img {
        float: left;
        height: 5rem;
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
