<template>
    <div class="about">
        <h1>{{ pagename }}</h1>
        <p>{{ pagedescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent="login" method="POST">
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
    name: "Signin",
    data: function() {
        return {
            pagename: "Signin",
            pagedescription: "This is about us page",
            email: '',
            password: '',
        }
    },
     methods: {
        login() {
          var self = this;
          axios.post( 'http://localhost:8000/api/login', {
            email: self.email,
            password: self.password,
          }).then(function (response) {
            self.email = '';
            self.password = '';
            console.log(response);
            self.$router.push({ path: '/' });
          })
          .catch(function (error) {
            console.log(error);
          });
  
        }
    }
}
</script>
