<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="model-description">
                <h3>{{data.name}}</h3>
                <button  style="position: absolute; right: 0; top: 0; background: white" class="modal-default-button" @click="$emit('close')">
                    X
                </button>
                <span>Vehicles under recall:</span><br>
                <span v-for="(car, i) in data.makes">{{ car }}<br></span>
                <div class="contact-list">
                    If your vehicle is on the list,
                    call to schedule your FREE repair
                </div>
                <a v-if="mobile" class="contact-icon detail-icon" style="color: white; text-decoration: none" :href="'tel:' + data.phone">{{ data.phone }}</a>
                <a class="visit-icon detail-icon" :style="'color: white; text-decoration: none;' + style" target="_blank" :href="url" v-for="(url, i) in data.url">
                    <span v-if="data.url.length > 1" class="fz-17">
                        <span v-if="i == 0" style="display: inline">Dodge and Mercedes-Benz Sprinter Customers,</span>
                        <span v-if="i == 1" style="display: inline">Freightliner Sprinter Customers,</span>
                        <span style="text-decoration: underline; display: inline" class="fz-17">Visit our Website</span>
                    </span>
                    <span v-else-if="data.url.length == 1">Visit our Website</span>
                    </a>
                <a v-if="data.text && mobile" :href="'sms:/' + data.phone" style="color: white; text-decoration: none" class="text-icon detail-icon">Click to text</a>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "ModalComponent",
        props:['data', 'mobile', 'ios', 'android'],
        data: function() {
            return {
                style: ""
            }
        },
        created() {
            if(this.$props.data.url.length > 1) {
                this.style = "margin-bottom: 30px;";
            }
        },

    }
</script>

<style scoped>
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
    .model-description{
        height: 100vh;
    }
    .modal-header h3 {
        margin-top: 0;
        color: #42b983;
    }

    .model-description {
        overflow: auto;
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
</style>


