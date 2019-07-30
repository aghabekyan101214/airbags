<template>
    <div class="container black-block">
        <div class="row">
            <section class="panel col-12">
                <h1 class="sml-title">Spread the Word, Save a Life</h1>
                <p class="sml-description">
                    Help Morgan Freeman spread the word about
                    the dangers of the Takata Airbag Recall. Share
                    the below videos on social media, you might
                    just save a life.
                </p>
            </section>
            <div class="col-sm-7">
                <section v-for="video in data">
                    <video width="100%" controls preload="none">
                        <source :src="'/storage/' + video.video">
                    </video>
                    <div class="social-row">
                        SHARE THIS STORY:

                        <div class="fb-share-button" :data-href="baseUrl + '/storage/' + video.video" data-layout="button_count" data-size="small"><a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + '/storage/' + video.video + '&amp;src=sdkpreparse'" class="fb-xfbml-parse-ignore">Поделиться</a></div>
<!--                        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + '/storage/' + video.video" target="_blank"><img src="/site/images/fb-icon.png" alt="icon"> </a>-->
                        <a :href="'https://twitter.com/intent/tweet?text=' + baseUrl + '/storage/' + video.video"><img src="/site/images/twitter-icon.png" alt="icon"> </a>
                    </div>
                </section>
            </div>
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
                .then( (response) => {
                    this.data = response.data;
                    this.$emit('loaded', true);
                });
        },
        created() {
            document.title = "Spread The Word - SafeAirbags.com";
        }
    }
</script>

<style scoped>
    .fb-share-button {
        background-image: url('/site/images/fb-icon.png');
    }
</style>
