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
                            Español
                        </a>
                    </div>
                    <div class="localization-mobile">
                        <select class="language-mobile" v-model="getLang" @change="changeLang($event)">
                            <option value="en">En</option>
                            <option value="es">Es</option>
                        </select>
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
                                <router-link class="nav-link" :to="'/' + getLang + '/free-repair'">{{$lang.header.free_repair}}</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" :href="$lang.header.link" target="_blank">{{$lang.header.recall}}</a>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="'/' + getLang + '/spread-the-word'">{{$lang.header.spread}}</router-link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <router-view @loaded="change" @showIframe="showIframe = true" :lang="getLang"></router-view>
        <iframeComponent v-if="showIframe" @close="showIframe = false"></iframeComponent>
        <footer>
            <div class="container">
                <div class="row">
                    <p>{{$lang.footer.more_info}}</p>
                    <div class="col-sm-6">
                        <img src="/site/images/logo-nhtsa-white.png" width="35%" alt="'NHTSA' Takata Airbag Recall Info">
                        <a :href="$lang.footer.link1" target="_blank">{{$lang.footer.nhtsa}}</a>
                        <br/>
                    </div>
                    <div class="col-sm-6">
                        <img src="/site/images/airbag-recall-desktop.png" width="30%" alt="Takata Airbag Recall Info">
                        <a :href="$lang.footer.link2" target="_blank">{{$lang.footer.recall}}</a>
                    </div>
                </div>
            </div>
            <hr style="border-top: 1px solid #d5d5d5;">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 footer-links">
                        <span class="yellow-txt">Follow us</span>
                        <a style="margin-left: 10px" href="https://facebook.com/safeairbags" target="_blank">
                            <img style="padding: 0" src="/site/images/fb.png" alt="Facebook Icon">
                        </a>
<!--                        <img src="/site/images/twitter.png" alt="Twitter Icon">-->
                        <a style="margin-left: 10px" href="https://www.youtube.com/channel/UC5OyeSxqE4duU9WCFm6tUog" target="_blank">
                            <img style="padding: 0" src="/site/images/youtube.png" alt="Youtube Icon">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
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
               showIframe: false,
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
                if(typeof lang !== 'string') {
                    lang = lang.target.value;
                }
                this.$lang.setLang(lang);
                let current = this.$route.path;
                current = current.split("/");
                current.splice(0,2).join();
                this.$router.push("/" + lang + "/" + current);
            }
        },

        computed: {
            getLang:  {
                get: function() {
                    return this.$lang.getLang() !== undefined ? this.$lang.getLang() : "en";
                },
                set: function(newValue) {
                }
            },
            width: function() {
                return window.innerWidth;
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
    .language-mobile {
        color: white;
        background: black;
        width: 100%;
    }
    .localization-mobile {
        position: absolute;
        right: 60px;
        width: 55px;
        top: 17px;
        display: none;
    }

    .localization {
        display: block;
    }

    @media (max-width: 600px) {
        .localization {
            display: none;
        }
        .localization-mobile {
            display: block;
        }
        .footer-links {
            justify-content: center!important;
        }
    }
    .footer-links {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }

</style>
