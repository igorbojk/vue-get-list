<template>
    <div class="app-header">
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button show-only-small-dev" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Title</span>

            <div class="md-toolbar-section-end md-small-hide">
                <md-button>
                    <router-link to="posts" router-link-active="posts">Posts</router-link>
                </md-button>
                <md-button>
                    <router-link to="comments">Comments</router-link>
                </md-button>
                <md-button>
                    <router-link to="albums">Albums</router-link>
                </md-button>
                <md-button>
                    <router-link to="photos">Photos</router-link>
                </md-button>
                <md-button>
                    <router-link to="todos">Todos</router-link>
                </md-button>
                <md-button>
                    <router-link to="users">Users</router-link>
                </md-button>
            </div>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" class="app-drawer">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">My App name</span>
            </md-toolbar>

            <md-list>
                <md-list-item >
                    <router-link to="posts">Posts</router-link>
                </md-list-item>

                <md-list-item>
                    <router-link to="comments">Comments</router-link>
                </md-list-item>

                <md-list-item>
                    <router-link to="albums">Albums</router-link>
                </md-list-item>

                <md-list-item>
                    <router-link to="photos">Photos</router-link>
                </md-list-item>

                <md-list-item>
                    <router-link to="todos">Todos</router-link>
                </md-list-item>

                <md-list-item>
                    <router-link to="sers">Users</router-link>
                </md-list-item>

            </md-list>
        </md-drawer>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        methods: {
        },
        data: () => ({
            showNavigation: false,
            showSidepanel: false
        })
    }

</script>

<style lang="sass" scoped>
    .app-header
        a
            color: inherit
            text-decoration: none
        .md-drawer
            background: white
        .router-link-active
            color: #ff5252
</style>