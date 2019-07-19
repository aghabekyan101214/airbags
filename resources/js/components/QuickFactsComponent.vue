<template>
    <div class="container black-block">
        <div class="container">
            <section class="panel">
                <h3 class="sml-title">
                    Quick Facts About the
                    largest automotive safety
                    recall in US history:
                </h3>
                <ul class="quick-facts-list">
                    <li v-for="d in data">
                        <span>{{ d.text }}</span>
                        <a v-if="d.url !== null" :href="d.url" target="_blank" class="to-tweet">Tweet this</a>
                    </li>
                </ul>
            </section>
            <vehicle-search></vehicle-search>
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
                .then(response => (this.data = response.data))
        }
    }
</script>
