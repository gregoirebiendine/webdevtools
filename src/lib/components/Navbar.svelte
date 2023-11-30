<script lang="ts">
    import GenericIconButton from "./GenericIconButton.svelte";
    import { base } from "$app/paths";

    export let isBurgerMenuToggled: boolean = false;

    function toggleBurgerMenu() {
        isBurgerMenuToggled = !isBurgerMenuToggled;
    }
</script>

<nav class="w-full flex flex-row justify-center items-center py-4 relative shadow-lg shadow-gray-100">
    <div class="absolute left-8 flex flex-row justify-center items-center gap-8">
        <GenericIconButton on:click={toggleBurgerMenu}>
            <div class="transition-transform duration-500 ease-out" class:rotate-90={isBurgerMenuToggled} title="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" viewBox="0 0 22 14">
                    <g transform="translate(-90.5 -122.5)">
                      <line x2="20" transform="translate(91.5 123.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
                      <line x2="16" transform="translate(93.5 129.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
                      <line x2="20" transform="translate(91.5 135.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-width="2"/>
                    </g>
                </svg>
            </div>
        </GenericIconButton>
        <GenericIconButton on:click={null}>
            <a title="Home" class="cursor-pointer" href="{base}/">
                <svg class="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.6432 7.11615L13.162 3.08912C12.8074 2.86751 12.3977 2.75 11.9796 2.75C11.5614 2.75 11.1517 2.86751 10.7971 3.08912L4.31595 7.11615C3.94743 7.34834 3.65494 7.68332 3.47456 8.07978C3.29417 8.47623 3.23378 8.91682 3.30082 9.34719L4.9741 19.3869C5.06203 19.9128 5.33538 20.3898 5.74464 20.7315C6.1539 21.0732 6.67202 21.2571 7.20514 21.2498H16.7986C17.3317 21.2571 17.8499 21.0732 18.2591 20.7315C18.6684 20.3898 18.9417 19.9128 19.0297 19.3869L20.7029 9.34719C20.7656 8.91228 20.6985 8.46855 20.51 8.07164C20.3214 7.67474 20.0199 7.34234 19.6432 7.11615Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13.6528 10.1392H10.3063C9.38215 10.1392 8.633 10.8884 8.633 11.8125V15.1591C8.633 16.0832 9.38215 16.8323 10.3063 16.8323H13.6528C14.577 16.8323 15.3261 16.0832 15.3261 15.1591V11.8125C15.3261 10.8884 14.577 10.1392 13.6528 10.1392Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </GenericIconButton>
    </div>

    <div class="font-primary">
        <h1 class="text-2xl text-gray-800 font-bold text-center tracking-wider">Web DevTools</h1>
        <p class="text-base text-gray-600 text-center">Set of tools for web developers</p>
    </div>
</nav>