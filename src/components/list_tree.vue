<template>
    <ul class="category_tree">
        <li 
            v-for="category in db.category"
            :key="index=category.id"
            class="category"
        >
            <h4>{{ category.name }}</h4>
            <div class="button_wrap">
                <button class="btn btn-primary">edit</button>
                <button @click="$delete(this.category)" class="btn btn-secondary">delete</button>
            </div>
        </li>
    </ul>
</template>

<script>
    import json from '../../database.json'

    export default {
        name: 'Tree', 
        props: {
            category: String
        },
        data() {
            return {
                db: Object.assign({}, json),
                categories: []
            } 
        },
        mounted() {
            
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
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid black;
    }
    h4 {
        margin-left: 3rem;
    }
    .button_wrap {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
    }
</style>