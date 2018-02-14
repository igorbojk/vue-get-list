import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'



// Components
import AppHeader from './components/app-header.vue';
import AppContent from './components/app-content.vue';


// Use
Vue.use(VueMaterial)

Vue.use(VueResource);
Vue.use(VueRouter);

// Routes
const router = new VueRouter({
    routes: [
        {
            path: '/about',
            component: AppContent,
        }
    ]
});

new Vue({
    el: '#vue-app',
    components: {
        appContent: AppContent,
        appHeader: AppHeader,
    },
    data: {
        endpoint: 'https://jsonplaceholder.typicode.com/photos',
        params: {
          limit: 2,
        },
        list: [],
    },
    methods: {
        getAllPosts: function () {

            const options = {
                params: {
                    _limit: 5,
                }
            }

            this.$http.get(this.endpoint, options)
                .then(
                    (result) => {
                        console.log(result);
                        this.list = result.data
                    }
                ), function (error) {
                throw new Error(error);
            }
        },
    },
    router: router,
});

