<template>
    <div class="page-container md-layout-column">
        <md-toolbar class="md-primary">
            <md-button class="md-icon-button show-only-small-dev" @click="showNavigation = true">
                <md-icon>menu</md-icon>
            </md-button>
            <span class="md-title">My Title</span>

            <div class="md-toolbar-section-end md-small-hide">
                <md-button >Posts</md-button>
                <md-button >Comments</md-button>
                <md-button >Albums</md-button>
                <md-button >Photos</md-button>
                <md-button >Todos</md-button>
                <md-button >Users</md-button>


            </div>
        </md-toolbar>

        <md-drawer :md-active.sync="showNavigation" class="app-drawer">
            <md-toolbar class="md-transparent" md-elevation="0">
                <span class="md-title">My App name</span>
            </md-toolbar>

            <md-list>
                <md-list-item>
                    <span class="md-list-item-text">Posts</span>
                </md-list-item>

                <md-list-item>
                    <span class="md-list-item-text">Comments</span>
                </md-list-item>

                <md-list-item>
                    <span class="md-list-item-text">Albums</span>
                </md-list-item>

                <md-list-item>
                    <span class="md-list-item-text">Photos</span>
                </md-list-item>

                <md-list-item>
                    <span class="md-list-item-text">Todos</span>
                </md-list-item>

                <md-list-item>
                    <span class="md-list-item-text">Users</span>
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

<style scoped>
    .app-drawer{
        background: white;
    }

</style>