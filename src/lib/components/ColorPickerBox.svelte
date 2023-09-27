<script lang="ts">
    import { isValidHexColor } from "$lib/types/Color";

    export let title: string;

    let colorInput: HTMLInputElement;
    let colorTextInput: HTMLInputElement;

    function colorInputChange(e: Event) {
        colorTextInput.value = (e.target as HTMLInputElement).value;
    }

    function colorTextInputChange(e: Event) {
        if (isValidHexColor((e.target as HTMLInputElement).value))
            colorInput.value = (e.target as HTMLInputElement).value;
    }
</script>

<div class="flex flex-col justify-center items-center gap-4 font-sans text-base text-gray-800">
    <label class="font-bold">
        {title}
        <input type="color" class="align-middle ml-2" value="#ffffff" bind:this={colorInput} on:change={colorInputChange} on:input={colorInputChange}>
    </label>
    <input type="text" class="bg-gray-100 rounded-md border-[1px] border-gray-400 p-2" value="#ffffff" bind:this={colorTextInput} on:input={colorTextInputChange}/>
</div>