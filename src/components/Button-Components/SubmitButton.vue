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
    margin-bottom: 1.5em;
}
button{
    width: 100%;
    padding: 0.75em 1.5em;
    border-radius: 0.5em;
    color: white;
}
button[data-enabled="true"]{
    background-color: #5B8FB9;
}

button[data-enabled="true"]:hover,
button[data-enabled="true"]:focus-visible{
    background-color: #386386;
}

button[data-enabled="false"]{
    background-color: grey;
    cursor: not-allowed;
    /* pointer-events: none; */
}

@media (prefers-color-scheme: dark){
    button[data-enabled="true"]{
        color: black;
    }

    button[data-enabled="true"]:hover,
    button[data-enabled="true"]:focus-visible{
    background-color: var(--color-background-mute);
    color: white;
    }
}
</style>