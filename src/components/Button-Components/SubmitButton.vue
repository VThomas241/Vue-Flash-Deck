<template>
    <div class="submit-btn">
        <button :data-enabled="props.valid.data" ref="btn" type="submit">Submit</button>
    </div>
</template>

<script setup lang="ts">
import {ref,watch} from 'vue'

const props = defineProps(['valid'])
const btn = ref<HTMLButtonElement | null>(null)


</script>

<style scoped>
.submit-btn{
    margin-top: 1em;
    margin-bottom: 1.5em;
}
button{
    width: 100%;
    padding: 0.5em 1.5em;
    border-radius: 5em;
    color: white;
    font-size: 1.3em;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: background-color 0.3s ease,
    color 0.3s ease;
}
button[data-enabled="true"]{
    background-color: #47759cd7;
}

button[data-enabled="true"]:hover,
button[data-enabled="true"]:focus-visible{
    background-color: #386386;
}

button[data-enabled="false"]{
    background-color: rgb(125, 122, 122);
    cursor: not-allowed;
    color: rgb(0, 0, 0);
    /* pointer-events: none; */
}

@media (prefers-color-scheme: dark){
    button[data-enabled="true"]{
        color: black;
    }

    button[data-enabled="true"]:hover,
    button[data-enabled="true"]:focus-visible{
    background-color: var(--color-background-mute);
    color: rgba(255, 255, 255, 0.824);
    }
}
</style>