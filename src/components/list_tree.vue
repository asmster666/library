<template>
    <ul class="category_tree">
        <li 
            v-for="category in db.category"
            :key="category.id"
            @change="addToCategory($this)"
            class="category"
        >
            <div class="wrapper">
                <div  
                    class="title"
                    @click="showGenres($event)"
                >
                    <h3>{{ category.name }}</h3>
                </div>
                <div class="button_wrap">
                    <button @click="editField($event)" class="btn btn-outline-info">edit</button>
                    <button @click="deleteCategory($event)" class="btn btn-outline-warning">delete</button>
                </div>
            </div>
            <div class="subcategories">
                <ul>
                    <li 
                        v-for="genre in category.genres" 
                        :key="genre.id"
                        class="genre"
                    >
                        <div 
                            @click="showBook($event)"
                            class="genre_wrap"
                        >
                            <h4>{{ genre.name }}</h4>
                            <div class="button_wrap">
                                <button @click="editField($event)" class="btn btn-outline-info">edit</button>
                                <button @click="deleteCategory($event)" class="btn btn-outline-warning">delete</button>
                            </div>
                        </div>
                        <div class="books"> 
                            <ul>
                                <li
                                    v-for="book in genre.books"
                                    :key="book.id"
                                    class="book"
                                >
                                    <div
                                        @click="$router.push({ name: 'CardPage' })"
                                    >
                                        <h5>{{ book.name }}</h5>
                                        <div id="author">{{ book.author }}</div>
                                        <div id="isbn">{{ book.id }}</div>
                                        <p id="descr">{{ book.description }}</p>
                                    </div>
                                    <div class="button_wrap2">
                                        <button @click="editField($event)" class="btn btn-outline-info">edit</button>
                                        <button @click="deleteBook($event)" class="btn btn-outline-warning">delete</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</template>

<script>
    import json from '../../database.json'

    export default {
        name: 'Tree', 
        props: {
            validTrigger: {
                type: Boolean
            },
        },
        data() {
            return {
                db: Object.assign({}, json),
                card_data: {
                    id: 123,
                    name_of_book: 'bla-bla',
                    author: 'bla-bla',
                    category: 'bla-bla',
                    description: 'bla-bla'
                }
            } 
        },
        methods: {
            addToCategory(item) {
                this.subcategories.push(item);
            },

            showGenres(event) {
                let parent = event.target.parentNode.parentNode;
                let res_parent = parent.parentNode;
                let sub_cat = res_parent.lastChild;
                sub_cat.style = "display: block";
            },

            showBook(event) {
                let parent = event.target.parentNode.parentNode;
                let books = parent.lastChild;
                books.style = "display: flex";
            },

            editField(event) {
                let parent = event.target.parentNode.parentNode;
                let result = parent.firstChild;
                result.setAttribute('contenteditable', true);
                result.addEventListener('blur', (event) => {
                    result.removeAttribute('contenteditable');
                    result.removeEventListener('blur', event.target);
                });
                result.focus();
            },

            deleteCategory(event){
                let field = event.target.parentElement.parentNode.parentNode;
                field.remove();
            },

            deleteBook(event) {
                let field = event.target.parentElement.parentNode;
                console.log(field);
                field.remove();
            }
        }
    }
</script>

<style lang="scss">
    .category_tree {
        width: 95%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0.5rem;
    }
    .category {
        width: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .wrapper {
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
        border-radius: 10px;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    .subcategories {
        width: 90%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: beige;
        display: none;
    }
    .title {
        width: 80%;
    }
    h4 {
        width: 50%;
        margin-top: 1rem;
        margin-left: 2rem;
        text-align: left;
    }
    .button_wrap {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
    }
    h3 {
        text-transform: uppercase;
        margin-left: 2rem;
        text-align: left;
    }
    .genre {
        margin-left: -2.5rem;
        list-style: none;
        border: 1px solid black;
        border-radius: 10px;
    }
    .genre_wrap {
        display: flex;
        justify-content: space-between;
    }
    .active {
        display: block;
    }
    .books {
        width: 90%;
        margin-top: 2rem;
        height: auto;
        display: flex;
        background-color: pink;
        border-radius: 10px;
        padding-bottom: 1rem;
        display: none;
    }
    .book {
        width: 100%;
        margin-left: -1.2rem;
        margin-top: 1rem;
        list-style: none;
        padding: 1rem;
        display: flex;
        border: 2px solid beige;
        border-radius: 10px;
    }
    h5 {
        font-weight: bold;
        text-align: left;
        margin-top: 1rem;
    }
    #author {
        text-align: left;
        font-family: cursive;
    }
    #isbn {
        display: none;
    }
    #descr {
        overflow-y: scroll;
        overflow: hidden;
        height: 4.5rem;
    }
    .button_wrap2 {
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        margin: 0.5rem;
    }
</style>