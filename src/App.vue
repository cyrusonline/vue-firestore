<template>
  <div id="app">
   <Navbar/>
   <div class="container">
    <router-view/>
   
   </div>
  </div>
</template>

<script>
//19:42min
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
