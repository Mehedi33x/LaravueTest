<template>
    <!-- Footer -->
    <footer class="w3-container w3-padding-64 w3-center w3-opacity">
        <div class="w3-xlarge w3-padding-32">
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity"></i>
            <i class="fa fa-snapchat w3-hover-opacity"></i>
            <i class="fa fa-pinterest-p w3-hover-opacity"></i>
            <i class="fa fa-twitter w3-hover-opacity"></i>
            <i class="fa fa-linkedin w3-hover-opacity"></i>
        </div>
        <div class="w3-container w3-black w3-center w3-opacity w3-padding-64">
            <h1 class="w3-margin w3-xlarge">Quote of the day: {{ quote }}</h1>
            <p>Powered by Mountain Dew</p>
        </div>
    </footer>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            quote: null,
        };
    },
    methods: {
        fetchQuotes() {
            axios.get('/quote')
                .then(response => {
                    this.quote = response.data.quote || 'No quote available';
                })
                .catch(error => {
                    console.error(error);
                    this.quote = 'An error occurred while fetching the quote.';
                });
        },
        beforeRouteUpdate(to, from, next) {
            this.fetchQuotes();
            next();
        },
    },
    created() {
        this.fetchQuotes();
    },
}
</script>
