<template>
    <div>
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <ul>
                <li v-for="post in posts">
                    {{ post }}
                </li>
            </ul>
        </div>
        <div v-else-if="viewState == 'EMPTY_STATE'">
            <p>EMPTY_STATE</p>
        </div>
    </div>

</template>

<script>
    import ApiService from '../services/ApiService.js';
    import Loader from './loader.vue';

    export default {
        name: "posts",
        components: {
            loader: Loader,
        },
        data: function () {
          return {
              posts: [],
              viewState: 'LOADING',
          }
        },
        methods: {
        },
        mounted: function () {
            return ApiService.getPosts()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.posts = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style lang="sass" scoped>
</style>