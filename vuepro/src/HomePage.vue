<template>
    <LoginComponent message="Please Login to see all of our recipies"/>
</template>

<script>
import LoginComponent from './components/LoginComponent.vue'
export default {
    name: 'HomePage',
    components: {
        LoginComponent
    }
}
</script>