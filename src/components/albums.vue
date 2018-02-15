<template>
    <div class="container">
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-size-100">
                    <md-card>
                        <div class="search-block">
                            <md-field md-clearable>
                                <md-icon>search</md-icon>
                                <md-input v-model="query" placeholder="Search" autofocus ></md-input>
                            </md-field>
                        </div>
                    </md-card>
                </div>
                <div v-if="!filteredAlbums.length" class="md-layout md-gutter md-alignment-center">
                    <md-empty-state
                            md-icon="not_interested"
                            md-label="No album"
                            md-description="Try search another album name">
                    </md-empty-state>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 album-card" v-for="album in filteredAlbums">
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
                query: '',
            }
        },
        methods: {
        },
        computed: {
            filteredAlbums: function () {
                return this.albums.filter(
                    (album) => {
                        return album.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    }
                )
            }
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