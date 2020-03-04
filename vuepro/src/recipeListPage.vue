<template>
    <div class="[ row ]">
        <div v-for="recipie in recipies" v-bind:key="recipie" class="[ col-sm-12 ]">
            <recipeListComponent    v-bind:title="recipie.title"
                                    v-bind:ingredients="recipie.ingredients"
            
            ></recipeListComponent> 
        </div>
    </div>
</template>

<script>
import recipeListComponent from './components/recipeListComponent.vue'
export default {
    name: 'RecipeList',
    components: {
        recipeListComponent
    },
    data() {
        return {
            recipies:[]
        }
    },
    beforeMount: function() {
        const app = this;
        if(!sessionStorage.getItem('sessionID')){
            app.$router.push({name: 'Home'});
        }

        const conversionUrl = 'https:/cors-anywhere.herokuapp.com/';
        const url = 'http://www.recipepuppy.com/api/';

        fetch(conversionUrl + url)
        .then(function(response) {
            return response.json();
        })
        .then(function(result){
            app.recipies = result;
        })
    }
}
</script>

