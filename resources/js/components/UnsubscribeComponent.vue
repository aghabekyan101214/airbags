<template>
    <div class="col-md-12" style="background: white">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label>First Name <span style="color: red">{{ errors.first('firstName') }}</span></label>
                        <input type="text" v-validate="'required|alpha'" class="form-control" name="firstName" v-model="firstName">
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label>Last Name <span style="color: red">{{ errors.first('lastName') }}</span></label>
                        <input type="text"  v-validate="'required|alpha'" class="form-control" name="lastName" v-model="lastName">
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label>Email <span style="color: red">{{ errors.first('email') }}</span></label>
                        <input v-validate="'required|email'" name="email" type="text" class="form-control" v-model="email">
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label for="">Vin <span style="color: red">{{ errors.first('vin') }}</span></label>
                        <input type="text" v-validate="'required'" class="form-control" name="vin" v-model="vin">
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label for="">Make <span style="color: red">{{ errors.first('make') }}</span></label>
                        <input type="text" v-validate="'required'" class="form-control" name="make" v-model="make">
                    </div>
                </div>
                <div class="col-md-6 col-xs-12">
                    <div class="form-group">
                        <label for="">Model <span style="color: red">{{ errors.first('model') }}</span></label>
                        <input type="text" v-validate="'required'" class="form-control" name="model" v-model="model">
                    </div>
                </div>
                <div class="col-md-12 col-xs-12">
                    <div class="form-group">
                        <label>Put Your Signature Here <span ref="signatureError" style="color: red"></span></label>
                        <VueSignaturePad
                                :style="'border: 1px solid black'"
                                height="500px"
                                ref="signaturePad"
                                :options="{onLoad: () => {$refs.signaturePad.resizeCanvas()}}"
                        />
                    </div>
                </div>
                <div class="col-md-12">
                    <button @click="undo">Undo</button>
                </div>
                <div class="col-md-12">
                    <input type="submit" class="btn btn-success" @click="unsubscribe()" value="Unsubscribe">
                </div>
            </div>
        </div>
        <unsubscribe-popup v-if="showModal"></unsubscribe-popup>
    </div>

</template>

<script>
    import UnsubscribePopup from "./parts/UnsubscribePopup"
    export default {
        components: {
            UnsubscribePopup
        },
        data: function() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                vin: "",
                signature: "",
                showModal: false,
                make: "",
                model: ""
            }

        },
        methods: {
            unsubscribe() {
                const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
                this.signature = data;
                if(isEmpty) {
                    this.$refs.signatureError.innerHTML = "Please put your signature below";
                    return;
                }
                this.$refs.signatureError.innerHTML = "";
                this.$validator.validate().then(valid => {
                    if (!valid) {
                        window.scrollTo(0,0);
                    } else {
                        this.send();
                    }
                });
            },
            undo() {
                this.$refs.signaturePad.undoSignature();
            },

            send() {
                var self = this;
                axios.post('/unsubscribing', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    vin: this.vin,
                    signature: this.signature,
                    make: this.make,
                    model: this.model
                }).then(function (response) {
                    self.showModal = true;
                })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        created() {
            this.$emit("loaded");
        },
        mounted() {
            this.$nextTick(function () {
                this.$refs.signaturePad.resizeCanvas()
            })
        }


    }
</script>
