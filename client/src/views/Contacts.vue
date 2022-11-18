<template>
    <div class="hello">
        <div class="nav">
            <NavBar />
        </div>
        <p>This is contact page</p>
        <RouterLink to="/">Back</RouterLink>
    </div>
</template>


<script>

import NavBar from '../components/NavBar.vue'
export default {
    components: {
        NavBar
    },

}
</script>
  
<style scoped>
p{
    margin-top: 60px;
}
</style>