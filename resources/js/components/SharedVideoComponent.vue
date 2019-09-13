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
                <section  v-if="video">
                    <video width="100%" id="shared-video" autoplay controls :src="'/storage/' + video">
                    </video>
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
                video: false
            }

        },
        mounted() {
            this.$emit('loaded', true);
            let video = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
            this.video = video;
            let elem = document.getElementById("shared-video");
            elem.play();
        },
        created() {
            document.title = "Spread The Word - SafeAirbags.com";
        }
    }
</script>

<style scoped>

</style>
