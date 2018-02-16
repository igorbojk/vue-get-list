<template>
    <div class="app-header">
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button show-only-small-dev" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Vue App</span>

            <div class="md-toolbar-section-end md-small-hide">
                <router-link :to="{name: 'posts'}" >
                    <md-button>
                        Posts
                    </md-button>
                </router-link>
                <router-link :to="{name: 'comments'}">
                    <md-button>
                        Comments
                    </md-button>
                </router-link>
                <router-link :to="{name: 'albums'}">
                    <md-button>
                        Albums
                    </md-button>
                </router-link>
                <router-link :to="{name: 'photos'}">
                    <md-button>
                        Photos
                    </md-button>
                </router-link>
                <router-link :to="{name: 'todos'}">
                    <md-button>
                        Todos
                    </md-button>
                </router-link>
                <router-link :to="{name: 'users'}">
                    <md-button>
                        Users
                    </md-button>
                </router-link>
            </div>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" class="app-drawer">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">My Vue App</span>
            </md-toolbar>

            <md-list>
                <md-list-item @click="closeNav()">
                    <router-link to="posts" >Posts</router-link>
                </md-list-item>

                <md-list-item @click="closeNav()">
                    <router-link to="comments">Comments</router-link>
                </md-list-item>

                <md-list-item @click="closeNav()">
                    <router-link to="albums">Albums</router-link>
                </md-list-item>

                <md-list-item @click="closeNav()">
                    <router-link to="photos">Photos</router-link>
                </md-list-item>

                <md-list-item @click="closeNav()">
                    <router-link to="todos">Todos</router-link>
                </md-list-item>

                <md-list-item @click="closeNav()">
                    <router-link to="users">Users</router-link>
                </md-list-item>

            </md-list>
        </md-drawer>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        methods: {
            closeNav: function () {
                this.showNavigation = false;
            }
        },
        data: () => ({
            showNavigation: false,
        })
    }

</script>

<style lang="sass" scoped>
    .app-header
        position: fixed
        left: 0
        right: 0
        top: 0
        z-index: 997
        a
            color: inherit
            text-decoration: none
        .md-drawer
            background: white
            position: fixed
            a
                width: 100%
                height: 48px
                line-height: 48px
        .router-link-active
            color: #ff5252
            button
                font-weight: 600
</style>