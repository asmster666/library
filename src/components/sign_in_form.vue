<template>
    <div class="form">
        <label class="login">
            Login 
            <input 
                type="email" 
                :value="email" 
                class="inp1"
            />
        </label> <br>
        <label class="password">
            Password 
            <input 
                type="password"
                :value="password" 
                class="inp2"
            />
        </label>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                email: 'colfsdvawe@gmail.com',
                password: 'Eve301'
            }
        },
    }
</script>

<style lang="scss">
    .form {
        width: 20rem;
        height: 10rem;
        border: 0.1rem solid black;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 2rem;
    }
        label {
            width: 80%;
            display: flex;
            justify-content: space-between;
        }
</style>