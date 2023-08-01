<template>
    <div class="submit-btn">
        <button type="submit">Submit</button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.submit-btn{
    margin-bottom: 1.5em;
}
button{
    background-color: #5B8FB9;
    width: 100%;
    padding: 0.75em 1.5em;
    border-radius: 0.5em;
    color: white;
}

button:hover,
button:focus-visible{
    background-color: #386386;
}

@media (prefers-color-scheme: dark){
    button{
        color: black;
    }

    button:hover,
    button:focus-visible{
    background-color: var(--color-background-mute);
    color: white;
}
}
</style>