<template>
    <div>
        <md-button class="md-icon-button" @click="back()">
            <md-icon >arrow_back</md-icon>
        </md-button>
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <div class="md-layout-item md-size-100 album-card">
                <md-card >
                    <md-card-header>
                        <div class="md-title">Title: {{album.title}}</div>
                        <div class="md-subhead">Id: {{album.id}}</div>
                    </md-card-header>
                </md-card>
            </div>
        </div>
        <div v-else-if="viewState == 'EMPTY_STATE'">
            <p>EMPTY_STATE</p>
        </div>
    </div>
</template>

<script>
    import ApiService from '../services/ApiService.js';
    import Loader from './loader.vue';

    export default {
        name: "single-album",
        components: {
            loader: Loader,
        },
        methods: {
            back: function () {
                window.history.back();
            }
        },
        data: function () {
            return {
                viewState: 'LOADING',
                album: {},
            }
        },
        created: function () {
            ApiService.getSingleAlbum(this.$route.params.id)
                .then(
                    (result) => {
                        setTimeout(() => {
                            if(!result.data){
                                this.viewState = 'EMPTY_STATE';
                                return;
                            }
                            this.album = result.data;
                            this.viewState = 'RESULT';
                        },1000);
                    },
                    (error) => {
                        throw new Error(error);
                    }
                );
        }
    }
</script>

<style lang="sass" scoped>
    .album-card
        .md-card
            box-shadow: none
            background: none
</style>