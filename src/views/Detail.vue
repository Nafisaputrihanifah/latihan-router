<template>
    <h1>Detail {{ detail.nama }}</h1>
    <h4>Harga {{ detail.harga }}</h4>
  </template>
  <script>
  import Produk from './Produk.vue';

  export default{
    props:[
        "id_produk"
    ],
    setup(props)
    {
        const detail = produk["produk"].find(function(item){
            return item.id = props.id.produk;
        });
        return{
            detail
        }
    }
  }
</script>