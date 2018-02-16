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
    import SinglePost from './components/single-post.vue';
    import Comments from './components/comments.vue';
    import SingleComment from './components/single-comment.vue'
    import Albums from './components/albums.vue';
    import SingleAlbum from './components/single-album.vue'
    import Photos from './components/photos.vue';
    import Todos from './components/todos.vue';
    import Users from './components/users.vue';
    import SingleUser from './components/single-user.vue'


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
                name: 'posts',
                path: '/posts',
                component: Posts,

            },
            {
                name: 'singlePost',
                path: '/posts/:id',
                component: SinglePost,

            },
            {
                name: 'comments',
                path: '/comments',
                component: Comments,
            },
            {
                name: 'singleComment',
                path: '/comments/:id',
                component: SingleComment,
            },
            {
                name: 'albums',
                path: '/albums',
                component: Albums,
            },
            {
                name: 'singleAlbum',
                path: '/albums/:id',
                component: SingleAlbum,
            },
            {
                name: 'photos',
                path: '/photos',
                component: Photos,
            },
            {
                name: 'todos',
                path: '/todos',
                component: Todos,
            },
            {
                name: 'users',
                path: '/users',
                component: Users,
            },
            {
                name: 'singleUser',
                path: '/users/:id',
                component: SingleUser,
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