<template>
    <button type="submit">Submit</button>
</template>

<script setup lang="ts">

</script>

<style scoped>
button[type="submit"]{
    background-color: #5B8FB9;
    width: 100%;
    padding: 0.75em 1.5em;
    border-radius: 0.5em;
    color: white;
}

button[type="submit"]:hover,
button[type="submit"]:focus-visible{
    background-color: #386386;
}

@media (prefers-color-scheme: dark){
    button[type="submit"]{
        color: black;
    }

    button[type="submit"]:hover,
    button[type="submit"]:focus-visible{
    background-color: #72aad8;
}
}
</style>