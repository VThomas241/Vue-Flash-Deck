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
.form-heading h2{
    text-align: center;
    letter-spacing: 2px;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 0.8em;
}
</style>