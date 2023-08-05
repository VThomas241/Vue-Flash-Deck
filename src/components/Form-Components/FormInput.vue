<template>
    <div class="form-input">
        <div class="logo">
            <slot name="logo-svg"></slot>
        </div>
        <div class="input">
            <input v-model="props.data.data" placeholder="" :id="props.id" :type="props.type">
            <label :for="props.id">{{ props.label }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['data','id','type','label'])
</script>

<style scoped>
.form-input{
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
    left: 0;
    pointer-events: none;
    left: 5px;
    top: 0;
    transform-origin: left;
    transition: transform 0.3s ease;
}
</style>