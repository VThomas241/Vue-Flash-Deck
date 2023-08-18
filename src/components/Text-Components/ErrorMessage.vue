<template>
    <div class="error-message">
        <p>{{ props.message }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    message: String
})

</script>

<style scoped>
.error-message{
    padding: 0.5em 1em;
    border-radius: 0.5em;
    background-color: rgba(255, 0, 0, 0.157);
    color: rgb(255, 0, 0);
    margin-bottom: 1em;
}
</style>