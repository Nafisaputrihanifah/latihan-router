<template>
    <div class="flex-container">
      <div v-for=" produk in data" :key=" produk.id" class="card">
        <router-link class="container" :to="{ name : 'Detail', params:{id_produk : produk.id}}">
          <h4>{{ produk.nama }}</h4>
        </router-link>
      </div>
    </div>
  </template>
<script>
import { produk } from '@/router/ produk'
import {  kategori } from '@/router/ kategori';


export default { 
    props: [
        "id_kategori",
    ],
  setup(props, context)
  {
    const detail = kategori[" kategori"].find(function(item) {
        return item.id == props.id_kategori

    });
    const data = produk[" produk"].find(function(barang) {
        return item.id == props.id_kategori

    });
   
    return {
      detail,
      data
    }
  }
}
</script>
<style scoped>
.flex-container {
  display: flex;
}
.card {

  box-shadow: 0px 4px 8px 0 rgba(0,0,0,0,2);
  transition: 0.3s;
  margin: 10px;
  min-width: 200px;
  cursor: pointer;
}


.card:hover {
  box-shadow: 0px 8px 16px 0 rgba(0,0,0,0,2);
}


.container{
  padding: 2px 16px
}
</style>
