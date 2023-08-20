<script setup lang="ts">
    async function populateDecks(token:String) {
        const res = await fetch('http://127.0.0.1:5000/decks/',{
            method: 'GET',
            mode:'cors',
        }).then(data=>data.json()).catch(e=>console.log(e))

        return res
    }
    
    
    let token = localStorage.getItem('token')
    if (token){
        let decks = populateDecks(token).then(data=>data).catch(e=>{console.log(e)})

        console.log(decks)
    }
</script>

<template>
    <div class="container-screen">
        <header>
            <NavBar class="container"/>
        </header>
        <main>
            <div class="container">
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>