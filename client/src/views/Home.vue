<template>

  
  <div class="hello">
   
    <div class="d-flex justify-content-center">
      <router-link to="/login" style="margin-right: 10px">Войти</router-link>
      <router-link to="/contacts">Перейти к контактам</router-link>
    </div>
    <button @click="getUsers" class="btn btn-primary" >Get Users</button>
    
    <div class="post" v-for="user in users">
      <p>Info:{{user.name}}</p>
      <p>About:{{user.pass}}</p>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import serv from '../services/serv'
export default {
  name: 'HelloWorld',
  components:{
    NavBar
  },
  data () {
    return {
      users:[]
    }
  },
  methods:{
    async getUsers(){
      const resp = await serv.getUsers()
      this.users = resp.data

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
