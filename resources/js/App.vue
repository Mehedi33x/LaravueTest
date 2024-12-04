<script setup>
import Navbar from '../js/components/fixed/NavBar.vue';
import Footer from '../js/components/fixed/Footer.vue';
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    <div>
        <Navbar />
        <router-view></router-view>
        <Footer/>
    </div>
</template>