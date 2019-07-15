<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" v-model="firstName">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model="lastName">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="email">
                </div>
            </div>
            <div class="col-md-6">
                <div class="form-group">
                    <label>Vin</label>
                    <input type="email" class="form-control" v-model="vin">
                </div>
            </div>
            <div>
                <VueSignaturePad
                        width="500px"
                        height="500px"
                        ref="signaturePad"
                />
            </div>
            <div>
                <button @click="save">Save</button>
                <button @click="undo">Undo</button>
            </div>
            <div>
                <input type="submit" class="btn btn-success" @click="unsubscribe()" value="Unsubscribe">
            </div>
        </div>
        <ul>
            <li v-for="car in cars">{{ car.name }}
                <ul>
                    <li v-for="makes in car.makes">{{ makes }}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import cars from "../data/cars";
    export default {
        data: function() {
            return {
                firstName: "",
                lastName: "",
                email: "",
                vin: "",
                signature: "",
                cars: cars
            }

        },
        methods: {
            unsubscribe() {
                axios.post('/unsubscribing', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    vin: this.vin,
                    signature: this.signature
                }).then(function (response) {
                        console.log(response.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
            undo() {
                this.$refs.signaturePad.undoSignature();
            },
            save() {
                const { isEmpty, data } = this.$refs.signaturePad.saveSignature();
                this.signature = data;
            }
        }
    }
</script>
