<template>
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <div>
                <h3>{{message}}</h3>
            </div>
            <form class="theForm form-horizontal">
                <input type="text" placeholder="Username" v-model="username" v-bind:class="{ 'error-border': inputUsernameError }" class="form-control" />
                <div class="error" v-if="showUsernameError"> Incorrect username</div>
                <br>
                <input type="password" placeholder="Password" v-model="password" v-bind:class="{ 'error-border': inputPasswordError }" class="form-control" />
                <div class="error" v-if="showPasswordError"> Incorrect password</div>
                <br>
                <button type="button" v-on:click="login" class="btn btn-info">Enter</button>
            </form>
        </div>
        <div class="[ col-sm-4 ]"></div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: ['message', 'showUsernameError', 'showPasswordError', 'inputUsernameError', 'inputPasswordError'],
    data(){
        return {
            username: null,
            password: null
        };
    },
    methods: {
        login: function(){
            const app = this;
            app.$emit('clicked', this.username, this.password);
        }
    }
}
</script>

<style scoped>


    .error {
        color: darkred;
        font-size: 14px;
        padding: 0px;
        margin: 0px;     
    }
    .error-border{
        border: solid 3px darkred;
        border-radius: 10px;
        padding: 5px;
    }
    .theForm {
        border: lightseagreen solid 3px;
        border-radius: 30px;
        padding: 25px;
        
    }


   
</style>