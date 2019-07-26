<template>
    <div class="col-sm-5">
        <div class="gradient-bg search-banner">
            <p>SEE IF YOUR VEHICLE IS ON THE LIST</p>
            <router-link to="/vin-lookup">
                <button class="btn btn-primary">SEARCH BY VIN OR LICENSE PLATE</button>
            </router-link>
            <router-link to="/#car-block">
                <button type="button" class="btn btn-primary">SEARCH BY VEHICLE BRAND</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

