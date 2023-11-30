<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { page } from '$app/stores';
    import { base } from '$app/paths';

    export let name: string;
    export let href: string;
    export let active: boolean = href === $page.url.pathname;

    const dispatch = createEventDispatcher();

    function closeMenu() {
		dispatch('click');
	}

    $: active = href === $page.url.pathname;
</script>

<div class="w-full rounded-lg hover:bg-gray-200" class:bg-gray-200={active}>
    <a class="block py-3" on:click={closeMenu} href={base + href}>
        <p class="px-4 font-primary text-base text-gray-800" class:font-bold={active}>
            {name}
        </p>
    </a>
</div>