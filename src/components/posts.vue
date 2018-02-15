<template>
    <div class="container">
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">

            <div class="md-layout md-gutter ">
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
                <div v-if="!filteredPosts.length" class="md-layout md-gutter md-alignment-center">
                    <md-empty-state
                        md-icon="not_interested"
                        md-label="No posts"
                        md-description="Try search another post name">
                    </md-empty-state>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 post-card" v-for="post in filteredPosts">
                    <md-card md-with-hover >
                        <md-ripple>
                            <md-card-header>
                                <div class="md-title">{{post.title}}</div>
                                <div class="md-subhead">{{post.id}}</div>
                            </md-card-header>

                            <md-card-content>
                                <div class="content">
                                    {{post.body}}
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
        name: "posts",
        components: {
            loader: Loader,
        },
        data: function () {
          return {
              posts: [],
              viewState: 'LOADING',
              query: '',
          }
        },
        methods: {
        },
        computed: {
            filteredPosts: function () {
                return this.posts.filter(
                    (post) => {
                        return post.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    }
                );
            }
        },
        mounted: function () {
            return ApiService.getPosts()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.posts = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style lang="sass" scoped>
    .post-card
        .md-title
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
        .md-subhead
        .content
            height: 64px
            overflow: hidden
</style>