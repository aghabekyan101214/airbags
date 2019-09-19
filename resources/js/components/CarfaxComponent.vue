<template>
    <div class="container black-block">
        <div class="identification-box">
            <h3>Vehicle Identification Number (VIN)</h3>
            <p class="txt-white">Every vehicle has a unique VIN. Enter a VIN to learn if a specific vehicle needs to be repaired as part of a recall.</p>
            <div class="form-group has-search">
                <span class="fa fa-search form-control-feedback"></span>
                <input type="text" v-model="vin" name="vin" ref="vinInput" class="ind-input" placeholder="Enter 17 character VIN ">
            </div>

            <div class="identification-box">
                <section class="container black-block panel" style="padding-bottom: 0">
                    <button @click="getRecall()" type="button" v-show="!loading" class="btn btn-primary ind-button">Check my vehicle</button>
                    <img src="/site/images/loading.gif" v-show="loading" alt="">
                </section>
            </div>

            <div class="container pl-m-30 pr-m-30 hidden" ref="details">
                <div class="row">
                    <div class="col-sm-5 col-xs-12 vin-group mr-lg-40 txt-white">
                        <span>VIN: </span>
                        <span>{{ data.vin }}</span>
                    </div>
                    <div class="col-sm-5 col-xs-12  text-right vin-group ml-lg-40 txt-white">
                        <span>Year: </span>
                        <span>{{ data.year }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-5 col-xs-12  vin-group mr-lg-40 txt-white">
                        <span>Model: </span>
                        <span>{{ data.model }}</span>
                    </div>
                    <div class="col-sm-5 col-xs-12  text-right vin-group ml-lg-40 txt-white">
                        <span>Make: </span>
                        <span>{{ data.make }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="grey-box hidden" ref="noRec" id="unrepaired-div">
            <p class="font-weight-bold d-inline-block mb-0" ref="greatNews">Great News!</p>
            <p class="font-weight-bold d-inline-block">Your Vehicle doesn’t have any recalls associated with the TAKATA Airbag recall.</p>
        </div>


        <div class="grey-box hidden" ref="takataReport">
                <div class="identif-details row">
<!--                    <span class="col-2 numbering">{{ takata.length }}</span>-->
                    <span class="col-10 p0">
                        <span class="font-weight-bold re-text">Unrepaired Recalls</span>
                        <br>
                        associated with this VIN
			        </span>
                </div>
            <div v-for="d in takata">
                <span class="indetif-date">{{ new Date(d.date).toDateString() }}</span>
                <div class="recall-txt-list">
                    <p><span class="font-weight-bold d-inline-block">NHTSA Recall Number:</span> {{ d.nhtsaNumber }}</p>
                    <p><span class="font-weight-bold d-inline-block">Campaign Number:</span>  {{ d.campaignNumber }}</p>
                    <p><span class="font-weight-bold d-inline-block">Campaign:</span>  {{ d.campaign }}</p>
<!--                    <p><span class="font-weight-bold d-inline-block">Manufacturer Recall Number:</span>  1912f</p>-->
                </div>
                <div class="description">
                    <p class="mb-0 font-weight-bold d-block">Description:</p>
                    <p>{{ d.description }}</p>
                    <p class="mb-0 font-weight-bold d-block">Safety Risk:</p>
                    <p>
                        {{ d.safetyRisk }}
                    <p>
                    <p><span class="font-weight-bold d-inline-block">Status:</span> {{ d.status }}</p>
                </div>
                <u class="txt-middle font-weight-bold">What To Do:</u>
                <p>
                    The fix is <span class="font-weight-bold"> simple, fast and FREE.</span>
                </p>
                <p>
                    Parts are available at your local dealer.
                    Schedule your repair today. Have your VIN ready, and call to schedule your
                    <span class="font-weight-bold"> FREE</span> repair.
                </p>
                <p><span class="font-weight-bold d-inline-block" v-if="d.expirationDate != null">• Expiration Date: </span>{{ d.expirationDate }}</p>
                <div class="contact-row row" v-if="credentials.phone" style="margin: 0">
                    <a href="#" class="contact-link phone-icon col-sm-4"><i class="fa fa-phone" aria-hidden="true">{{ credentials.phone }}</i></a>
                    <a :href="credentials.urls[0].url" target="_blank" class="contact-link web-icon col-sm-4"><i class="fa fa-globe" aria-hidden="true">Visit Our Website</i> </a>
                    <a v-if="credentials.text == 1 && isMobile" :mob="isMobile" :href="'sms:/' + credentials.phone" class="contact-link sms-icon col-sm-4"><i class="fa fa-envelope" aria-hidden="true">Text FIX to {{ credentials.phone }}</i></a>
                </div>
                <hr>
            </div>
        </div>

        <div class="grey-box hidden" style="margin-top: 20px" ref="noRec2">
            <p class="font-weight-bold d-inline-block">Your Vehicle doesn’t have any recalls at this time.</p>
            <p>
                If your car isn't recalled now, it could be recalled later.
                Please check back every 3 months to make sure there are no recalls on your vehicle.
                To check if your vehicle has other recalls, please visit <a href="https://www.nhtsa.gov/recalls"  target="_blank">https://www.nhtsa.gov/recalls</a>
            </p>
        </div>

        <div class="grey-box box2 hidden" ref="otherRecall">
            <div class="identif-details row">
<!--                <span class="col-2 numbering">{{ noTakata.length }}</span>-->
                <span class="col-10 p0"></span>
			<span class="font-weight-bold re-text">
			Other Unrepaired Recalls
			</span>
            </div>
            <div v-for="recall in noTakata">
                <span class="indetif-date">{{ new Date(recall.date).toDateString() }}</span>
                <div class="description">
                    <p class="mb-0 font-weight-bold d-block">Description:</p>
                    <p>
                        {{ recall.description }}
                    </p>
                    <p class="mb-0 font-weight-bold d-block">Safety Risk:</p>
                    <p>
                        {{ recall.safetyRisk }}
                    <p>
                    <p>
                        <span class="font-weight-bold d-inline-block">NHTSA Number:</span>{{ recall.nhtsaNumber }}
                    </p>
                </div>
                <p class="mb-0 font-weight-bold d-block">Remedy:</p>
                <p>
                    {{ recall.remedy }}
                </p>
                <hr>
            </div>
        </div>

        <p class="txt-white hidden" ref="recInfo" style="margin-top: 15px">
            If your car isn't recalled now, it could be recalled later.
            Please check back every 3 months to make sure there are no recalls on your vehicle.
            To check if your vehicle has other recalls, please visit <a href="https://www.nhtsa.gov/recalls"  target="_blank">https://www.nhtsa.gov/recalls</a>
        </p>

        <div class="grey-box hidden" ref="wrongVin">
            <div class="identif-details row">
                Provided Vin is incorrect
            </div>
        </div>

        <div class="identification-box">
            <section class="container black-block panel">
                <div class="row">
                    <ul class="col-sm-6 col-xs-12 pl-lg-0">
                        <li class="list-sml-title">Where's my VIN?</li>
                        <li>
                            Look on the lower left of your car's windshield for your 17-character Vehicle Identification Number.
                            Your VIN is also located on your car's registration card, and it may be shown on your insurance card
                        </li>
                    </ul>
                    <ul class="col-sm-6 col-xs-12 pl-lg-0">
                        <li class="list-sml-title">What this VIN search tool will show</li>
                        <li>
                            An unrepaired vehicle affected by a
                            vehicle safety recall in the past 15
                            calendar years
                        </li>
                        <li>
                            Vehicle safety recalls from major automakers, including motorcycle manufacturers.
                        </li>
                    </ul>
                </div>
            </section>
        </div>


    <div v-show="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <div class="modal-body">
                            <slot name="body">
                                <h3 style="color: white">Provided VIN Is not valid. Please Provide a valid VIN to continue.</h3>
                            </slot>
                        </div>
                        <div class="modal-footer" style="border: none; justify-content: center">
                            <slot name="footer">
                                <button style="margin: 0" @click="showModal = false" type="button" v-show="!loading" class="btn btn-primary ind-button">Ok </button>
                            </slot>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    </div>
</template>

<script>
    import {isMobileOnly} from "mobile-device-detect";

    export default {
        props: ['lang'],
        data: function() {
            return {
                data: "",
                noTakata: [],
                takata: [],
                recalls: [],
                vin: "",
                credentials: [],
                loading: false,
                showModal: false,
                send: 0,
                isMobile: isMobileOnly,
            }
        },
        methods: {
            getRecall() {
                this.vin = this.vin.replace(/\s/g,'');
                if(this.vin.length != 17) {
                    this.$refs.vinInput.style.border = "1px solid red";
                    this.showModal = true;
                    return;
                }
                this.$refs.vinInput.style.border = "1px solid gray";
                this.loading = true;
                this.$refs.details.style.display = "none";
                this.$refs.noRec.style.display = "none";
                this.$refs.noRec2.style.display = "none";
                this.$refs.takataReport.style.display = "none";
                this.$refs.otherRecall.style.display = "none";
                this.$refs.wrongVin.style.display = "none";
                this.$refs.recInfo.style.display = "none";

                axios.post('/get-report', {vin: this.vin})
                    .then((response) => {
                        this.loading = false;
                        this.data = response.data.data ? response.data.data.recallInformation[0] : "";
                        this.takata = response.data.takata != "" ? response.data.takata : [];
                        this.noTakata = response.data.noTakata != "" ? response.data.noTakata : [];
                        this.$refs.details.style.display = "block";
                        this.$refs.recInfo.style.display = "block";

                        if(response.data.status == 0) {

                            // no recall
                            this.$refs.noRec.style.display = "block";
                        } else if(response.data.status == 1) {

                            // has takata recall
                            if(this.takata != "") {
                                this.$refs.takataReport.style.display = "block";
                            } else {
                                this.$refs.noRec.style.display = "block";
                            }
                            // has other recall
                            if(this.noTakata != "") {
                                this.$refs.otherRecall.style.display = "block";
                            } else {
                                this.$refs.noRec2.style.display = "block";
                            }

                            this.credentials = response.data.credentials;
                        } else if(response.data.status == -1) {

                            // wrong vin
                            this.$refs.wrongVin.style.display = "block";
                            this.showModal = true;
                        }
                    }).catch((e) => {
                        // try one more time if something went wrong
                        if(this.send == 0) {
                            this.send++;
                            return this.getRecall();
                        }
                    this.loading = false;
                    alert("Something Went Wrong, Please, Try Again Later.");
                });
            }
        },
        created() {
            this.$emit('loaded', true);
            document.title = "Check For Recalls";
            let desc = "More than 41 million vehicles are affected by the Takata Airbag Recall, making it the largest auto recall in US history. See, if your car is in recall list.";
            document.querySelector('meta[name="description"]').setAttribute("content", desc);
        }
    }
</script>

<style scoped>
    hr {
        border-top: 3px solid black;
    }
    .contact-link i {
        margin-left: 20px;
    }
    .phone-icon{
        background: url(/site/images/phone.png) no-repeat;
        background-size: contain;
    }
    .web-icon{
        background: url(/site/images/web.png) no-repeat;
        background-size: contain;
    }
    .sms-icon{
        background: url(/site/images/sms.png) no-repeat;
        background-size: contain;
    }
    .contact-row a {
        text-decoration: none;
    }
    .main-content{
        max-width: 800px;
    }

    .txt-white{
        color: #ffffff;
    }

    .identif-details {
        border-bottom: 2px solid #8b8b8b;
        width:301px;
        margin: 0;
        padding-bottom: 15px;
        margin-bottom: 10px;
    }
    .indetif-date {
        display: block;
        margin-bottom: 20px;
        font-size: 12px;
    }
    .hidden{
        display: none;
    }
    .identif-details span{
        font-size:12px;
    }
    span.re-text {
        font-size: 26px;
        line-height: 20px;
    }
    span.numbering {
        font-size: 59px;
        font-family: 'Montserrat-Bold';
        line-height: 43px;
        padding: 0;
    }
    .recall-txt-list {
        padding: 0 0 10px 0;
        border-bottom: 2px solid #8b8b8b;
        width: 301px;
        margin-bottom: 10px;
    }
    .ind-button {
        float: inherit;
        color: #000;
        background: #fff200;
        background: -moz-linear-gradient(top, #fff200 1%, #ffd600 100%);
        background: -webkit-linear-gradient(top, #fff200 1%,#ffd600 100%);
        background: linear-gradient(to bottom, #fff200 1%,#ffd600 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fff200', endColorstr='#ffd600',GradientType=0 );
        border: none;
        height: 40px;
        border-radius: 0;
        padding: 0 18px;
        text-align: left;
        font-family: 'Montserrat-Bold';
        font-size: 13px;
        margin: 10px auto 60px;
        display: block;
    }
    .p0{padding:0;}
    .recall-txt-list p {
        padding: 0;
        margin-bottom: 4px;
    }
    .identification-box {
        max-width: 580px;
        margin: 20px auto;
        text-align: center;
    }
    .identification-box h3 {
        color: #fff;
        border-bottom: 2px solid #fff200;
        width: 85%;
        margin: 10px auto;
        line-height: 40px;
        letter-spacing: 1px;
    }
    .identification-box p{
        font-size:12px;
        font-family: 'Montserrat-Regular';
    }
    .has-search{
        position:relative;
    }
    .ind-input {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 20px;

    }
    .fa-search{
        position: absolute;
        right: 10px;
        top: 13px;
        color: #c9c9ca;
        font-size: 26px;
    }
    .has-search input::placeholder {
        color: #cecece;
        font-size:25px;
        /*font-family: 'Montserrat-Arabic-Light';*/
    }
    .grey-box {
        background: #e7e7e7;
        color: #000;
        padding: 25px 20px;
    }

    .contact-row .contact-link {
        font-size: 15px;
        color: #000;
        margin-bottom: 25px;
    }
    .vin-group {
        border-bottom: 2px solid #fff200;
        padding: 0;
        margin-bottom: 15px;
        padding-bottom: 10px;
    }
    .vin-group span{
        display:block;
        text-align:left;
    }
    .box2{margin-top:30px;}

    .box2 span.re-text {
        font-size: 26px;
        line-height: 33px;
    }
    .list-sml-title{
        font-weight:bold;
        margin-bottom:10px;
    }
    .list-sml-title::before{
        content: none !important;
    }
    .font-weight-bold {
        font-weight: 700!important;
        font-family: 'Montserrat-Bold';
    }
    @media  (min-width: 600px) {
        .mr-lg-40{
            margin-right:40px;
        }
        .ml-lg-40{
            margin-left:40px;
        }
        .grey-box {
            padding: 25px 45px;
        }

    }

    @media  (max-width: 820px) {
        .identification-box h3 {
            width: 100%;
            margin: 10px 0;
        }
        .identification-box {
            text-align: left;
        }
        .has-search {
            margin-top: 35px;
        }
        .pl-m-30{padding-left:30px;}
        .pr-m-30{padding-right:30px;}
        .ind-input {
            height: 40px;
            padding: 0px 0 0 10px;
        }
        .fa-search {
            font-size: 21px;
            top: 10px;
        }
        .has-search input::placeholder {
            font-size:20px;
            /*font-family: 'Montserrat-Arabic-Light';*/
        }
        .modal-container {
            width: 100%!important;
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
        width: 500px;
        margin: 0px auto;
        padding: 20px 30px;
        background-color: black;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
        border: 1px solid white;
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
</style>
