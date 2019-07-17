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
            <section>
                <video controls>
                    <source src="/site/videos/home_video.mp4" type="video/mp4">
                </video>
                <div class="social-row">
                    SHARE THIS STORY:
                    <a href="#"><img src="/site/images/instagram-icon.png" alt="icon"> </a>
                    <a href="#"><img src="/site/images/fb-icon.png" alt="icon"> </a>
                    <a :href="'https://twitter.com/intent/tweet?text=' + baseUrl + '/site/videos/home_video.mp4'"><img src="/site/images/twitter-icon.png" alt="icon"> </a>
                </div>
            </section>
            <section>
                <video controls>
                    <source src="/site/videos/video1.mp4" type="video/mp4">
                </video>
                <div class="social-row">
                    SHARE THIS STORY:
                    <a href="#"><img src="/site/images/instagram-icon.png" alt="icon"> </a>
                    <a href="#"><img src="/site/images/fb-icon.png" alt="icon"> </a>
                    <a :href="'https://twitter.com/intent/tweet?text=' + baseUrl + '/site/videos/video1.mp4'"><img src="/site/images/twitter-icon.png" alt="icon"> </a>
                </div>
            </section>
            <section>
                <video controls>
                    <source src="/site/videos/video2.mp4" type="video/mp4">
                </video>
                <div class="social-row">
                    SHARE THIS STORY:
                    <a href="#"><img src="/site/images/instagram-icon.png" alt="icon"> </a>
                    <a href="#"><img src="/site/images/fb-icon.png" alt="icon"> </a>
                    <a :href="'https://twitter.com/intent/tweet?text=' + baseUrl + '/site/videos/video2.mp4'"><img src="/site/images/twitter-icon.png" alt="icon"> </a>
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
                baseUrl: window.location.origin
            }

        },
    }
</script>
