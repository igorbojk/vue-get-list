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
                <div v-if="!filteredPhotos.length" class="md-layout md-gutter md-alignment-center">
                    <md-empty-state
                            md-icon="not_interested"
                            md-label="No photos"
                            md-description="Try search another photo name">
                    </md-empty-state>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 photo-card" v-for="photo in filteredPhotos">
                    <md-card v-bind:style="{backgroundImage: `url('${photo.thumbnailUrl}')`}" class="card-with-bg">
                        <md-card-header>
                            <div class="md-title">{{photo.title}}</div>
                            <div class="md-subhead">{{photo.id}}</div>
                        </md-card-header>
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
        name: "photos",
        components: {
            loader: Loader,
        },
        data: function () {
            return {
                photos: [],
                viewState: 'LOADING',
                query: '',
            }
        },
        methods: {
        },
        computed: {
            filteredPhotos: function () {
                return this.photos.filter((photo) => {
                    return photo.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                });
            }
        },
        mounted: function () {
            return ApiService.getPhotos()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.photos = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style lang="sass" scoped>
    .photo-card
        .card-with-bg
            background-repeat: no-repeat
            background-position: center
            background-size: cover
        .md-title,
        .md-subhead
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden

</style>