<template>
  <div id="app">
   <Navbar/>
   <div class="container">
    <router-view/>
   
   </div>
  </div>
</template>

<script>
//39:07min
//Add authentication

import Navbar from './components/Navbar';
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>

<style>

</style>
