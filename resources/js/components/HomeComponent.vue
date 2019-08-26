<template>
    <div>
        <div id="carouselExampleControls" data-interval="false" class="video-block carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active  video-content">
                    <img src="/site/images/slider-item3-min.jpg" alt="Morgan Freeman for the Takata AirBag Recall" class="video-desktop">
                    <div class="video-details">
                        <div v-if="lang === 'en'" class="desktop-details">
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
                                <router-link :to="'/'+lang+'/vin-lookup'" class="dropdown-item upper">{{$lang.parts.search_vin }}</router-link>
                                <a class="dropdown-item upper" v-scroll-to="'#car-block'" href="#">{{$lang.parts.search_vehicle }}</a>
                            </div>
                            <p class="txt-sml">
                                {{$lang.home.text}}
                            </p>
                            <a @click="showVideoModal = true" class="play-icon">{{$lang.home.watch}}</a>
                        </div>
                    </div>
                </div>
                <div class="carousel-item video-content">
                    <img src="/site/images/slider-item1-min.jpg" alt="Morgan Freeman for the Takata AirBag Recall" class="video-desktop">
                    <div class="video-details">
                        <div v-if="lang === 'en'" class="desktop-details">
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
                                “La reparación es simple, rápida y
                                <span class="yellow-txt">gratis.</span> Coordinar su reparación hoy.
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
                                <router-link :to="'/'+lang+'/vin-lookup'" class="dropdown-item upper">{{$lang.parts.search_vin }}</router-link>
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
        <section class="video-block">
            <div class="video-content">
                <div class="video-details">
                    <div class="dropdown dropdown-mob">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            {{$lang.home.see_in_list}}
                        </button>
                        <div class="dropdown-menu">
                            <router-link :to="'/'+lang+'/vin-lookup'" class="dropdown-item upper">{{$lang.parts.search_vin }}</router-link>
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
                        <img @click="info(i)" v-if="car.img !== ''" class="cursor-pointer car-logo" v-lazy="'/storage/' + car.img"  :alt="car.name">
                        <span @click="info(i)" :class="{lower: car.name === 'Volkswagen'}" v-else class="cursor-pointer">{{ car.name }}</span>
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
    import VueLazyload from 'vue-lazyload';

    Vue.use(VueLazyload, {
        preLoad: 1.3,
        loading: '/site/images/placeholder.png',
        attempt: 1,
        listenEvents: [ 'scroll' ]
    });

    Vue.use(VueScrollTo);

    export default {
        props: ['lang'],
        data: function () {
            return {
                cars: "",
                staticData: "",
                showModal: false,
                showVideoModal: false,
                showIframe: false,
                carData: "",
                mobile: isMobileOnly,
                ios: isIOS,
                android: isAndroid,
                width: "",
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
                });
            document.title = "Takata Airbag Recall - SafeAirbags.com";
            let desc = "1 in 6 vehicles have been affected by the Takata Airbag Recall. Check to see if yours is one. It could save your life.";
            document.querySelector('meta[name="description"]').setAttribute("content", desc);
        },
        mounted() {
            this.width = window.innerWidth;
        },
    }
    window.addEventListener("load", function() {
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
    .car-logo {
        max-height: 55px;
        max-width: 90px;
    }
    #carouselExampleControls{
        display: block;
    }
    .video-block{
        display: none;
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
        #carouselExampleControls{
            display: none;
        }
        .video-block{
            display: block;
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
        .lower {
            font-size: 18px;
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
    @media (max-height: 670px) {
        .dropdown-mob .btn {
            top: 460px;
        }
        .txt-sml {
            top: 365px;
        }
        .play-icon-mobile{
            top: 285px;
        }
    }
    @media (max-height: 580px) {
        .dropdown-mob .btn {
            top: 385px;
        }
        .txt-sml {
            top: 300px;
        }
        .play-icon-mobile{
            top: 225px;
        }
    }

</style>
