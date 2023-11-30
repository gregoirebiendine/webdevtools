<script lang="ts">
    import ColorPickerBox from "$lib/components/ColorPickerBox.svelte";
    import { ColorToOject, NumberToHex, type Color, type ColorObject, type HEX } from "$lib/types/Color";

    let rgbBackground: Color = "#ffffff";
    let rgbColor: Color = "#ffffff";
    let rgbaColor: Color = "#ffffff";
    let opacity: number = 1;

    function RGBAtoRGB(backgroundColor: Color, RGBColor: Color, opacity: number): Color {
        const bgColor: ColorObject = ColorToOject(backgroundColor);
        const rgbColor: ColorObject = ColorToOject(RGBColor);
        const a = opacity;
    
        return `#${NumberToHex((1 - a) * bgColor.r + a * rgbColor.r)}${NumberToHex((1 - a) * bgColor.g + a * rgbColor.g)}${NumberToHex((1 - a) * bgColor.b + a * rgbColor.b)}`;
    }

    $: rgbaColor = RGBAtoRGB(rgbBackground, rgbColor, opacity);
</script>

<section class="w-full h-full flex justify-center items-center">
    <div class="flex flex-col justify-center items-center pb-12">
        <div class="flex flex-row justify-center items-center gap-16 mb-12">
            <ColorPickerBox title="RGB Background" bind:value={rgbBackground}/>
            <ColorPickerBox title="RGB Color" bind:value={rgbColor}/>
        </div>

        <label class="font-primary text-base font-bold">
            Opacity :
            <input type="number" class="bg-gray-100 rounded-md border-[1px] border-gray-200 p-2 ml-4" min="0" max="1" step="0.01" bind:value={opacity}/>
        </label>

        <hr class="w-full my-8">

        <ColorPickerBox title="RGBA Color" value={rgbaColor}/>

    </div>
</section>

<style lang="postcss">
</style>