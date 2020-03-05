<template>
<div class="[ card ]">
    <div class="[ row ]">
        <div class="[ col-sm-4 ]"></div>
        <div class="[ col-sm-4 ]"></div>
        </div>
            <div class="[ card--information ]"><br>
                <h2>Title:</h2><br>
                <b>Link: </b><a :href="link" target="_blank">Click Here</a><br />
                <b>Ingredients:</b>{{ingredients}}<br>
                <b>Image:<img :src="thumb"/><br /></b>         
            </div>
        </div>
    
</template>

<script>
export default {
    name: 'recipeListComponent',
    props: ['thumb','title', 'link', 'ingredients'],
}
</script>

<style scoped>
    .card {
        border: solid 3px teal;
        border-radius: 4px;
        padding: 0px 20px 30px;
        margin-top: 30px;
    }

    .card img {
        width: 100%;
        padding-top: 20px;
    }

    .card span {
        font-weight: bold;
    }
</style>