<script lang="ts">
    import ColorPickerBox from "$lib/components/ColorPickerBox.svelte";
    import { ColorToOject, NumberToHex, isValidHexColor, type Color, type ColorObject, type HEX } from "$lib/types/Color";

    let opacity: number = 1;

    function RGBAtoRGB(backgroundColor: Color, RGBAColor: Color): HEX {
        const bgColor: ColorObject = ColorToOject(backgroundColor);
        const rgbaColor: ColorObject = ColorToOject(RGBAColor);
        const a = rgbaColor.a;
    
        return `#${NumberToHex((1 - a) * bgColor.r + a * rgbaColor.r)}${NumberToHex((1 - a) * bgColor.g + a * rgbaColor.g)}${NumberToHex((1 - a) * bgColor.b + a * rgbaColor.b)}`;
    }
</script>

<section class="w-full h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center items-center pb-12">
        <div class="flex flex-row justify-center items-center gap-16 mb-12">
            <ColorPickerBox title="RGB Background"/>
            <ColorPickerBox title="RGB Color"/>
        </div>
        <p class="font-sans text-base font-bold">Opacity : {opacity}</p>
        <input class="sliderOpacity w-full h-3 rounded-full mt-4 appearance-none outline-none opacity-70 transition-opacity duration-300 hover:opacity-100" type="range" min="0" max="1" step="0.01" bind:value={opacity}>
    </div>
</section>

<style lang="postcss">
    .sliderOpacity {
        background: #d3d3d3;
    }

    .sliderOpacity::-webkit-slider-thumb {
        @apply appearance-none w-5 h-5 rounded-full cursor-pointer bg-soft-purple-2;
    }

    .sliderOpacity::-moz-range-thumb {
        @apply appearance-none w-5 h-5 rounded-full cursor-pointer bg-gray-500;
    }
</style>