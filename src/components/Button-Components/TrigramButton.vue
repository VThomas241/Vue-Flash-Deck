<template>
    <button class="trigram" @click="menuClick" ref="trigram">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
    </button>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    const trigram = ref<HTMLButtonElement | null>(null);
    const menuClick = () => {
        trigram.value?.classList.toggle('active')
    }

    defineExpose({
        menuClick
    })
</script>

<style scoped>
    .trigram{
        display: inline-block;
    }
    .line{
        height: 2px;
        width: 20px;
        margin: 5px 3px;
        background-color: var(--color-text);
        border-radius: 5px;
        transition: 
            opacity 0.3s ease,
            transform 0.3s ease;
    }
    .trigram.active .line-2{
        opacity: 0;
    }
    .trigram.active .line-1{
        transform: rotate(45deg) translate(5px,5px);
    }
    .trigram.active .line-3{
        transform: rotate(-45deg) translate(5px,-5px);
    }
</style>