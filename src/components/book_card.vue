<template>
    <div class="card">
        <router-link
            :to="{ name: 'CardPage' }"
        >
            <div :card_data="card_data">
                <a>id/ISBN{{cardData.id}}</a>
                <h1>Name of Book{{cardData.nameOfBook}}</h1>
                <div class="wrapp">
                    <p id="authr">author{{cardData.author}}</p>
                    <p id="categ">category{{cardData.category}}</p>
                </div>
                <div id="descr">description{{cardData.description}}</div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            cardData: {
                id: {
                    type: Number
                },
                nameOfBook: {
                    type: String
                },
                author: {
                    type: String
                },
                category: {
                    type: String
                },
                description: {
                    type: String
                },
            }
        },
        methods: {
            show() {
                console.log(this.card_data);
            }
        }
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