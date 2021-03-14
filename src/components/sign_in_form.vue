<template>
    <div class="form">
        <label class="login">
            Login 
            <input 
                type="email" 
                :value="email" 
                @input="email=$event.target.value"
                @change="validateLogin"
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
            @click="validateForm($router.push({ name: 'Booklist' }))"
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
                isSubmit: false,
                validTriggerdata: false,
            }
        },
        methods: {
            validateLogin() {
                let field_login = document.querySelector(".inp1");
                let login_value = field_login.value;
                if(login_value === "admin") {
                    console.log("hey admin");
                }
            },
            validateForm(action) {
                let field_login = document.querySelector(".inp1");
                let login_value = field_login.value;
                let field_pasw = document.querySelector(".inp2");
                let pasw_value = field_pasw.value;
                if(login_value === "admin" && pasw_value === "admin1234") {
                    console.log(pasw_value);
                    if(this.validTriggerdata) {
                        action;
                    }
                } 

                if(pasw_value < 3) {
                    field_login.style = 'background-color: red';
                    field_pasw.style = 'background-color: red';
                    console.log("Please write correct login/password");
                }
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