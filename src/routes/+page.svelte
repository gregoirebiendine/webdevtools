<script lang="ts">
    import ProjectBox from "$lib/components/ProjectBox.svelte";
</script>

<!-- Projects grid -->
<div class="w-full h-full flex flex-col justify-center items-center gap-8">
    <div class="flex flex-row justify-center items-center gap-8">
        <ProjectBox
            title="RGBA → RGB Conversion"
            desc="Convert a RGBA color to its RGB&nbsp;equivalent"
            href="/rgbatorgb"
        />
        <ProjectBox
            title="XD → CSS Letter Spacing"
            desc="Convert XD letter spacing to CSS&nbsp;unit"
            href="/"
        />
        <ProjectBox
            title="CSS Triangle Generator"
            desc="Generate triangle with CSS rules"
            href="/"
        />
    </div>
    <div class="flex flex-row justify-center items-center gap-8">
        <ProjectBox
            title="CSS Shadow Generator"
            desc="Generate box shadow with CSS&nbsp;rules"
            href="/"
        />
        <ProjectBox
            title="Non-blocking characters"
            desc="A list of non-blocking characters"
            href="/"
        />
    </div>
</div>