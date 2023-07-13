<script lang="ts">
    export let title: string;
    export let desc: string;
    export let href: string;
</script>

<a class="w-[300px] h-[180px] flex flex-col justify-between rounded-2xl shadow-2xl shadow-gray-300 font-roboto px-8 py-6 transition-transform duration-300 hover:scale-105" {href}>
    <div>
        <p class="font-bold text-lg text-soft-purple-2">
            {title}
        </p>
        <p class="text-base text-gray-700">
            {desc}
        </p>
    </div>

    <p class="font-sans text-sm text-gray-800 text-right opacity-50">
        →
    </p>
</a>