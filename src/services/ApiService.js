import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

export default {
    options: {
        params: {
            _limit: 48,
        }
    },
    getPosts() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/posts', this.options)
    },
    getComments() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/comments', this.options)
    },
    getAlbums() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/albums', this.options)
    },
    getPhotos() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/photos', this.options)
    },
    getTodos() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/todos', this.options)
    },
    getUsers() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/users', this.options)
    }

}