<template>
   
    <div>
        <div class="navr">
            <router-link to="/login" style="margin-right:10px">Войти</router-link>
            <router-link to="/contacts">Перейти к контактам</router-link>
        </div>
        <p class="time" style="margin-bottom:5px">{{localeDate}}</p>

        <div class="d-flex flex-row-reverse">
            <button class="btn btn-primary p-1" @click="notifsg" > <p v-if="show">Закрыть</p> <p v-else>Открыть</p></button>    
        </div>
        
       
        <transition name="slide-fade">
            <div v-if="show" class="notifs">
                <p style="margin-right:5px">Тут должно быть уведомление по типу заказ успешно отправлен/собран и т.д</p>
                <p style="margin-right:5px">Все уже для этого сделано, даже мега ултра супер пупер сложная функция в апишке</p>
                <p style="margin-right:5px">И то что съезжают надписи по середине. Это не баг, а фича. Я так вижу</p>
                <!-- <ul>
                    <li v-for="notif in notifs">
                        <span>{{notif.author}} {{notif.text}}</span>
                    </li>
                </ul>  -->
            </div>
            
        </transition>
        <div class="d-inline p-2">
            <p>Profile</p>
            <p>{{user.name}}</p>
            
        </div>
        <div class="d-inline p-2">
        <button class="btn btn-danger p-1 mt-4" @click="LogOut()">Log out</button>
        <button class="btn btn-primary p-1 mt-4" @click="shop">Shop</button>
        <button class="btn btn-primary p-1 mt-4" @click="card">Card</button>
        </div>
        
    </div>
</template>

<script>
import serv from '../services/serv'
import NavBar from '../components/NavBar.vue'
export default {
    components:{
        NavBar
    },
    methods:{
        card(){
            this.$router.push('card')
        },
        shop(){
            this.$router.push('shop')
        },
        async notifsg(){
            const resp = await serv.getUserById(localStorage.id)
            this.notifs = resp.data.notifs.notif
            this.show=!this.show

            
        },
        async Session(){
            if(localStorage.id){
                const resp = await serv.getUserById(localStorage.id)
               
                this.user = resp.data
            }
            else{
                this.$router.push('login')
            }
        },
        LogOut(){
            localStorage.removeItem('id')
            this.$router.push('login')
        }
    },
    computed: {
        localeDate() {

            return (new Date(this.date)).toLocaleTimeString() 
        },
    },
    async created(){
        this.intervalId = setInterval(() => this.date = Date.now(), 1000);
        await this.Session()
    },
    beforeDestroy() {
        if (this.intervalId) clearInterval(this.intervalId)
    },
    data(){
       return{
        user:{},
        show:false,
        date:0,
        notifs:[]
       }
    }
}
</script>
<style scoped>

.info{
    margin-top:40px;
    position: fixed;
    margin-left: 47.5%;
}
.nOpen{
    margin-left: 95%;

}

ul{
    list-style: none;
}
.notifs{
    float:right;
}


button{
    margin:0;
    padding: 0;
}
p{
    margin: 0;
    padding: 0;
}

.slide-fade-enter-active {
transition: all .3s ease;
}
.slide-fade-leave-active {
transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
transform: translateX(10px);
opacity: 0;
}
    
.info{
    display: block;
   
}
</style>