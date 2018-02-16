<template>
    <div class="container">
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <div class="md-layout md-gutter">
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
                <div v-if="!filteredComments.length" class="md-layout md-gutter md-alignment-center">
                    <md-empty-state
                            md-icon="not_interested"
                            md-label="No comments"
                            md-description="Try search another comment name">
                    </md-empty-state>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 comment-card" v-for="comment in filteredComments">
                    <router-link :to="{name: 'singleComment', params: {id: comment.id} }">
                        <md-card md-with-hover>
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
                    </router-link>
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
                query: '',
            }
        },
        methods: {
        },
        computed: {
            filteredComments: function () {
                return this.comments.filter(
                    (comment) => {
                        return comment.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    }
                );
            }
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
        a
            text-decoration: none
            color: inherit
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