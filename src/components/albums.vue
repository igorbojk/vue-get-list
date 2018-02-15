<template>
    <div class="container">
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 album-card" v-for="album in albums">
                    <md-card md-with-hover >
                        <md-ripple>
                            <md-card-header>
                                <div class="md-title">{{album.title}}</div>
                                <div class="md-subhead">{{album.id}}</div>
                            </md-card-header>
                        </md-ripple>
                    </md-card>
                </div>
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
        name: "albums",
        components: {
            loader: Loader,
        },
        data: function () {
            return {
                albums: [],
                viewState: 'LOADING',
            }
        },
        methods: {
        },
        mounted: function () {
            return ApiService.getAlbums()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.albums = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style lang="sass"scoped>
    .album-card
        .md-title,
        .md-subhead
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
</style>