<template>
    <div id="list">
        <Card />
    </div>
</template>

<script>
    import Card from '../components/book_card.vue'

    export default {
        name: 'Booklist',
        components: {
            Card
        }
    }
</script>