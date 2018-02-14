import Vue from 'vue';

export default {
    getPosts() {
        return Vue.http.get('https://jsonplaceholder.typicode.com/posts')
    }
}