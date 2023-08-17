<template>
    <div class="submit-btn">
        <button ref="btn" :class="{ loading : props.loading.data }" :data-enabled="props.valid.data" type="submit">Submit</button>
    </div>
</template>
<!-- Not fixed yet  -->
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
const props = defineProps(['valid','loading'])

const valid = computed(()=>{
    return props.valid.data
})

const btn = ref<HTMLButtonElement | null>(null);

onMounted(()=>{
    if (btn.value){
        btn.value.disabled = valid.value
    }
})


</script>

<style scoped>
.submit-btn{
    margin-top: 1em;
    margin-bottom: 1.5em;
    isolation: isolate;
}
.submit::after{
    content: '';
    inset: 0;
    background-color: #47759cd7;
    z-index: 0;
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
    z-index: 1;
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