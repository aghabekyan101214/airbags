<template v-if="loaded">
    <div id="wrapper">
        <header>
            <nav class="navbar navbar-toggleable-sm bg-faded">
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
        </header>
        <router-view @loaded="change"></router-view>
        <footer>
            <p>More Information</p>
            <img src="/site/images/logo-nhtsa-white.png" alt="logo-nhtsa-white">
            <a href="#">NHTSA Takata Airbag Recall Spotlight</a>
            <br/>
            <img class="rec-log" src="/site/images/logo_new.png" alt="airbag-recall">
            <a href="#">Takata Airbag Recall 101</a>
        </footer>
    </div>
    <!--header end-->
</template>

<script>
    export default {
       data: function () {
           return {
               loaded: false
           }
       },
        watch: {
            '$route' () {
                let aria = this.$refs.nav.getAttribute("aria-expanded");
                if(aria == 'true') {
                    this.$refs.nav.click();
                }
            }
        },

        methods: {
            change (value) {
                this.loaded = true;
                console.log(this.loaded)
            }
        }
    }
</script>

<style scoped>
    .rec-log {
        width: 195px;
        height: 75px;
    }
</style>
