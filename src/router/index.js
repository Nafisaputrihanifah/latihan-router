import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/views/Home.vue"; 
import About from "@/views/About.vue";
import Contack from "@/views/Contack.vue";
import Detail from "@/views/Detail.vue";
import Produk from "@/views/Produk.vue";
import Kategori from "@/views/Kategori.vue";
import Kategoriproduk from "@/views/Kategoriproduk.vue"

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contack",
    name: "Contack",
    component: Contack,
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/produk",
    name: "Produk",
    component: Produk,
  },
 {
    path: "/kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/kategoriproduk",
    name: "DetailE",
    component: Kategoriproduk,
  },
  {
    path: "/detail/:id_produk",
    name: "DetailE",
    component: Detail,
    props: true
  },
  {
    path: "/kategoriproduk/:id_kategori",
    name: "DetailE",
    component: Kategoriproduk,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;