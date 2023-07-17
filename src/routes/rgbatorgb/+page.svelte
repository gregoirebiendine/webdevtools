<script lang="ts">
    import { ColorToOject, type Color, type ColorObject } from "$lib/types/Color";

    console.log(ColorToOject('#FF7D00'))

    function RGBAtoRGB(backgroundColor: Color, RGBAColor: Color) {
        const bgColor: ColorObject = ColorToOject(backgroundColor);
        const rgbaColor: ColorObject = ColorToOject(RGBAColor);
        const a = rgbaColor.a;
    
        return `#
            ${(1 - a) * bgColor.r + a * rgbaColor.r}
            ${(1 - a) * bgColor.g + a * rgbaColor.g}
            ${(1 - a) * bgColor.b + a * rgbaColor.b}
        `;
    }
</script>

<section class="">

</section>