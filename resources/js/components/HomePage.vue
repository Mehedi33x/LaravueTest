<template>
    <div>
        <Breadcum title="Home Page" subtitle="This is a demo" />

        <div class="w3-row-padding w3-padding-64 w3-container">
            <div class="w3-content">
                <div class="w3-twothird">
                    <h1>Lorem Ipsum</h1>
                    <h5 class="w3-padding-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h5>

                    <p class="w3-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div class="w3-third w3-center">
                    <i class="fa fa-anchor w3-padding-64 w3-text-red"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Breadcum from '@/components/fixed/Breadcum.vue';
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