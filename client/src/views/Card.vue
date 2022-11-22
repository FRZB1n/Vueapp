<template >
    <div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Cost</th>
                <th scope="col">Count</th>
              </tr>
            </thead>
            
              <CardItem :korz="Korz"  />
            
          </table>
          <p style="float:left; margin-left:10px">Total Cost: {{TotalCardcost}}</p>
          <div class="d-flex justify-content-start" style="margin-top:60px; margin-left:10px">
            <button v-if="total>0" type="button" class="btn btn-outline-success" @click="purchase">Оплатить</button>
            <button v-else-if="total<=0" type="button" class="btn btn-outline-success" disabled>Оплатить</button>

          </div>
          

    </div>
</template>
<script>
import CardItem from '../components/Carditem.vue'
import serv from '../services/serv'

import {mapGetters, mapActions} from "vuex"
export default {
    components:{
      CardItem
    },
    computed:{
      ...mapGetters([
        "TotalCardcost"
      ]),
    },
    methods:{

      ...mapActions(['AUPDCARDCOST']),
      purchase(){
        this.$router.push('opl')
      }

    },
    async beforeCreate(){

       
      if(localStorage.id){
        const resp = await serv.getUserById(localStorage.id)
        const user = resp.data
        const korz = user.korz.items
        this.Korz = korz
        for(let i = 0; i <korz.length; i++){
          
          this.total+= (korz[i].cost * korz[i].count)
        }
        this.AUPDCARDCOST(this.total)
         
            

      }
        
        
    },
    data(){
        return{
            Korz:[],
            total:0
          
        }
    }
}
</script>
<style >
    
</style>