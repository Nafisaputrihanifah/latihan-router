<template>
    <center>
    <h1>Kategori</h1>
    <div class="flex-container">
      <div v-for="kategori in state" :key="kategori.id" class="card">
        <img :src="getImgSrc(kategori.img)" alt="Category Image"/>
        <router-link class="container" :to="{ name: 'Detail', params: {id_kategori: kategori.id}}">
          <h4>{{ kategori.nama }}</h4>
        </router-link>
      </div>
    </div>
    </center>
  </template>
<script>
import {onMounted,reactive} from 'vue'
import { kategori } from '@/router/Kategori';
import { produk } from '@/router/ produk'


export default { 
  setup(props, context) {
    const state = reactive(kategori["kategori"]);

    const kategoriData = reactive(
        kategori.kategori.map((item) => ({
            ...item,
            jumlahProduk: produk.produk.filter((produk) => produk.kategori_id === item.id).length,
        }))
    );
   
    const getImgSrc = (imgFileName) => {
        return '../src/assets/img/' + imgFileName + '';
    };

    onMounted(() => {
      context.emit("id-menu",5);
    });

    return {
      state,
      kategoriData,
      getImgSrc
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
