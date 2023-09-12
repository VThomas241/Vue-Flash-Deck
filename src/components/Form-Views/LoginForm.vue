<template>
    <form action="#" @submit="submit">
        <FormBase 
        heading="Login" 
        message_1="Not registered?" message_2="Register here."
        :loading="login_loading"
        :error="error"
        :valid="fields_valid"
        @change-view="$emit('change-view')">

            <template #form_inputs>
                
                <FormInput type="text" id="login-email" label="Email" :data="email">
                    <template #logo-svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/></svg>
                    </template>
                </FormInput>

                <FormInput type="password" id="login-pass" label="Password" :data="pass">
                    <template #logo-svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 0 448 512"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>
                    </template>
                </FormInput>
                
            </template>

            <template #invalid_details_error>
                <ErrorMessage :message="error_message"/>
            </template>
        </FormBase>
    </form>
</template>

<script setup lang="ts">

import FormInput from '@/components/Form-Components/FormInput.vue'
import FormBase from '@/components/Form-Components/FormBase.vue';
import ErrorMessage from '../Text-Components/ErrorMessage.vue';

import { reactive, ref } from 'vue';
import { computed } from 'vue';
import router from '@/router';
import { useStore } from '@/stores/store'

defineEmits(['change-view'])

const email = reactive({data: 'vivek@gmail.com'});
const pass = reactive({data: 'kukudu2001'});
const login_loading = ref({data: false})
const error = ref(false)
const error_message = ref('')

const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const fields_valid = reactive({data: computed(()=>{
    return !login_loading.value.data && email.data.search(regex_email) !== -1 && email.data!=="" && pass.data.length>=8
})})


async function loginUser(payload:Object){
    let response: null | Response = null
    try {
        response = await fetch('http://127.0.0.1:5000/login/',{
            method: 'POST',
            mode:'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
    }catch (e) {
        console.log(e)
        error.value = true
        error_message.value = 'A network error occurred'
    }
        
    return response
}

async function submit(e:Event){
    e.preventDefault();
    if (!fields_valid) return

    error.value = false
    login_loading.value.data = true
    let res = null;
    
    const payload = {
        email: email.data,
        password: pass.data
    }

    try {
        res = await loginUser(payload)
    } catch (error) {
        console.log(error)
    }finally{
        login_loading.value.data = false
    }

    if (!res) return

    const data = await res.json()

    if (res.status === 200){
        localStorage.setItem('token',data.token)
        localStorage.setItem('loggedIn', 'true')
        router.push('/dashboard')
    }
    else if (res.status >= 400){
        error.value = true
        error_message.value = 'Your email or password is incorrect'
    }


}
</script>

<style  scoped>

svg{
    fill: var(--color-text);
}
</style>