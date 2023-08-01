<template>
    <div class="error-message" v-show="is_error">
        <p>{{ error_message }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    is_error: Boolean,
    error_message: String
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