<template>
    <div>
        <transition name="slide-fade">
            <div v-if="shok" class="alert alert-info">Добавлено</div>
        </transition>
 
        <p>{{product.name}}</p>
        <p>{{product.about}}</p>
        <p>{{product.cost}}</p>
        <button @click="card" class="btn btn-primary mt-3"  >В корзину</button>
        
        
       
 
    </div>
</template>
<script>
import serv from "../services/serv"
export default {
    async beforeCreate(){
        const resp = await serv.getProductById(this.$route.params.id)
        this.product = resp.data
      
        
    },
    methods:{
        async card(){
          
            if(localStorage.id){
                const resp= await serv.addToCard(localStorage.id, this.product)
                if(resp.data){
                    this.shok = !this.shok
                    this.intervalId = setTimeout(() => this.shok = !this.shok, 2000);
                }
            }
               
            else{
                
                localStorage.korz += this.product._id+"//"
                this.shok = !this.shok
                this.intervalId = setTimeout(() => this.shok = !this.shok, 2000);

            
            
             
            }
               
           
        
            
        }
        

    },
    beforeDestroy() {
        if (this.intervalId) clearTimeout(this.intervalId)
    },
    data(){
        return{
            shok:false,
            product:{}
        }
    }
}
</script>
<style scoped>
.buy{
    float:right;
}
.slide-fade-enter-active {
    transition: all .8s ease;
    }
    .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    }
</style>