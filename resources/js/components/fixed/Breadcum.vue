<template>
    <!-- Header -->
    <header class="w3-container w3-gray w3-center" style="padding:128px 16px">
        <h1 class="w3-margin w3-jumbo">{{ title }}</h1>
        <p class="w3-xlarge">{{ subtitle }}</p>
        <button v-if="showbutton==true" class="w3-button w3-black w3-padding-large w3-large w3-margin-top">{{ buttonText }}</button>
    </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "",
  },
  subtitle: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "",
  },
  showbutton:{
    type: Boolean,
    default: false,
  }
});
</script>

<style scoped>
body,
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Lato", sans-serif
}

.w3-bar,
h1,
button {
    font-family: "Montserrat", sans-serif
}

.fa-anchor,
.fa-coffee {
    font-size: 200px
}
</style>