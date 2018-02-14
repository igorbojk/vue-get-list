import Vue from 'vue';
import VueResource from 'vue-resource';
import Hello from './components/hello.vue';

Vue.use(VueResource);

new Vue({
    el: '#vue-app',
    components: {
        hello: Hello,
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
            this.$http.get(this.endpoint, this.params)
                .then(
                    (result) => {
                        console.log(result);
                        this.list = result.body
                    }
                ), function (error) {
                throw new Error(error);
            }
        }
    },
    created: function () {
        this.getAllPosts();
    }
});