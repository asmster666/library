<template>
    <div class="list">
        <input 
            type="search"
            @input="search=$event.target.value"
            placeholder="start type the name of book, category, genre or etc..."
        >
        <Tree />
    </div>
</template>

<script>
    import Tree from '../components/list_tree.vue'

    export default {
        name: 'Booklist',
        data() {
            return {
                search: '',
                categories: []
            }
        },
        computed: {
            getFilteredList() {
                return this.categories.filter(category => category.toLowerCase().includes(this.search.toLowerCase()))
            }
        },
        components: {
            Tree
        }
    }
</script>

<style lang="scss" scoped>
    .list {
        width: 95%;
        height: auto;
        display: flex;
        flex-direction: column;
        margin-left: 2rem;
    }
        input {
            width: 80%;
            margin-bottom: 0.5rem;
            height: 3rem;
        }
</style>