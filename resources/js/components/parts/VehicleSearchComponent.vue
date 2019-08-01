<template>
    <div class="col-sm-5">
        <div class="gradient-bg search-banner vehicleBlock" id="vehicleBlock" ref="vehicleBlock">
            <p>SEE IF YOUR VEHICLE IS ON THE LIST</p>
            <button @click="showIframe = true" class="btn btn-primary">SEARCH BY VIN</button>
            <router-link :to="'/' + getLang +'/#car-block'">
                <button type="button" class="btn btn-primary">SEARCH BY VEHICLE BRAND</button>
            </router-link>
        </div>
        <iframeComponent v-if="showIframe" @close="showIframe = false"></iframeComponent>
    </div>
</template>

<script>
    import iframeComponent from '../parts/IframeComponent';
    export default {
        components: {
            iframeComponent
        },
        data: () => {
            return {
                showIframe: false,
            }
        },
        methods: {
            handleScroll(event) {
                let top = window.pageYOffset;
                let elem = document.getElementById('vehicleBlock');
                if(top >= 200) {
                    if(top < 1200) {
                        elem.style.top = top - 200 + "px";
                    }
                } else {
                    elem.style.top = 0;
                }

            }
        },
        mounted() {
            let pathName = window.location.pathname;
            let w = window.innerWidth;
            if(pathName === "/spread-the-world" && w > 1200) {
                window.addEventListener('scroll', this.handleScroll);
            }
        },
        computed: {
            getLang: function() {
                return this.$lang.getLang();
            }
        },
        destroyed(){
            window.removeEventListener('scroll', this.handleScroll);
        },
    }
</script>

<style>
    .vehicleBlock {
        position: relative;
    }
</style>
