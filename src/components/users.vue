<template>
    <div>
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <ul>
                <li v-for="user in users">
                    {{ user }}
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
        name: "users",
        components: {
            loader: Loader,
        },
        data: function () {
            return {
                users: [],
                viewState: 'LOADING',
            }
        },
        methods: {
        },
        mounted: function () {
            return ApiService.getUsers()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.users = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style scoped>

</style>