<script lang="ts">
    import "../app.css";
    import BurgerMenu from "$lib/components/BurgerMenu.svelte";
    import Navbar from "$lib/components/Navbar.svelte";

    let isBurgerMenuToggled: boolean;
</script>

<div class="w-full h-screen flex flex-col justify-start items-center relative">
    <div class="w-full h-screen absolute top-0 left-0 z-10 bg-custom bg-cover bg-no-repeat bg-center pointer-events-none"></div>

    <Navbar bind:isBurgerMenuToggled/>

    <section class="w-full h-full flex flex-col justify-center items-center relative">
        <BurgerMenu isToggled={isBurgerMenuToggled}/>

        <slot />
    </section>
</div>