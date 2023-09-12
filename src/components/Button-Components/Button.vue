<template>
    <button @click="$emit('click_')" :style="{
        backgroundColor: props.bg_color,
        color: props.color
        }">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    bg_color: {
        type: String,
        default: '#4949c8'
    },
    color: {
        type: String,
        default: 'white'
    }
})

</script>

<style scoped>
button{
    padding: 0.75em 1em;
    border-radius: 5px;
    margin-right: 1em;
    font-family: inherit;
    font-size: inherit;
    
}
</style>