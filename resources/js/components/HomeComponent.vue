<template>
    <div>
        <div v-if="width > 600" id="carouselExampleControls" data-interval="false" class="video-block carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active video-content">
                    <img src="/site/images/slider-item1-min.jpg" alt="Morgan Freeman" class="video-desktop">
                    <div class="video-details">
                        <div v-if="getLang === 'en'" class="desktop-details">
                            <p>
                                “The fix is simple, fast and <span class="yellow-txt">FREE.</span>
                                Parts are available at your local dealer. Schedule your repair today.
                            </p>
                            <br>
                            <p>It could save your life.”</p>
                            <p>- Morgan</p>
                        </div>
                        <div v-else class="desktop-details">
                            <p>
                                “1 de cada 6 vehículos han sido
                                afectados con <span class="yellow-txt"> bolsas de aire Takata defectuosas. </span> Verifique si su vehículo está en la lista.
                            </p>
                            <br>
                            <p>Puede salvar tu vida.”</p>
                            <p>- Morgan</p>
                        </div>
                        <div class="dropdown">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                {{$lang.home.see_in_list}}
                            </button>
                            <div class="dropdown-menu">
                                <a href="https://www.nhtsa.gov/recalls" target="_blank" class="dropdown-item upper">{{$lang.parts.search_vin }}</a>
<!--                                <button @click="$emit('showIframe')" class="dropdown-item upper">{{$lang.parts.search_vin }}</button>-->
                                <a class="dropdown-item upper" v-scroll-to="'#car-block'" href="#">{{$lang.parts.search_vehicle }}</a>
                            </div>
                            <p class="txt-sml">
                                {{$lang.home.text}}
                            </p>
                            <a @click="showVideoModal = true" class="play-icon">{{$lang.home.watch}}</a>
                        </div>
                    </div>

                </div>
                <div class="carousel-item  video-content">
                    <img src="/site/images/slider-item3-min.jpg" class="video-desktop">
                    <div class="video-details">
                        <div v-if="getLang === 'en'" class="desktop-details">
                            <p>
                                “1 out of 6 vehicles have been
                                affected by the <span class="yellow-txt">Takata Airbag Recall.</span>
                                Check to see if yours is one.
                            </p>
                            <br>
                            <p>It could save your life.”</p>
                            <p>- Morgan</p>
                        </div>
                        <div v-else class="desktop-details">
                            <p>
                                “1 de cada 6 vehículos han sido
                                afectados con <span class="yellow-txt"> bolsas de aire Takata defectuosas. </span> Verifique si su vehículo está en la lista.
                            </p>
                            <br>
                            <p>Puede salvar tu vida.”</p>
                            <p>- Morgan</p>
                        </div>
                            <div class="dropdown">
                            <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                {{$lang.home.see_in_list}}
                            </button>
                            <div class="dropdown-menu">
<!--                                <button @click="$emit('showIframe')" class="dropdown-item upper">{{$lang.parts.search_vin }}</button>-->
                                <a href="https://www.nhtsa.gov/recalls" target="_blank" class="dropdown-item upper">{{$lang.parts.search_vin }}</a>
                                <a class="dropdown-item upper" v-scroll-to="'#car-block'" href="#">{{$lang.parts.search_vehicle }}</a>
                            </div>
                            <p class="txt-sml">
                                {{$lang.home.text}}
                            </p>
                            <a @click="showVideoModal = true" class="play-icon">{{$lang.home.watch}}</a>
                        </div>
                    </div>
                </div>
            </div>
            <a style="width: 10%" class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a style="width: 10%" class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>

        <section v-else class="video-block">
            <div class="video-content">
                <div class="video-details">
                    <div class="dropdown">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            {{$lang.home.see_in_list}}
                        </button>
                        <div class="dropdown-menu">
                            <!--                                <button @click="$emit('showIframe')" class="dropdown-item upper">{{$lang.parts.search_vin }}</button>-->
                            <a href="https://www.nhtsa.gov/recalls" target="_blank" class="dropdown-item">{{$lang.parts.search_vin }}</a>
                            <a class="dropdown-item" v-scroll-to="'#car-block'" href="#">{{$lang.parts.search_vehicle }}</a>
                        </div>

                        <p class="txt-sml">
                            {{$lang.home.text}}
                        </p>
                        <img class="play-icon-mobile" src="/site/images/play.png" @click="showVideoModal = true" alt="play-icon">
                    </div>
                </div>
            </div>
            <div class="video-content"><img src="/site/images/video-img-mobile.jpg" class="video-mobile"></div>
        </section>

        <!--video-block end-->
        <section class="model-details">
            <div class="panel">
                <h2 class="upper">{{$lang.home.search}}</h2>
                <p>{{$lang.home.choose}}</p>
                <p><img v-scroll-to="'#car-block'" height="30" class="cursor-pointer" src="/site/images/arrow_down.png" alt=""></p>
            </div>
            <div class="car-block" id="car-block" ref="carBlock">
                <div class="container car-block-inner">
                    <div v-for="(car, i) in cars">
                        <img @click="info(i)" v-if="car.img !== ''" class="cursor-pointer car-logo" v-bind:src="'/storage/' + car.img" :alt="car.name">
                        <span @click="info(i)" v-else>{{ car.name }}</span>
                    </div>
                </div>
            </div>
        </section>
        <Modal v-if="showModal" @close="showModal = false" :data="carData" :mobile="mobile" :ios="ios"
               :android="android"/>
        <video-modal v-if="showVideoModal" @close="showVideoModal = false"></video-modal>
    </div>

</template>

<script>
    import Vue from 'vue';
    import Modal from "./ModalComponent";
    import VideoModal from "./parts/VideoModal";
    import {isMobileOnly, isIOS, isAndroid} from "mobile-device-detect";
    import VueScrollTo from 'vue-scrollto';

    Vue.use(VueScrollTo);

    export default {
        data: function () {
            return {
                cars: "",
                staticData: "",
                showModal: false,
                showVideoModal: false,
                carData: "",
                mobile: isMobileOnly,
                ios: isIOS,
                android: isAndroid,
                width: ""
            }

        },
        methods: {
            info(i) {
                this.carData = this.cars[i];
                this.showModal = true;
            },
        },
        components: {
            Modal,
            VideoModal
        },
        created() {
            var self = this;
            axios.get('/vehicles', {})
                .then(function (response) {
                    self.cars = response.data;
                    self.$emit('loaded', true);
                    let hash = window.location.hash;
                    if(hash.length > 0) {
                        self.$scrollTo(self.$refs.carBlock, 1500)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            document.title = "Takata Airbag Recall - SafeAirbags.com";
            let desc = "1 in 6 vehicles have been affected by the Takata Airbag Recall. Check to see if yours is one. It could save your life.";
            document.querySelector('meta[name="description"]').setAttribute("content", desc);
        },
        mounted() {
            this.width = window.innerWidth;
        },
        computed: {
            getLang: function() {
                return this.$lang.getLang();
            }
        },

    }
    window.addEventListener("load", function(event) {
        let hash = window.location.hash;
        if(hash.length > 0) {
            var top = document.getElementById('car-block').offsetTop;
            window.scroll({
                top: top,
                behavior: 'smooth'
            });
        }
    });
</script>
<style scoped>
    .play-button {
        position: absolute;
        height: 80px;
        width: 80px;
        top: 62%;
        left: 50%;
        transform: translate(-50%, -12%);
    }

    .car-logo {
        max-height: 55px;
        max-width: 90px;
    }

    .panel img {
        margin-top: 10px;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    @media (max-width: 600px) {
        .panel {
            padding: 20px 0 15px 0;
        }
        .play-icon {
            display: none;
        }
        .play-icon-mobile {
            display: block;
            width: auto!important;
            height: 100px;
        }

        .text {
            position: absolute;
            top: 76%;
            font-size: 14px;
            color: #fff;
            width: 100%;
            text-align: center;
            padding: 0 30px;
        }
    }
    @media (min-width: 1200px) {
        .text-block p {

            font-size: 32px;
            font-family: "Montserrat";
            color: rgb(255, 255, 255);
            line-height: 1.25;

        }

        .text-block {
            position: absolute;
            right: 15%;
            top: 20%;
        }


    }


</style>
