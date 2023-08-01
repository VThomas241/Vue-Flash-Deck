<template>
    <form action="#" @submit="submit">
        <h2>Register</h2>
        <div class="form-input">
            <label for="email">
                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
            </label>
            <input v-model="email" placeholder="john@gmail.com" id="email" type="text" name="email">
        </div>
        <div class="form-input">
            <label for="password">
                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            </label>
            <input v-model="pass" placeholder="********" id="password" type="password" name="password">
        </div>
        <div class="form-input">
            <label for="retype-password">
                <svg xmlns="http://www.w3.org/2000/svg" height="1rem" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
            </label>
            <input v-model="re_pass" placeholder="********" id="retype-password" type="password" name="retype-password">
        </div>
        <SubmitButton />
        <ViewChangeButton 
        @change-view="$emit('change-view')"
        message_1="Already registered?"
        message_2="Login here."
        />
    </form>
</template>

<script setup lang="ts">
import SubmitButton from './SubmitButton.vue';
import ViewChangeButton from './ViewChangeButton.vue';

import { ref } from 'vue';

let email = ref('');
let pass = ref('');
let re_pass = ref('');

function checkPass(){

}

function equalPass(){
    if (pass.value === re_pass.value){return true}
    else {return false}
}

function submit(e:Event){
    e.preventDefault();
    
    if (equalPass()){console.log("YAY")}
    else {console.log("NOOOO")}
}
</script>

<style  scoped>
.form-input{
        display: flex;
        /* flex-wrap: wrap; */
        justify-content: space-between;
        align-items: center;
        margin: 1.5em 0;

    }
.form-input * {
    color: var(--color-text);

}
.form-input h4{
    flex-basis: 100%;
}
input{
    flex-grow: 1;
    padding: 5px;
    width: 100%;
    background: 0;
    border: 0;
    border-bottom: 1px solid;
    /* border-radius: 5px; */
    color: var(--quartary);
}

input:focus-visible{
    outline: 0;
    /* outline: 1px solid white; */
}
label{
    color: var(--quartary);
    display: flex;
    width: 1em;
    margin-right: 1em;
    align-items: center;
}
label svg{
    fill: var(--color-text);
}

.form-input:nth-child(4) svg{
    fill: rgb(165, 162, 170) !important;
}
</style>