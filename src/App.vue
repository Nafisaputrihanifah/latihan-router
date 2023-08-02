<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from './views/Navbar.vue';
import { ref } from 'vue'

export default{
  name: 'App',
  components : {
    Navbar
  },
setup()
{
  const idMenu = ref(1);

  function setMenu(id)
  {
    idMenu.value= id;
  }

  return {
    setMenu,
    idMenu,
  }
}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>