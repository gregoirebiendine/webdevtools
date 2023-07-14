<script>
    import ProjectBox from "$lib/components/ProjectBox.svelte";

</script>
<div class="w-full h-screen flex flex-col justify-start items-center relative">
    <div class="w-full h-screen absolute top-0 left-0 z-10 bg-custom bg-cover bg-no-repeat bg-center pointer-events-none"></div>
    <nav class="w-full flex flex-row justify-center items-center py-4 relative shadow-lg shadow-gray-100">
        <a title="Home" class="absolute left-8 cursor-pointer" href="/">
            <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="19.588" height="20.992" viewBox="0 0 19.588 20.992">
                <path id="Path_17" d="M759.892,237.364a.59.59,0,0,0-.055-.05l-6.012-4.8a3.152,3.152,0,0,0-4.4,0l-6.011,4.8c-.019.016-.038.032-.055.049a5.18,5.18,0,0,0-1.527,3.685v6.474a5.094,5.094,0,0,0,5.089,5.088h9.411a5.094,5.094,0,0,0,5.088-5.088v-6.474A5.176,5.176,0,0,0,759.892,237.364Zm.2,10.159a3.761,3.761,0,0,1-3.757,3.757h-9.411a3.762,3.762,0,0,1-3.758-3.757v-6.474a3.856,3.856,0,0,1,1.112-2.719l6.009-4.8a.594.594,0,0,0,.055-.05,1.821,1.821,0,0,1,2.574,0,.594.594,0,0,0,.055.05l6.009,4.8a3.855,3.855,0,0,1,1.111,2.719Z" transform="translate(-741.83 -231.619)"/>
                <path id="Path_18" d="M762.37,267.374h-5.522a.665.665,0,0,0,0,1.331h5.522a.665.665,0,1,0,0-1.331Z" transform="translate(-749.815 -251.511)"/>
            </svg>
        </a>

        <div class="font-sans">
            <h1 class="text-2xl text-gray-800 font-bold text-center tracking-wider">Web Devtools</h1>
            <p class="text-base text-gray-500 text-center">Set of tools for web developers</p>
        </div>
    </nav>
    <div class="w-full h-full flex flex-col justify-center items-center gap-8">
        <div class="flex flex-row justify-center items-center gap-8">
            <ProjectBox
                title="RGBA → RGB Conversion"
                desc="Convert a RGBA color to its RGB&nbsp;equivalent"
                href="/"
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
                desc="Generate box shadow with CSS rules"
                href="/"
            />
            <ProjectBox
                title="Non-blocking characters"
                desc="A list of non-blocking characters"
                href="/"
            />
        </div>
    </div>
</div>