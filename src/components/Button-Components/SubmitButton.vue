<template>
    <div class="submit-btn">
        <button ref="btn" :data-enabled="props.valid.data" type="submit">Submit</button>
        <div v-if="props.loading.data" class="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
</template>
<!-- Not fixed yet  -->
<script setup lang="ts">
import { watch } from 'vue';
import { ref, onMounted, computed } from 'vue';
const props = defineProps(['valid','loading'])

const btn = ref<HTMLButtonElement | null>(null);

onMounted(()=>{
    if (btn.value){
        btn.value.disabled = !props.valid.data
    }
    watch(props.valid,(oldValue,newValue)=>{
        if (btn.value){
            btn.value.disabled = !newValue.data
        }
    })
})


</script>

<style scoped>
.submit-btn{
    margin-top: 1em;
    margin-bottom: 1.5em;
    isolation: isolate;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.lds-ring {
  display: inline-block;
  position: absolute;
  border-radius: 5em;
  --size: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #386386;
  width: var(--size);
  height: var(--size);
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 40px;
  height: 40px;
  margin: 8px;
  border: 6px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #4728c4 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
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