<template>

    <div class="container black-block">
        <div class="container">
            <div class="row">
                <div class="panel col-12">
                    <h3 class="sml-title">
                        Quick Facts About the
                        largest automotive safety
                        recall in US history:
                    </h3>
                </div>
                <div class="col-sm-7">
                    <section class="panel">
                        <ul class="quick-facts-list">
                            <li v-for="d in data">
                                <span>{{ d.text }}</span>
                                <a v-if="d.url !== null" :href="d.url" target="_blank" class="to-tweet">Tweet this</a>
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
        data: function() {
            return {
                data: ""
            }

        },
        mounted () {
            axios.get('/get-quick-facts')
                .then((response) => {
                    this.data = response.data;
                    this.$emit('loaded', true)
                });
        }
    }
</script>
