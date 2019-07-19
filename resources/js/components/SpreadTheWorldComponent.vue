<template>
    <div class="container black-block">
        <div class="container">
            <section class="panel">
                <h3 class="sml-title">Spread the Word, Save a Life</h3>
                <p class="sml-description">
                    Help Morgan Freeman spread the word about
                    the dangers of the Takata Airbag Recall. Share
                    the below videos on social media, you might
                    just save a life.
                </p>
            </section>
            <section v-for="video in data">
                <video controls preload="none">
                    <source :src="'/storage/' + video.video">
                </video>
                <div class="social-row">
                    SHARE THIS STORY:
<!--                    <a href="#"><img src="/site/images/instagram-icon.png" alt="icon"> </a>-->
                    <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + '/storage/' + video.video" target="_blank"><img src="/site/images/fb-icon.png" alt="icon"> </a>
                    <a :href="'https://twitter.com/intent/tweet?text=' + baseUrl + '/storage/' + video.video"><img src="/site/images/twitter-icon.png" alt="icon"> </a>
                </div>
            </section>
            <vehicle-search></vehicle-search>
        </div>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
                baseUrl: window.location.origin,
                data: ""
            }

        },
        mounted () {
            axios.get('/get-spread-videos')
                .then(response => (this.data = response.data))
        }
    }
</script>

<style scoped>
    .fb-share-button {
        background-image: url('/site/images/fb-icon.png');
    }
</style>
