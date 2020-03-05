<template>
    <div class="row">
        <div v-for="recipe in recipes"      v-bind:key="recipe.id" class="col-sm-5 mx-auto">
                <recipeListComponent        v-bind:title="recipe.title"
                                            v-bind:ingredients="recipe.ingredients"
                                            v-bind:link="recipe.href"
                                            v-bind:thumb="recipe.thumbnail"
                
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
            recipes:[]
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
            app.recipes = result;
        });
    }
}
</script>

