<template>
    <div class="container black-block">
        <div class="container">
            <div class="row">
                <div class="panel col-12">
                    <h1 class="sml-title">{{$lang.repair.title}}</h1>
                </div>
                <div class="col-sm-7">
                    <section class="panel">
                        <ul>
                            <li>
                                {{$lang.repair.first}}
                            </li>
                            <li>
                                {{$lang.repair.second}}
                            </li>
                            <li>
                                {{$lang.repair.third}}
                            </li>
                            <li>
                                {{$lang.repair.fourth_1}} <router-link to="/#car-block">{{$lang.repair.link}}</router-link> {{$lang.repair.fourth_2}}
                            </li>
                        </ul>
                    </section>
                </div>
                <vehicle-search></vehicle-search>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        created() {
            this.$emit('loaded');
            document.title = "Free Takata Airbag Repair - Safeairbags.com";
            let desc = "If your vehicle is on the Takata Airbag Recall list, the repairs are free. Learn more about the free repair, and how to schedule.";
            document.querySelector('meta[name="description"]').setAttribute("content", desc);
        }
    }
</script>

<style scoped>
    a {
        color: white;
        text-decoration: underline;
    }
</style>
