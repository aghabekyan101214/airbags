<template>
    <div class="container black-block">
        <div class="row">
            <section class="panel col-12">
                <h1 class="sml-title">{{ $lang.spread.header }}</h1>
                <p class="sml-description">
                    {{ $lang.spread.text }}
                </p>
            </section>
            <div class="col-sm-7">
                <section v-for="(video, i) in data">
                    <iframe width="100%" height="235px" :src="'https://www.youtube.com/embed/'+video.video" frameborder="0" allowfullscreen></iframe>
                    <div class="social-row">
                        {{ $lang.spread.share }}

                        <a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v='+video.video+'&quote='+shareText+'&amp;src=sdkpreparse'" class="fb-xfbml-parse-ignore"><img src="/site/images/fb-icon.png" alt="icon"></a>
<!--                        <a :href="'https://www.facebook.com/sharer/sharer.php?u=' + baseUrl + '/storage/' + video.video" target="_blank"><img src="/site/images/fb-icon.png" alt="icon"> </a>-->
                        <a :href="'https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v='+video.video+'&quote='+shareText+'&text='+shareText"><img src="/site/images/twitter-icon.png" alt="icon"> </a>
                    </div>
                </section>
            </div>
            <vehicle-search></vehicle-search>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['lang'],
        data: function() {
            return {
                baseUrl: window.location.origin,
                data: "",
                shareText: "1 in 6 vehicles in the US have been affected by the potentially deadly Takata Airbag recall. Yours could be one of them. Check on http://safeairbags.com. It could save your life."
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
            let desc = "Help spread the word about the Takata Airbag Recall by sharing important information with your friends and family.\n";
            document.querySelector('meta[name="description"]').setAttribute("content", desc);
        }
    }
</script>

<style scoped>

</style>
