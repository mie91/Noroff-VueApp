<template>
    <div class="[ row ]">
        <div class="[ col-sm-4 ]"></div>
        <div class="[ col-sm-4 ]">
            <div>
                <h3>{{message}}</h3>
            </div>
            <form>
                <input type="text" placeholder="Username" v-model="username" v-bind:class="{ 'error-border': inputUsernameError }" class="[ form-control ]" />
                <div class="[ error ]" v-if="showUsernameError"> Please enter the correct username</div>
                <br>
                <input type="password" placeholder="Password" v-model="password" v-bind:class="{ 'error-border': inputPasswordError }" class="[ form-control ]" />
                <div class="[ error ]" v-if="showPasswordError"> Please enter the correct password</div>
                <br>
                <button type="button" v-on:click="login" class="[ btn btn-default ]">Submit</button>
            </form>
        </div>
        <div class="[ col-sm-4 ]"></div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    props: {
        message: String
    }
}
</script>