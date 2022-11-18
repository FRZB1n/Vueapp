<template>
    <div class="hello">
    



        <div class="d-flex justify-content-center">
        
            <div class="nav">
                <router-link to="/login" style="margin-right: 10px">Войти</router-link>
                <router-link to="/contacts">Контакты</router-link>
            </div>
        </div>
        
        <p v-if="!reg">Login</p>
        <p v-else>Registr</p>
        <p v-if="warn">{{warn_text}}</p>
        <transition name="slide-fade">
            <div class="login" v-if="!reg">
                <input v-model="name" type="text" placeholder="Name" class = "f"><br>
                <input v-model="pass" type="password" placeholder="Password" class = "f"><br>
                <button class="btn btn-outline-success" @click="login">Login</button>
            </div>
              <div class="reg" v-else>
                <input v-model="name" type="text" placeholder="Name" class="f"><br>
                <input v-model="pass" type="password" placeholder="Password" class = "f"><br>
                <button class="btn btn-outline-success" @click="registr">Register</button>
            </div>
        </transition>
          
       


        <button v-if="!reg" @click="reg = true" class="btn btn-primary mt-3">New account</button>
        <button v-else-if="reg" @click="reg = false" class="btn btn-primary mt-3">Login</button>
      
  

    </div>
</template>
<script>
import serv from '../services/serv'
import NavBar from '../components/NavBar.vue'


export default{
    components:{
        NavBar
    },
    data(){
        return{
            name:"",
            pass:"",
            warn:false,
            warn_text:"",
            user:{},
            reg: false
        }
    },
    methods:{

        async login(){
            const resp = await serv.authorization(this.name, this.pass)
         
            if(!resp.data){
                this.warn = true;
                this.warn_text = "Wrong login info"
            }else{
                this.warn = false
                this.user = resp.data
                localStorage.id = this.user._id
              
                this.$router.push('profile');
               
            }
           
        },
        async registr(){
            const resp = await serv.regestration(this.name, this.pass)
            if(!resp.data){
                this.warn = true;
                this.warn_text =  "Opps, we ran into some problems" 
            }
            else{
                this.user = resp.data
                localStorage.id = this.user._id
              
                this.reg=false

            }

        },
        loginch(){
            if(localStorage.id){
                this.$router.push('profile')
            }
     
        }
    },
    created(){
        this.loginch()
    }

}

</script>

<style scoped>
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
p{
    margin-top: 60px;
}        
.f{
    margin-bottom: 10px;
}

</style>