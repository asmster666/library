<template>
    <div class="card">
        <router-link
            :to="{ name: 'CardPage' }"
        >
            <a>id/ISBN</a>
            <h1>Name of Book</h1>
            <div class="wrapper">
                <p id="author">author</p>
                <p id="categ">category</p>
            </div>
            <span>{{ description }}</span>
        </router-link>
    </div>
</template>

<script>
    import json from '../../database.json'

    export default {
        name: 'Card',
        data() {
            return {
                data: Object.assign({}, json),
                description: "descr"
            }
        },
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 20rem;
        height: 20rem;
        border: 0.1rem solid blue;
        background-color: beige;
        display: flex;
        flex-direction: column;
    }
        a {
            color: green;
            display: flex;
            justify-content: flex-start;
            margin: 0.3rem;
        }
        h1 {
            color: blue;
            font-weight: 600;    
        }
        .wrapper {
            display: flex;
            flex-direction: column;
        }
            #author {
                height: 2rem;
                display: flex;
                justify-content: flex-start;
                margin-left: 3rem;
                margin-top: -0.5rem;
            }
            #categ {
                display: flex;
                justify-content: flex-start;
                margin-left: 6rem;
                margin-top: -0.5rem;
            }
        span {
            width: 80%;
            height: 8rem;
            border: 1px solid black;
            margin: 0.5rem auto;
        }
</style>