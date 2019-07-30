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
                <section v-for="(video, i) in data">
                    <video width="100%" :id="'share' + i" controls preload="none">
                        <source :src="'/storage/' + video.video">
                    </video>
                    <div class="social-row">
                        SHARE THIS STORY:

                        <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u='+baseUrl+'/spread-the-world/video/'+video.video+'&amp;src=sdkpreparse'" class="fb-xfbml-parse-ignore"><img src="/site/images/fb-icon.png" alt="icon"></a>
<!--                        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + '/storage/' + video.video" target="_blank"><img src="/site/images/fb-icon.png" alt="icon"> </a>-->
                        <a :href="'https://twitter.com/intent/tweet?url=' + baseUrl + '/spread-the-world/video/' + video.video+'&text=asdasd'"><img src="/site/images/twitter-icon.png" alt="icon"> </a>
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

</style>
