<template>
    <div class="col-sm-5">
        <div class="gradient-bg search-banner vehicleBlock" ref="vehicleBlock">
            <p>SEE IF YOUR VEHICLE IS ON THE LIST</p>
            <router-link to="/vin-lookup">
                <button class="btn btn-primary">SEARCH BY VIN OR LICENSE PLATE</button>
            </router-link>
            <router-link to="/#car-block">
                <button type="button" class="btn btn-primary">SEARCH BY VEHICLE BRAND</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleScroll(event) {
                let top = window.pageYOffset;
                if(top >= 200) {
                    if(top < 1200) {
                        this.$refs.vehicleBlock.style.top = top - 200 + "px";
                    }
                } else {
                    this.$refs.vehicleBlock.style.top = 0;
                }

            }
        },
        created() {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style>
    .vehicleBlock {
        position: relative;
    }
</style>
