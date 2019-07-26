<template>
    <div>
<!--        <section class="video-block">-->
<!--            <div class="video-content"><img src="/site/images/home-desktop.jpg" class="video-desktop"></div>-->
<!--            <div class="video-content"><img src="/site/images/video-img-mobile.png" class="video-mobile"></div>-->
<!--            <div class="mixed-block">-->
<!--                <img @click="showVideoModal = true" src="/site/images/play.png" alt="play" class="play-button">-->
<!--                <p class="text">Morgan Freeman discusses the serious nature of the Takata airbag recall</p>-->
<!--                <div class="dropdown">-->
<!--                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">-->
<!--                        SEE IF YOUR VEHICLE IS ON THE LIST-->
<!--                    </button>-->
<!--                    <div class="dropdown-menu">-->
<!--                        <router-link to="/vin-lookup">-->
<!--                            <button class="dropdown-item">SEARCH BY VIN OR LICENSE PLATE</button>-->
<!--                        </router-link>-->
<!--                        <a class="dropdown-item" v-scroll-to="'#car-block'" href="#car-block">SEARCH BY VEHICLE BRAND</a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

<!--        </section>-->
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
                            <router-link to="/vin-lookup">
                                <button class="dropdown-item">SEARCH BY VIN OR LICENSE PLATE</button>
                            </router-link>
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
                    <a class="dropdown-item" href="#">SEARCH BY VIN OR LICENSE PLATE</a>
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
                        <img @click="info(i)" class="cursor-pointer" v-bind:src="'/storage/' + car.img" :alt="car.name">
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
        },

    }
    window.addEventListener("load", function(event) {
        let hash = window.location.hash;
        console.log(hash)
        if(hash != "") {
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
