<script lang="ts">
    export let title: string;
    export let value: string = "#ffffff";
</script>

<div class="flex flex-col justify-center items-center gap-4 font-primary text-base text-gray-800">
    <label class="font-primary font-bold">
        {title}
        <input type="color" class="align-middle ml-2" bind:value={value}>
    </label>
    <input type="text" class="bg-gray-100 rounded-md border-[1px] border-gray-200 p-2" bind:value={value}/>
</div>