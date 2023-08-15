<template>
    <div class="nav-container">
        <div class="nav-logo">
            <img src="../assets/logo.svg" height="36" alt="Logo">
            <!-- <p class="h1">Flash</p> -->
        </div>

        <TrigramButton class="menu-button" @click="menuClick" />

        <nav class="nav-menu" ref="navMenu">
            <h3 class="nav-links-heading">Menu</h3>
            <ul class="nav-links">
                <li class="nav-link"><a href="#">Home</a></li>
                <li class="nav-link"><a href="#">About</a></li>
                <li class="nav-link"><a href="#">Auth</a></li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import TrigramButton from '@/components/Button-Components/TrigramButton.vue'
import { ref } from 'vue';

const navMenu = ref<HTMLElement | null>(null);

const menuClick = () => {
    navMenu.value?.classList.toggle('active');
}
</script>

<style scoped>
    .nav-container{
        position: relative;
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .nav-menu{
        background-color: var(--color-background-mute);
        position: absolute;
        width: 100%;
        top: 100%;
        right: 0;
        padding: 2rem;
        align-items: center;
        justify-content: space-between;
        border-radius: 0 0 1rem 1rem;
        box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.2);
        opacity: 0;
        visibility: hidden;
        transition: 
            opacity 300ms ease,
            visibility 300ms ease;
        z-index: 10;
    }
    .nav-menu.active{
        opacity: 100%;
        visibility: visible;
    }
    .nav-logo{
        display: flex;
        gap: 1em;
        align-items: center;
    }
    .nav-links-heading{
        position: relative;
        font-size: 1.8rem;
        letter-spacing: 4px;
        text-align: center;
        color: var(--color-heading);
        margin-bottom: 0.5em;
    }
    .nav-links{
        /* border: 1px solid red; */
        display: flex;
        flex-direction: column;
        /* gap: 1.5em; */
        align-items: center;
        list-style: none;
        font-size: 1.2rem;
    }
    .nav-link{
        border-top: 1px solid var(--color-border);
        padding-block: 1em;
        width: 100%;
        text-align: center;
        position: relative;

    }
    .nav-link a{
        color: var(--color-text);
    }
    .nav-link a:hover,
    .nav-link a:focus-visible{
        color: var(--color-heading);
    }
    @media screen and (min-width: 450px){
        .nav-container{
            justify-content: space-between;
        }
        .menu-button{
            display: none;
        }
        .nav-menu{
            position: relative;
            background-color: transparent;
            width: fit-content;
            opacity: 100%;
            visibility: visible;
            box-shadow: 0 0 0 0;    
        }

        .nav-links-heading{
            display: none;
        }
        .nav-links{
            flex-direction: row;
            gap: 1.5em;
            /* border: 2px solid red; */
        }
        .nav-link{
            border: 0;
            padding: 0;
        }
    }

</style>