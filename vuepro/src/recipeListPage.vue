<template>
    <div class="[ row ]">
        <recipeListComponent></recipeListComponent>
    </div>
</template>

<script>
import recipeListComponent from './components/recipeListComponent.vue'
export default {
    name: 'RecipeList',
    components: {
        recipeListComponent
    }
}
</script>

