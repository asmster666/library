<template>
    <div class="tree">
        <ul>
            <li 
                v-for="(category, index) in categories"
                :key="index"
                class="category"
            >
                <p>{{ category }}</p>
                <div class="button_wrap">
                    <button class="btn btn-primary">edit</button>
                    <button class="btn btn-secondary">delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'Tree',
        data() {
            return {
                category: "Category",
            }
        },
        computed: {
            changeColor() {
                return 'color: blue'
            }
        }
    }
</script>

<style lang="scss">
    .tree {
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
    .button_wrap {
        width: 20%;
        display: flex;
        justify-content: space-evenly;
    }
</style>