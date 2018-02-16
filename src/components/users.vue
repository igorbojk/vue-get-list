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
                <div v-if="!filteredUsers.length" class="md-layout md-gutter md-alignment-center">
                    <md-empty-state
                            md-icon="not_interested"
                            md-label="No Users"
                            md-description="Try search another user name">
                    </md-empty-state>
                </div>
                <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100 user-card" v-for="user in filteredUsers">
                    <router-link :to="{name: 'singleUser', params: {id: user.id} }">
                        <md-card md-with-hover >
                            <md-toolbar :md-elevation="1" class="md-accent">
                                <div class="md-title">{{user.name}}</div>
                                <div class="md-subhead"><strong>Username:</strong> {{user.username}}</div>
                                <div class="md-subhead"><strong>Email:</strong> {{user.email}}</div>
                            </md-toolbar>
                            <md-list>
                                <div class="md-subhead"><strong>Phone:</strong> {{user.phone}}</div>
                                <div class="md-subhead"><strong>Website:</strong> {{user.website}}</div>
                                <md-divider></md-divider>
                                <md-subheader>Address</md-subheader>
                                <md-list-item v-for="(key,value) in user.address" v-if="value != 'geo'">
                                    <div class="md-list-item-text">
                                        <span>{{key}}</span>
                                        <span class="md-subhead">{{value}}</span>
                                    </div>
                                </md-list-item>

                                <md-divider></md-divider>
                                <md-subheader>Company</md-subheader>

                                <md-list-item v-for="(key,value) in user.company">
                                    <div class="md-list-item-text">
                                        <span>{{key}}</span>
                                        <span class="md-subhead">{{value}}</span>
                                    </div>
                                </md-list-item>

                            </md-list>
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
        name: "users",
        components: {
            loader: Loader,
        },
        data: function () {
            return {
                users: [],
                viewState: 'LOADING',
                query: '',
            }
        },
        methods: {
        },
        computed: {
            filteredUsers: function () {
                return this.users.filter((user) => {
                    return user.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                });
            }
        },
        mounted: function () {
            return ApiService.getUsers()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.users = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style lang="sass" scoped>
    .user-card
        a
            text-decoration: none
            color: inherit
        .md-title,
        .md-subhead
            margin-left: 0
            padding-left: 8px
            white-space: nowrap
            text-overflow: ellipsis
            overflow: hidden
            width: 100%
            box-sizing: border-box
        .md-toolbar
            padding-bottom: 4px
        .md-list-item-text
            .md-subhead
                padding: 0
        .md-divider
            margin-top: 4px

</style>