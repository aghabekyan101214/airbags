<template>
    <div v-show="loaded" id="wrapper">
        <header>
            <div class="container header">
                <nav  class="navbar navbar-toggleable-sm bg-faded">
                    <router-link class="navbar-brand nb" :to="'/' + getLang">
                        <img src="/site/images/logo.png" alt="logo" height="" width="">
                    </router-link>
                    <div class="localization">
                        <a href="javascript:void(0)" class="en-lang" @click="changeLang('en')">
                            English
                        </a>
                        <span style="color:white">|</span>
                        <a href="javascript:void(0)" class="es-lang" @click="changeLang('es')">
                            Espanol
                        </a>
                    </div>
                    <button ref="nav" class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                        <span> </span>
                        <span> </span>
                        <span> </span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsingNavbar">
                        <ul class="nav navbar-nav">
                            <li class="nav-item" >
                                <router-link class="nav-link" :to="'/' + getLang + '/quick-facts'">{{$lang.header.quick_facts}}</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="'/' + getLang + '/free-repair'">About the <span class="yellow-txt">FREE </span> Repair</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.nhtsa.gov/equipment/takata-recall-spotlight" target="_blank">More About the Recall</a>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="'/' + getLang + '/spread-the-world'">Spread the Word, Save a Life</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <router-view @loaded="change" @showIframe="showIframe = true" :lang="getLang"></router-view>
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
                        <a href="https://www.airbagrecall.com/en/airbag-recall-101" target="_blank">Takata Airbag Recall 101</a>
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
            '$route' (to) {
                let aria = this.$refs.nav.getAttribute("aria-expanded");
                if(aria == 'true') {
                    this.$refs.nav.click()
                }
                this.$lang.setLang(to.params.lang);
            }
        },

        methods: {
            change (value) {
                this.loaded = true;
            },
            changeLang(lang) {
                this.$lang.setLang(lang);
                let current = this.$route.path;
                current = current.split("/");
                current.splice(0,2).join();
                this.$router.push("/" + lang + "/" + current);
            }
        },

        computed: {
            getLang: function() {
                return this.$lang.getLang();
            }
        }
    }
</script>

<style scoped>
    .rec-log {
        width: 195px;
        height: 75px;
    }
    .cursor-pointer {
        cursor: pointer;
    }
    .localization a {
        text-decoration: none;
        color: white;
    }
    .es-lang{
        margin-left: 5px;
    }
    .en-lang{
        margin-right: 5px;
    }

</style>
