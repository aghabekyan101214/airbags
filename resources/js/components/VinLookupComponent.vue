<template>
    <div>
        <iframe src="https://nhtsa.gov/recalls#vin-7686"></iframe>
    </div>
</template>
<script>

    export default {
        created() {
            this.$emit("loaded");
        },
    }
</script>
<style scoped>
    iframe {
        width: 100%;
        height: 100vh;
    }
</style>
