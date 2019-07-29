<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="model-description">
                        <h3>{{data.name}}</h3>
                        <img src="/site/images/close.png" class="modal-default-button close-btn cursor-pointer" @click="$emit('close')" alt="close">
                        <span class="recall-vehicle">Vehicles under recall:</span><br>
                        <div class="recall-cars row">
                            <div class="col-md-6 col-lg-6 col-xs-12" v-for="(car, i) in data.makes">{{ car.make }}<br></div>
                        </div>
                        <div class="contact-list">
                            If your vehicle is on the list, call <br>
                            to schedule your FREE repair
                        </div>
                        <div class="contact-vehicle">
                            <a v-if="data.phone !== null && mobile" class="contact-icon detail-icon"
                               style="color: white; text-decoration: none" :href="'tel:' + data.phone">{{ data.phone }}</a>
                            <a v-else-if="!mobile && data.phone !== null" class="contact-icon detail-icon"
                               style="color: white; text-decoration: none">{{ data.phone }}</a>

                            <a class="visit-icon detail-icon" :style="'color: white; text-decoration: none;' + style"
                               target="_blank" :href="url.url" v-for="(url, i) in data.urls">
                            <span v-if="data.urls.length > 1" class="fz-17">
                                <span v-if="i == 0" style="display: inline">Dodge and Mercedes-Benz Sprinter Customers,</span>
                                <span v-if="i == 1" style="display: inline">Freightliner Sprinter Customers,</span>
                                <span style="text-decoration: underline; display: inline" class="fz-17">Visit our Website</span>
                            </span>
                                <span v-else-if="data.urls.length === 1">Visit our Website</span>
                            </a>
                            <a v-if="data.text == '1' && mobile && data.phone !== ''" :href="'sms:/' + data.phone"
                               style="color: white; text-decoration: none" class="text-icon detail-icon">Click to text</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ModalComponent",
        props: ['data', 'mobile', 'ios', 'android'],
        data: function () {
            return {
                style: ""
            }
        },
        mounted() {
            if (this.$props.data.urls.length > 1) {
                this.style = "margin-bottom: 30px;";
            }
        },

    }
</script>

<style scoped>
    @media (max-width: 600px) {
        .modal-mask {
            position: fixed;
            z-index: 9998;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: table;
            transition: opacity .3s ease;
        }


        .model-description {
            height: 100vh;
        }

        .modal-container {
            width: auto!important;
        }
    }

    @media(min-width: 1200px) {
        .contact-vehicle {
            display: flex;
        }
        .contact-icon {
            background-size: 17px;
        }
        .contact-vehicle a {
            padding-left: 30px;
            line-height: 18px;
        }

        .recall-vehicle {
            font-size: 24px;
        }

        .recall-cars div {
            line-height: 2.222;
        }
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .modal-container {
        margin: 0px auto;
        background-color: #fff;
        width: 780px;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
    }

    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .modal-body {
        margin: 20px 0;
    }

    .modal-default-button {
        float: right;
    }
    .contact-list {
        line-height: 1.125;
        font-size: 24px;
    }
    /*
     * The following styles are auto-applied to elements with
     * transition="modal" when their visibility is toggled
     * by Vue.js.
     *
     * You can easily play with the modal transition by editing
     * these styles.
     */

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .fz-17 {
        font-size: 17px;
    }

    .model-description {
        position: relative;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 20px;
    }
    .cursor-pointer {
        cursor: pointer;
    }

</style>

