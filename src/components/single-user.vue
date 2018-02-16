<template>
    <div>

        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <div class="md-layout-item md-size-100 user-card">
                <md-card>
                    <md-toolbar :md-elevation="1" class="md-accent">
                        <md-button class="md-icon-button" @click="back()">
                            <md-icon >arrow_back</md-icon>
                        </md-button>
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
        name: "single-user",
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
                user: {},
            }
        },
        created: function () {
            ApiService.getSingleUser(this.$route.params.id)
                .then(
                    (result) => {
                        setTimeout(() => {
                            if(!result.data){
                                this.viewState = 'EMPTY_STATE';
                                return;
                            }
                            this.user = result.data;
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
    .user-card
        .md-card
            box-shadow: none
            background: none
        .md-list
            background: none
            & > .md-subhead
                padding-left: 16px
        .md-subhead
            display: block
            flex: 1 1 100%
        .md-divider
            margin-top: 8px

</style>