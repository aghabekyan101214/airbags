<template>
    <div>
        <section class="video-block">
            <img @click="showVideoModal = true" src="/site/images/video-img.png" alt="">
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
                cars: cars,
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
                this.carData = cars[i];
            },
            scrollToMakes() {

            }
        },
        components: {
            Modal,
            VideoModal
        }
    }
</script>
