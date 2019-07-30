<template>
    <div class="container black-block">
        <div class="container">
            <div class="row">
                <div class="panel col-12">
                    <h1 class="sml-title">About the<span class="yellow-txt"> FREE</span> repair:</h1>
                </div>
                <div class="col-sm-7">
                    <section class="panel">
                        <ul>
                            <li>
                                The repair is completed at absolutely <span class="yellow-txt">NO COST</span> to you, and performed by preferred local dealer.
                            </li>
                            <li>
                                Most repairs can be completed in one hour or less.
                            </li>
                            <li>
                                A <span class="yellow-txt">FREE</span> loaner vehicle or other alternate transportation is available during your repair.
                            </li>
                            <li>
                                To schedule your repair, <router-link to="/#car-block">go to your vehicle brand </router-link> and call the listed phone number, or you can contact your preferred local dealer directly.
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
            this.$emit('loaded', true);
            document.title = "Free Takata Airbag Repair - Safeairbags.com";
        }
    }
</script>

<style scoped>
    a {
        color: white;
        text-decoration: underline;
    }
</style>
