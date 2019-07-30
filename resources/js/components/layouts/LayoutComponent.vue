<template>
    <div v-show="loaded" id="wrapper">
        <header>
            <div class="container header">
                <nav  class="navbar navbar-toggleable-sm bg-faded">
                    <router-link class="navbar-brand nb" to="/">
                        <img src="/site/images/logo.png" alt="logo" height="" width="">
                    </router-link>
                    <button ref="nav" class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsingNavbar">
                        <ul class="nav navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/quick-facts">Quick Facts</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/free-repair">About the <span class="yellow-txt">FREE </span> Repair</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.nhtsa.gov/equipment/takata-recall-spotlight" target="_blank">More About the Recall</a>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/spread-the-world">Spread the Word, Save a Life</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <router-view @loaded="change" @showIframe="showIframe = true"></router-view>
        <footer>
            <div class="container">
                <div class="row">
                    <p>More Information</p>
                    <div class="col-sm-6">
                        <img src="/site/images/logo-nhtsa-white.png" width="35%" alt="logo-nhtsa-white">
                        <a href="https://www.nhtsa.gov/equipment/takata-recall-spotlight" target="_blank">NHTSA Takata Airbag Recall Spotlight</a>
                        <br/>
                    </div>
                    <div class="col-sm-6">
                        <img src="/site/images/airbag-recall-desktop.png" width="30%" alt="airbag-recall">
                        <a href="https://www.airbagrecall.com/en/airbag-01" target="_blank">Takata Airbag Recall 101</a>
                    </div>
                </div>
            </div>
        </footer>
        <iframeComponent v-if="showIframe" @close="showIframe = false"></iframeComponent>
    </div>
    <!--header end-->
</template>

<script>
    import iframeComponent from '../parts/IframeComponent';
    export default {
        components: {
            iframeComponent
        },
       data: function () {
           return {
               loaded: false,
               showIframe: false
           }
       },
        watch: {
            '$route' () {
                let aria = this.$refs.nav.getAttribute("aria-expanded");
                if(aria == 'true') {
                    this.$refs.nav.click()
                }
            }
        },

        methods: {
            change (value) {
                this.loaded = true;
            }
        },
    }
</script>

<style scoped>
    .rec-log {
        width: 195px;
        height: 75px;
    }
</style>
