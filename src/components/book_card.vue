<template>
    <div class="card">
        <router-link
            :to="{ name: 'CardPage' }"
        >
            <a>id/ISBN</a>
            <h1>Name of Book</h1>
            <div class="wrapp">
                <p id="authr">author</p>
                <p id="categ">category</p>
            </div>
            <div id="descr">description</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Card'
    }
</script>

<style lang="scss" scoped>
    .card {
        width: 40%;
        height: auto;
        margin: 1rem auto;
        border: 0.1rem solid blue;
        background-color: beige;
        display: flex;
        flex-direction: column;
    }
    a {
        color: green;
        margin: 0.3rem;
    }
    h1 {
        color: blue;
        font-weight: 600;    
    }
    .wrapp {
        display: flex;
        flex-direction: column;
    }
    #authr {
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
    #descr {
        width: 80%;
        height: 8rem;
        border: 1px solid black;
        margin: 0.5rem auto;
    }
</style>