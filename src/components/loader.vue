<template>
    <div class="loader">
        <md-progress-spinner class="md-accent" md-mode="indeterminate"></md-progress-spinner>
    </div>
</template>

<script>

    export default {
        name: "loader"
    }
</script>

<style lang="sass" scoped>
    .loader
        text-align: center
        margin: 24px
</style>