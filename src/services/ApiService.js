import Vue from 'vue';

export default {
    getPosts() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/posts')
    },
    getComments() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/comments')
    },
    getAlbums() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/albums')
    },
    getPhotos() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/photos')
    },
    getTodos() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/todos')
    },
    getUsers() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/users')
    }

}