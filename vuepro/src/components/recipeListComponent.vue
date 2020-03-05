<template>
<div class="card">
        <div class="col-sm-4"></div>
            <div class="card--information"><br>
                <h3>{{title}}</h3><br>
                <img :src="thumb"><br>
                <b>Ingredients:</b>{{ ingredients }}<br>
                <a class="btn btn-info" :href="link" target="_blank">More details</a><br>         
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
     margin: 10px;
     padding: 20px;
     border: lightseagreen solid 3px;
     border-radius: 30px;
 }
    .card img {
        border-radius: 30px;
        border: lightseagreen solid 3px;
    }

</style>