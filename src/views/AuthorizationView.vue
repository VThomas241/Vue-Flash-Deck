<template>
    <div class="container-screen">
        <header>
            <NavBar class="container"/>
        </header>
        <main>
            <div class="container">
                <div class="form-container">
                    <LoginForm 
                    @change-view="changeView"
                    v-if="login_view" />
                    <RegisterForm 
                    @change-view="changeView"
                    v-else />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import LoginForm from '@/components/LoginForm.vue';
import RegisterForm from '@/components/RegisterForm.vue';

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
    .form-container{
        border-radius: 1em;
        background-color: var(--color-background-soft);
        padding: 2em;
        max-width: 500px;
        margin: 0 auto;
    }
    main{
        margin-top: 8em;
    }
    
    
</style>