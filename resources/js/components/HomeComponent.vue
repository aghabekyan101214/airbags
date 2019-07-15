<template>
    <div>
        <section class="video-block">
            <img src="/site/images/video-img.png" alt="">
            <div class="dropdown">
                <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                    SEE IF YOUR VEHICLE IS ON THE LIST
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" target="_blank" href="http://www.nhtsa.gov/equipment/takata-recall-spotlight">SEARCH BY VIN OR LICENSE PLATE</a>
                    <a class="dropdown-item" href="#">SEARCH BY VEHICLE BRAND</a>
                </div>
            </div>
        </section>
        <!--video-block end-->
        <section class="model-details">
            <div class="panel">
                <h2>SEARCH BY VEHICLE BRAND</h2>
                <p>choose from the list below</p>
            </div>
            <div class="car-block">
                <div v-for="(car, i) in cars">
                    <img @click="info(i)" v-bind:src="'/site/images/' + car.img" :alt="car.name">
                </div>
            </div>
        </section>
        <!--panel end-->
        <section class="info-block">
            <p>More Information</p>
            <img src="/site/images/logo-nhtsa-white.png" alt="logo-nhtsa-white">
            <a href="#">NHTSA Takata Airbag Recall Spotlight</a>
            <br>
            <img src="/site/images/airbag-recall.png" alt="airbag-recall">
            <a href="#">Takata Airbag Recall 101</a>
        </section>
        <!--info-block end-->
        <Modal v-if="showModal" @close="showModal = false" :data="carData" :android="isAndroid" :ios="isIOS" />
    </div>

</template>

<script>
    import cars from "../data/cars";
    import Modal from "./ModalComponent";
    import {isAndroid, isIOS} from "mobile-device-detect";
    export default {
        data: function() {
            return {
                cars: cars,
                showModal: false,
                carData: ""
            }

        },
        methods: {
            info(i) {
                this.showModal = true;
                this.carData = cars[i];
            }
        },
        components: {
            Modal
        }
    }
</script>
