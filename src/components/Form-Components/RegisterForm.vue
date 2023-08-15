<template>
    <form action="#" @submit="submit">
        <FormBase heading="Register" 
        message_1="Already registered?" message_2="Login here."
        :valid="fields_valid"
        @change-view="$emit('change-view')">
            <FormInput type="text" id="register-email" label="Email" :data="email">
                <template #logo-svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                </template>
            </FormInput>
            <FormInput type="password" id="register-pass" label="Password" :data="pass">
                <template #logo-svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                </template>
            </FormInput>
            <FormInput type="password" id="register-repass" label="Retype Password" :data="re_pass" :pass="pass">
                <template #logo-svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                </template>
            </FormInput>
        </FormBase>
    </form>
</template>

<script setup lang="ts">
import FormInput from '@/components/Form-Components/FormInput.vue';
import FormBase from './FormBase.vue';


import { ref, reactive } from 'vue';
import { computed } from 'vue';


const email = reactive({data: ''});
const pass = reactive({data: ''});
const re_pass = reactive({data: ''});

const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const fields_valid = reactive({
    data: computed(()=>{
        return email.data.search(regex_email) !== -1 && email.data!=="" && pass.data.length>=8 && re_pass.data === pass.data
    })
})

function submit(e:Event){
    e.preventDefault();

}
</script>

<style  scoped>
svg{
    fill: var(--color-text);
}

</style>