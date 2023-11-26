<script lang="ts">
    import { base } from '$app/paths';
    import { createEventDispatcher } from 'svelte';

    export let name: string;
    export let href: string = "";
    export let active: boolean = false;

    const dispatch = createEventDispatcher();

    function closeMenu() {
		dispatch('click');
	}
</script>

<div class="w-full hover:bg-slate-100" class:bg-slate-100={active}>
    <a class="block py-3" on:click={closeMenu} href={base + href}>
        <p class="px-4 font-primary text-base text-gray-800">
            {name}
        </p>
    </a>
</div>