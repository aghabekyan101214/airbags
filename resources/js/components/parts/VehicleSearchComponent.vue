<template>
    <div class="col-sm-5">
        <div class="gradient-bg search-banner vehicleBlock" id="vehicleBlock" ref="vehicleBlock">
            <p class="upper">{{ $lang.parts.see_in_list }}</p>
<!--            <button @click="showIframe = true" class="btn btn-primary">{{ $lang.parts.search_vin }}</button>-->
            <a :href="$lang.parts.link" target="_blank">
                <button :class="{font: this.$lang.getLang() === 'es'}" class="btn btn-primary upper" >
                    {{$lang.parts.search_vin }}
                </button>
            </a>
            <router-link  :to="'/' + getLang +'/#car-block'">
                <button :class="{font: this.$lang.getLang() === 'es'}" type="button" class="btn btn-primary">{{ $lang.parts.search_vehicle }}</button>
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

<style scoped>
    .vehicleBlock {
        position: relative;
    }

    @media (max-width: 600px) {
        .font{
            font-size: 12px ;
        }
    }

    @media (max-width: 360px) {
        .font{
            font-size: 10px;
        }
    }

</style>
