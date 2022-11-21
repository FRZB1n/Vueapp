<template>
    <tbody>
        <tr v-for="(item, index) in korz">
            <th scope="row">{{index + 1}}</th>
            <td>{{item.name}}</td>
            <td>{{item.cost}}</td>
            <td>
                <button class="btn btn-outline-info btn-sm" @click="minus(index)">-</button>
                {{item.count}} 
                <button class="btn btn-outline-info btn-sm" @click="plus(index)">+</button> 
            </td>
        </tr>
        
    </tbody>
</template>
<script>

import serv from '../services/serv'
import { mapActions, mapGetters } from 'vuex'
export default {
    props:{
        korz:{
            type:Array,
            required:true
        },
        total:{
            type:Number,
            required:true
        }
    },
    
    

    methods:{
        ...mapActions([
            'AUPDCARDCOST'
        ]),
        plus(index){
            this.total += this.korz[index].cost
            this.korz[index].count++
            this.AUPDCARDCOST(this.total)

             
        },
        minus(index){ 
            if(this.korz[index].count>0){
                this.korz[index].count--
                this.total -= this.korz[index].cost
                this.AUPDCARDCOST(this.total)

                if( this.korz[index].count == 0){
                    this.korz.splice(index,1)
                }
            }
                
            
        },

    },
    // data(){
    //     return{
    //         total:0
    //     }
    // },
    async beforeDestroy() {
       await serv.EditKorz(localStorage.id, this.korz)
    }
    
}
</script>
<style>
    
</style>