<template>
    <div class="container-screen">
        <header>
            <NavBar class="container"/>
        </header>
        <main>
            <div class="container">
                <div class="form-container">
                    <div class="form">
                        <LoginForm
                        @change-view="changeView"
                        v-if="login_view" />
                        <RegisterForm
                        @change-view="changeView"
                        v-else />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import LoginForm from '@/components/Form-Components/LoginForm.vue';
import RegisterForm from '@/components/Form-Components/RegisterForm.vue';
import FormBase from '@/components/Form-Components/FormBase.vue';


import { ref } from 'vue';

let login_view = ref(true);

function changeView(){
    login_view.value = !login_view.value
}
</script>

<style scoped>
    ::placeholder{
        color: var(--color-text);
        opacity: 0.5;
        font-size: inherit;
    }
    .container-screen{
        min-height: 100vh;
    }
    .container{
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem;

        /* border: 1px solid red; */
    }
    img{
        display: block;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    .form-container{
        display: grid;
        max-width: 700px;
        margin: 0 auto;
        /* grid-template-columns: 1fr auto; */
    }
    .form{
        border-radius: 1em;
        border: 1px solid var(--color-text);
        padding: 2em;
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.098);
    }
    main{
        /* margin-top: 1em; */
    }
    
    
</style>