<script setup lang="ts">
import Button from '@/components/Button-Components/Button.vue';
import NavBar from '@/components/NavBar.vue';
import Container from '@/components/Container-Components/Container.vue';
import ContainerScreen from '@/components/Container-Components/ContainerScreen.vue';
import { ref } from 'vue';
import { useStore } from '@/stores/store';
import router from '@/router';
const decksEmpty = ref(false) 

const store = useStore()

async function getDecks(token:string) {
    const res = await fetch('http://127.0.0.1:5000/decks/',{
        method: 'GET',
        mode:'cors',
        headers: {'Authorization': `Bearer ${token}`}
    }).catch(e=>console.log(e))

    return res
}

// TODO Implement loading skeleton for dashboard
async function populateDecks(){
    const token = localStorage.getItem('token')
  
    if (!token){
        localStorage.setItem('loggedIn', 'false')
        router.push('/auth')
        return
    }
    if (localStorage.getItem('loggedIn') === 'true') {
        if (store.decks.length === 0) { decksEmpty.value = true }
        return
    }

    try {
        const res = await getDecks(token)
        if (!res) return

        if (!res.ok) {
            localStorage.removeItem('token')
            localStorage.setItem('loggedIn', 'false')
            router.push('/auth')
            return
        }
        const decks:Array<Object> = await res.json()

        store.decks = decks

        if (decks.length === 0) { decksEmpty.value = true }

    } catch (error) { console.log(error) }

}

function addDeck(){
    console.log('deck added')
}

populateDecks()

</script>

<template>
    <ContainerScreen>
        <header>
            <Container>
                <NavBar />
            </Container>
        </header>
        <main>
            <Container>
                <header>
                    <h1>Dashboard</h1>
                    <button class="add_btn">Add deck</button>
                </header>
                <div v-if="!decksEmpty" class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Idx</th>
                                <th>Deck Name</th>
                                <th>Status</th>
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
                <div v-else class="no-decks">
                    <p>You do not have any decks</p>
                </div>
                
            </Container>
        </main>
    </ContainerScreen>
</template>

<style scoped>
    table,tr,th,td{
        border-collapse: collapse;
    }
    table{
        margin: 0 auto;
        /* background-color: rgba(240, 248, 255, 0.145); */
        border: 1px solid var(--color-heading);
        border-radius: 10px;
    }
    td,th{
        padding: 3em;
    }
    .no-decks{
        text-align: center;
        font-size: 2rem;
        margin-top: 2em;
    }
    .add_btn{
        font-family: inherit;
        font-size: inherit;
        margin-right: 1em;
        padding: 0.75em 1em;
        border-radius: 8px;
        border: 2px solid var(--color-heading);
}
</style>