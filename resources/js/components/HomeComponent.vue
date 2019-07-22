<template>
    <div>
        <section class="video-block">
            <img src="/site/images/Morgan_Freeman.jpg" alt="">
            <img @click="showVideoModal = true" src="/site/images/play.png" alt="play" class="play-button">
            <p class="text">Morgan Freeman discusses the serious nature of the Takata airbag recall</p>
            <div class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    SEE IF YOUR VEHICLE IS ON THE LIST
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" target="_blank" href="https://www.nhtsa.gov/recalls">SEARCH BY VIN OR LICENSE PLATE</a>
                    <a class="dropdown-item" v-scroll-to="'#car-block'" href="#car-block">SEARCH BY VEHICLE BRAND</a>
                </div>
            </div>
        </section>
        <!--video-block end-->
        <section class="model-details">
            <div class="panel">
                <h2>SEARCH BY VEHICLE BRAND</h2>
                <p>choose from the list below</p>
                <p><img v-scroll-to="'#car-block'" src="/site/images/arrow_down.png" alt=""></p>
            </div>
            <div class="car-block" id="car-block">
                <div v-for="(car, i) in cars">
                    <img @click="info(i)" v-bind:src="'/site/images/' + car.img" :alt="car.name">
                </div>
            </div>
        </section>
        <Modal v-if="showModal" @close="showModal = false" :data="carData" :mobile="mobile" :ios="ios" :android="android" />
        <video-modal v-if="showVideoModal" @close="showVideoModal = false"></video-modal>
    </div>

</template>

<script>
    import Vue from 'vue';
    import cars from "../data/cars";
    import Modal from "./ModalComponent";
    import VideoModal from "./parts/VideoModal";
    import {isMobileOnly, isIOS, isAndroid} from "mobile-device-detect";
    import VueScrollTo from 'vue-scrollto';

    Vue.use(VueScrollTo);

    export default {
        data: function() {
            return {
                cars: "",
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
                this.showModal = true;
                this.carData = this.cars[i];
            },
            scrollToMakes() {

            }
        },
        components: {
            Modal,
            VideoModal
        },
        created() {
            var self = this;
            axios.get('/vehicles', {

            })
                .then(function (response) {
                    self.cars = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
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
    .text {
        position: absolute;
        top: 76%;
        font-size: 14px;
        color:#fff;
        width: 100%;
        text-align: center;
        padding: 0 30px;
    }

    @media (max-width: 600px){
        .panel {
            padding: 20px 0 20px 0;
        }

        .panel img {
            height: 35px;
            margin-top: 10px;
        }
    }

</style>
