<template>
    <transition name="modal">
        <div class="modal-mask" >
            <div class="modal-wrapper" @click="$emit('close')" >
                <div class="modal-container">
                    <div class="modal-body">
                        <img src="/site/images/close.png" class="modal-default-button close-btn cursor-pointer" @click="$emit('close')" alt="close">

                        <iframe src="https://www.nhtsa.gov/recalls"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data: function() {
            return {
                staticData: {}
            }
        }
    }
</script>

<style scoped>
    iframe {
        height: 100%;
        width: 100%;
    }
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
            height: 100%;
        }
        .modal-body {
            height: 100%!important;
            margin: 0!important;
            padding: 30px 5px 5px 5px!important;
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
        background: black;
        height: 600px;
        padding-top: 35px;
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
        top: 5px;
        right: 5px;
        height: 20px;
    }
    .cursor-pointer {
        cursor: pointer;
    }

</style>


