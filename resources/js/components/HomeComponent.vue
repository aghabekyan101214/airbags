<template>
    <div>
        <section class="video-block">
            <div class="video-content">
                <img src="/site/images/video-img-desktop.png" class="video-desktop">
                <div class="video-details">
                    <div class="desktop-details">
                        <p>
                            “1 out of 6 vehicles have been
                            affected by the <span class="yellow-txt">Takata Airbag Recall.</span>
                            Check to see if yours is one.

                            It could save your life.”
                        </p>
                        <br>
                        <p>It could save your life.”</p>
                        <p>- Morgan</p>
                    </div>
                    <div class="dropdown">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                            SEE IF YOUR VEHICLE IS ON THE LIST
                        </button>
                        <div class="dropdown-menu">
                            <button @click="$emit('showIframe')" class="dropdown-item">SEARCH BY VIN OR LICENSE PLATE</button>
                            <a class="dropdown-item" v-scroll-to="'#car-block'" href="#car-block">SEARCH BY VEHICLE BRAND</a>
                        </div>
                        <p class="txt-sml">
                            Morgan Freeman discusses the serious
                            nature of the Takata Airbag Recall.
                        </p>
                        <a class="play-icon" @click="showVideoModal = true">WATCH NOW</a>
                        <img class="play-icon-mobile" src="/site/images/play-icon-mobile.png" @click="showVideoModal = true" alt="play-icon">
                    </div>
                </div>
            </div>
            <div class="video-content"><img src="/site/images/video-img-mobile.png" class="video-mobile"></div>
            <div class="dropdown">
                <!--<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    SEE IF YOUR VEHICLE IS ON THE LIST
                </button>-->
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">SEARCH BY VIN</a>
                    <a class="dropdown-item" href="#">SEARCH BY VEHICLE BRAND</a>
                </div>
            </div>
        </section>
        <!--video-block end-->
        <section class="model-details">
            <div class="panel">
                <h2>SEARCH BY VEHICLE BRAND</h2>
                <p>choose from the list below</p>
                <p><img v-scroll-to="'#car-block'" height="30" class="cursor-pointer" src="/site/images/arrow_down.png" alt=""></p>
            </div>
            <div class="car-block" id="car-block" ref="carBlock">
                <div class="container car-block-inner">
                    <div v-for="(car, i) in cars">
                        <img @click="info(i)" class="cursor-pointer car-logo" v-bind:src="'/storage/' + car.img" :alt="car.name">
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
                android: isAndroid
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
                })
                .catch(function (error) {
                    console.log(error);
                });
            document.title = "Takata Airbag Recall - SafeAirbags.com";
            let desc = "1 in 6 vehicles have been affected by the Takata Airbag Recall. Check to see if yours is one. It could save your life.";
            document.querySelector('meta[name="description"]').setAttribute("content", desc);
        },
        mounted() {
            let hash = window.location.hash;
            if(hash.length > 0) {
                this.$scrollTo(this.$refs.carBlock, 1500)
            }
        }

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
        opacity: 0.7;
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
            height: 80px;
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
