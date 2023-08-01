<template>
    <div class="form-heading">
        <h2>{{ heading }}</h2>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    heading: String
})
</script>

<style scoped>
.form-heading{
    text-align: center;
    letter-spacing: 4px;
}
</style>