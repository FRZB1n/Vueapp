<template>
    <div>
        <div class="product">
            <router-link :to="'/products/'+product._id">{{product.name}}</router-link>
           <!-- <a :href="'/product/'+product._id">{{product.name}}</a> -->
             
            <p>{{product.cost}}</p>
            
        </div>
    </div>
</template>
<script>
export default {
    props:{
        product:{
            type:Object,
            required:true
        }
    }
    
}
</script>
<style>
    
</style>