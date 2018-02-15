<template>
    <div>
        <app-header></app-header>
        <app-content></app-content>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    import VueMaterial from 'vue-material';
    import 'vue-material/dist/vue-material.min.css';
    import 'vue-material/dist/theme/default.css'




    // Components
    import AppHeader from './components/app-header.vue';
    import AppContent from './components/app-content.vue';
    import Posts from './components/posts.vue';
    import Comments from './components/comments.vue';
    import Albums from './components/albums.vue';
    import Photos from './components/photos.vue';
    import Todos from './components/todos.vue';
    import Users from './components/users.vue';


    // Use
    Vue.use(VueMaterial);
    Vue.use(VueRouter);

    // Routes
    const router = new VueRouter({
        routes: [
            {
                path: '/',
                redirect: '/posts',
            },
            {
                path: '/posts',
                component: Posts,
            },
            {
                path: '/comments',
                component: Comments,
            },
            {
                path: '/albums',
                component: Albums,
            },
            {
                path: '/photos',
                component: Photos,
            },
            {
                path: '/todos',
                component: Todos,
            },
            {
                path: '/users',
                component: Users,
            }
        ]
    });

    export default {
        name: "app",
        components: {
            appContent: AppContent,
            appHeader: AppHeader,
            posts: Posts,
            comments: Comments,
            albums: Albums,
            photos: Photos,
            todos: Todos,
            users: Users,
        },
        data: function() {
            return {
            }
        },
        methods: {
        },
        router: router,
    }
</script>

<style scoped>

</style>