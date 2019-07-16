<template>
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
    <!--header end-->
</template>

<script>
    export default {
        watch: {
            '$route' () {
                let aria = this.$refs.nav.getAttribute("aria-expanded");
                if(aria == 'true') {
                    this.$refs.nav.click();
                }
            }
        }
    }
</script>

<style scoped>

</style>
