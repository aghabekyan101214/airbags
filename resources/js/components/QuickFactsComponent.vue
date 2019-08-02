<template>

    <div class="container black-block">
        <div class="container">
            <div class="row">
                <div class="panel col-12">
                    <h1 class="sml-title">
                        Quick Facts About the
                        largest automotive safety
                        recall in US history:
                    </h1>
                </div>
                <div class="col-sm-7">
                    <section class="panel">
                        <ul class="quick-facts-list">
                            <li v-for="d in data">
                                <span v-if="lang === 'en'">{{ d.text_en}}</span>
                                <span v-else-if="lang === 'es'">{{ d.text_es}}</span>
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
        props: ['lang'],
        data: function() {
            return {
                data: "",
            }

        },
        mounted () {
            axios.get('/get-quick-facts')
                .then((response) => {
                    this.data = response.data;
                    this.$emit('loaded', true)
                });
        },
        created() {
            document.title = "Quick Facts About the Takata Airbag Recall";
            let desc = "More than 41 million vehicles are affected by the Takata Airbag Recall, making it the largest auto recall in US history. Learn and share quick facts about this important recall.";
            document.querySelector('meta[name="description"]').setAttribute("content", desc);
        }
    }
</script>
