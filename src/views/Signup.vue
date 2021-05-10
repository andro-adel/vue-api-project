<template>
    <div class="our-blog">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="register" method="POST">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Full Name</label>
                            <input type="text" class="form-control" name="name" id="name" placeholder="Username"  autocomplete="username" v-model="name">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email"  autocomplete="email" v-model="email">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" name="password" id="password"  placeholder="Password"  autocomplete="new-password" v-model="password">
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Signup",
    data: function() {
        return {
            pagename: "Signup",
            pagedescription: "This is Signup us page",
                name: "",
                email: "",
                password: ""
        }
    },

    methods: {
        register() {
          var self = this;
          axios.post( 'http://localhost:8000/api/register', {
            name: self.name,
            email: self.email,
            password: self.password,
          }).then(function (response) {
            self.name = '';
            self.email = '';
            self.password = '';
            console.log(response);
            self.$router.push({ path: '/sign-in' });
          })
          .catch(function (error) {
            console.log(error);
          });
  
        }
    }
}
</script>
