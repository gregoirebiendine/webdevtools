<script lang="ts">
    import BurgerMenuItem from "./BurgerMenuItem.svelte";
    import { base } from "$app/paths";


    export let isToggled: boolean = false;

    function toggleBurgerMenu() {
        isToggled = !isToggled;
    }
</script>

<div class="w-fit h-full flex flex-col burgermenu-shadow bg-white p-4 transition-all duration-300 absolute z-20 top-0 {isToggled ? 'left-0' : '-left-full'}">
    <BurgerMenuItem on:click={toggleBurgerMenu} name="Home" href="/"/>
    <BurgerMenuItem on:click={toggleBurgerMenu} name="RGBA → RGB Conversion" href="{base}/rgbatorgb"/>
    <BurgerMenuItem on:click={toggleBurgerMenu} name="XD → CSS Letter Spacing" href="{base}/xdspacing"/>
    <BurgerMenuItem on:click={toggleBurgerMenu} name="CSS Triangle Generator" href="{base}/csstriangle"/>
    <BurgerMenuItem on:click={toggleBurgerMenu} name="CSS Shadow Generator" href="{base}/cssshadow"/>
    <BurgerMenuItem on:click={toggleBurgerMenu} name="Non-blocking characters" href="{base}/nonblockingchar"/>
</div>

<style lang="postcss">
    .burgermenu-shadow {
        box-shadow: 17px 1px 19px -5px rgba(0,0,0,0.13);
    }
</style>