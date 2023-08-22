<script setup lang="ts">
import router from '@/router';

    async function populateDecks(token:String) {
        const res = await fetch('http://127.0.0.1:5000/decks/',{
            method: 'GET',
            mode:'cors',
        }).then(data=>data.json()).catch(e=>console.log(e))

        return res
    }
    
    // TODO Implement loading skeleton for dashboard
    
    let token = localStorage.getItem('token')

    if (token){
        const decks = await populateDecks(token).then(res=>res).catch(e=>{console.log(e)})

        if (decks){
            console.log(decks)
            if (decks.code >= 400){
                router.push('/')
            }
        }
    }
</script>

<template>
    <div class="container-screen">
        <header>
            <NavBar class="container"/>
        </header>
        <main>
            <div class="container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    </div>
</template>

<style scoped>

</style>