<template>
  <section class="relative flex flex-col items-center justify-center w-full px-6 pb-24 bg-white bg-cover lg:pb- lg:pt-16 min-w-screen">
    <div class="flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0">
        <div class="container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0">
            <h1 class="relative z-20 text-5xl font-extrabold leading-none xl:text-6xl sm:text-center lg:text-left">
                <div class="accent pb-1">Junge, unabhänige</div>
                <span class="mt-1 text-gray-800 lg:mt-0">Reportagen aus der Hauptstadt</span>
            </h1>
            <p class="relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left">Ansprechende politische Berichterstattung für Jugendliche und junge Erwachsene fehlt uns im Internet. Wir sind hier, um das zu ändern.</p>
            <div class="relative flex mt-4">
                <NuxtLink to="#ueber-uns" class="flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-full shadow lg:py-4 hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue md:text-lg xl:text-xl md:px-5 xl:px-10">Über uns</NuxtLink>
                <NuxtLink to="/videos" class="relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-blue-500 focus:outline-none md:text-lg xl:text-xl">
                    <svg class="absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                    <span class="text-blue-500">Aktuelle Videos</span>
                </NuxtLink>
            </div>
        </div>
        <SectionHeroTrailer />
    </div>
  </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.accent {
    background-image: linear-gradient(90deg, rgba(53,114,184,1) 0%, rgba(86,190,196,1) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>