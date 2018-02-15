<template>
    <div class="container">
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 comment-card" v-for="comment in comments">
                    <md-card md-with-hover >
                        <md-ripple>
                            <md-card-header>
                                <div class="md-title">{{comment.name}}</div>
                                <div class="md-subhead">{{comment.email}}</div>
                            </md-card-header>

                            <md-card-content>
                                <div class="content">
                                    {{comment.body}}
                                </div>
                            </md-card-content>
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
        name: "comments",
        components: {
            loader: Loader,
        },
        data: function () {
            return {
                comments: [],
                viewState: 'LOADING',
            }
        },
        methods: {
        },
        mounted: function () {
            return ApiService.getComments()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.comments = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style lang="sass" scoped>
    .comment-card
        .md-title,
        .md-subhead
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
        .content
            height: 64px
            overflow: hidden
            margin-bottom: 4px
</style>