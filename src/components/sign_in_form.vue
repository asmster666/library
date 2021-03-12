<template>
    <div class="form">
        <label class="login">
            Login 
            <input 
                type="email" 
                :value="email" 
                @input="email=$event.target.value"
                class="inp1"
            />
        </label> <br>
        <label class="password">
            Password 
            <input 
                type="password"
                :value="password" 
                @input="password=$event.target.value"
                class="inp2"
            />
        </label>
        <button  
            class="btn btn-primary" 
            @click="$router.push({ name: 'Booklist' })"
        >
            Sign in
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                email: '',
                password: '',
                isSubmit: false
            }
        },
        watch: {
            email: function(email) {
                this.email = email
            },
            password: function(password) {
                this.password = password
            },
            isSubmitted(email, password) {
                if(email && password) {
                    this.isSubmit = true
                }
            }
        }
    }
</script>

<style lang="scss">
    .form {
        width: 25rem;
        height: 14rem;
        border: 0.1rem solid black;
        border-radius: 20px;
        background-color: lightblue;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-left: 2rem;
        margin: 5rem auto;
    }
        label {
            width: 80%;
            display: flex;
            justify-content: space-between;
        }
        button {
            margin: 1rem auto;
        }
</style>