<template>
    <div>
        <button v-if="role" @click="pr_add" class="btn btn-primary p-1 mb-4">Add product</button>
        <div class="d-flex  flex-column">
            <div class="d-flex justify-content-center p-3">
                <div class="border border-dark rounded p-2" style="width:20%" v-for="prod in products">
                    <ProductCard :product="prod"/>
                </div>
            </div>
        </div>

        
    </div>
</template>
<script>
import serv from '../services/serv'
import ProductCard from '../components/ProductCard.vue'
export default {
    components:{
        ProductCard
    },
    methods:{
        pr_add(){
            this.$router.push('product_adding')
        }
    },
    async beforeCreate(){
        const resp = await serv.getProducts()
        this.products = resp.data
       
        if(localStorage.id){
            const resp1 = await serv.getUserById(localStorage.id)
            const user = resp1.data
            user.role == "admin" ? this.role = true : this.role = false

        }
        
        
    },
    data(){
        return{
            products:[],
            role:false
        }
    }
    
}
</script>
<style>

    
</style>