<template>
    <div class="form-input">
        <div class="form-input__content">
            <div class="logo">
                <slot name="logo-svg"></slot>
            </div>
            <div class="input">
                <input @keydown="show_error = true" v-model="props.data.data" placeholder="" :id="props.id" :type="props.type">
                <label :for="props.id">{{ props.label }}</label>
                <div v-bind:style="{visibility: is_error && show_error ? 'visible' : 'hidden'}" class="error">
                    <p v-if="props.type==='text'" class="error-text">Invalid Email</p>
                    <p v-if="props.type==='password'"> {{ props.label === 'Password' ? 'Password should be atleast 8 characters' : 'Passwords do not match'  }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'

const props = defineProps(['data','id','type','label','pass'])

const regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

const errorType = ()=>{
    if (props.type === 'text'){
        return computed(()=>{
            if (props.data.data === ''){show_error = false}
            return props.data.data.search(regex_email) === -1
        }) 
    }else if (props.type === 'password') {

        if (props.label === 'Password'){
            return computed(()=>{
                if (props.data.data === ''){show_error = false}
                return props.data.data.length < 8
            }) 
        }else{
            return computed(()=>{
                if (props.data.data === ''){show_error = false}
                return props.data.data !== props.pass.data
            }) 
        }

       
    }
}

const is_error = errorType()
let show_error = false

</script>

<style scoped>
.form-input__content{
    display: flex;
    align-items: center;
    margin: 1.5em 0;
}
.input{
    position: relative;
    width: 100%;
}

input{
    padding: 5px;
    padding-top: 10px;
    width: 100%;
    background: 0;
    /* background-color: rgba(255, 255, 255, 0.273); */
    border: 0;
    border-bottom: 1px solid;
}
input:placeholder-shown + label{
    transform: scale(1) translateY(0px);
} 
input:focus + label{
    transform: scale(0.7) translateY(-18px);
}
input:not(:placeholder-shown)+ label{
    transform: scale(0.7) translateY(-18px);
}

input:focus-visible{
    outline: 0; 
}
.logo{
    display: flex;
    width: 1em;
    margin-right: 1em;
    align-items: center;
}
label{
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 0px;
    transform-origin: left;
    transition: transform 0.3s ease;
}
.error{
    color: red;
    margin-top: 0.5em;
}
</style>