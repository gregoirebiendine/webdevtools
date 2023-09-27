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

<div class="w-full rounded-xl {active ? 'bg-slate-100' : ''} hover:bg-slate-100">
    <a class="block py-3" on:click={closeMenu} href={base + href}>
        <p class="px-4 font-sans text-base text-gray-800">
            {name}
        </p>
    </a>
</div>