<template>
    <div class="app-content">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "app-content"
    }
</script>

<style lang="sass" scoped>
    .app-content
        padding-top: 64px
    @media screen and (max-width: 945px)
        .app-content
            padding-top: 48px
    @media screen and (max-width: 600px)
        .app-content
            padding-top: 56px
</style>