<script lang="ts">
    import BurgerMenuItem from "./BurgerMenuItem.svelte";
    import { page } from '$app/stores';

    export let isToggled: boolean = false;

    function toggleBurgerMenu() {
        isToggled = !isToggled;
    }

    const items = [
        {name: "Home", href: "/"},
        {name: "RGBA → RGB Conversion", href: "/rgbatorgb"},
        {name: "XD → CSS Letter Spacing", href: "/xdtocssspacing"},
        {name: "CSS Triangle Generator", href: "/csstriangle"},
        {name: "CSS Shadow Generator", href: "/cssshadow"},
        {name: "Non-blocking characters", href: "/nonblockingchar"},
    ];
</script>

<div class="w-fit p-2 h-full bg-white absolute z-20 top-0 transition-all duration-500 flex flex-col {isToggled ? 'left-0' : '-left-full'}">
    {#each items as item}
        <BurgerMenuItem on:click={toggleBurgerMenu} name={item.name} href={item.href} active={item.href === $page.url.pathname}/>
    {/each}
</div>