<template>
    <div class="container">
        <div v-if="viewState == 'LOADING'">
            <loader></loader>
        </div>
        <div v-else-if="viewState == 'RESULT'">
            <div class="md-layout md-gutter md-alignment-center">
                <div class="md-layout-item md-size-100">
                    <md-card>
                        <div class="search-block">
                            <md-field md-clearable>
                                <md-icon>search</md-icon>
                                <md-input v-model="query" placeholder="Search" autofocus ></md-input>
                            </md-field>
                        </div>
                    </md-card>
                </div>
                <div v-if="!filteredTodos.length" class="md-layout md-gutter md-alignment-center">
                    <md-empty-state
                            md-icon="not_interested"
                            md-label="No todos"
                            md-description="Try search another todos name">
                    </md-empty-state>
                </div>
                <div class="md-layout-item md-size-100 todo-card" v-for="item in filteredTodos">
                    <md-card v-bind:class="{'md-primary': item.completed}">
                        <md-card-header>
                            <div class="md-title">{{item.title}}</div>
                            <md-checkbox v-model="item.completed">Completed</md-checkbox>
                        </md-card-header>
                    </md-card>
                </div>
            </div>
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
        name: "todos",
        components: {
            loader: Loader,
        },
        data: function () {
            return {
                todos: [],
                viewState: 'LOADING',
                query: '',
            }
        },
        methods: {
        },
        computed: {
            filteredTodos: function () {
                return this.todos.filter((item) => {
                    return item.title.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                })
            }
        },
        mounted: function () {
            return ApiService.getTodos()
                .then(response => {
                    setTimeout(() => {
                        if(!response.data.length){
                            this.viewState = 'EMPTY_STATE';
                            return;
                        }
                        this.todos = response.data;
                        this.viewState = 'RESULT';
                    },1000);
                })
        }
    }
</script>

<style lang="sass" scoped>
    .todo-card
        .md-card-header
            display: flex
            justify-content: space-between
</style>