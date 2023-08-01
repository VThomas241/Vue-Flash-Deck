<template>
    <div class="view-change-btn">
        <p> {{ props.message_1 }}</p>
        <button @click="$emit('change-view')">{{ props.message_2 }}</button>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    message_1: String,
    message_2: String
})

</script>

<style scoped>
    p,button{
        font-size: 1rem;
        display: inline-block;
        /* font-weight: 400; */
    }
    p{
        margin-right: 0.5em;
    } 
    button:hover,
    button:focus{
        color: var(--tertiary);
    }      
</style>