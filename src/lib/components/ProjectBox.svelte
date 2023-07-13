<script lang="ts">
    export let title: string;
    export let desc: string;
    export let href: string;
</script>

<a class="rounded-2xl shadow-2xl shadow-gray-300 font-roboto px-8 py-6 transition-transform duration-300 hover:scale-105" {href}>
    <p class="font-bold text-lg text-gray-800">
        {title}
    </p>
    <p class="text-base text-gray-700">
        {desc}
    </p>

    <p class="font-sans text-sm text-gray-800 text-right opacity-50 mt-6">
        →
    </p>
</a>