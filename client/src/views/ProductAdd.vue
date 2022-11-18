<template >
    <div>
        <div v-if="MAIN">
            <transition name="slide-fade">
                <div v-if="scs" class="alert alert-info">Добавлено</div>
            </transition>

            <p>Product addding</p>
            <input v-model="name" type="text" placeholder="product name">
            <input v-model="about" type="text" placeholder="product description">
            <input v-model="cost" type="number" placeholder="product cost" class="mt-3">
            <button class="btn btn-success p-1"  @click="AddToCard">Add</button>
        </div>
        
    </div>
</template>
<script>
import serv from '../services/serv'
export default {
    methods: {
        async AddToCard(){
            const resp = await serv.addToShop(this.name, this.about, this.cost)
            if(resp.data){
                this.scs = true
                this.intervalId = setTimeout(() => {
                    this.scs = false
                    this.$router.push('shop')
                   
                }, 2000);
                
                
            }

        }
    },
    beforeDestroy() {
        if (this.intervalId) clearTimeout(this.intervalId)
    },
    async beforeCreate(){
        if(localStorage.id){
            const resp = await serv.getUserById(localStorage.id)
            const user = resp.data
            if(user.role !="admin"){
                this.$router.push('shop')
            }
            else{
                this.MAIN = true
            }
        }
        else{
            this.$router.push('shop')
        }
    },
    data(){
        return{
            MAIN:false,
            name:"",
            about:"",
            cost:0,
            scs:false
        }
    }

}
</script>
<style scoped>
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