<template>
  <section class="w-full px-8 text-gray-700 bg-white body-font">
    <div class="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">

        <NuxtLink to="/" class="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-auto title-font lg:items-center lg:justify-center md:mb-0">
            <nuxt-img src="/HOC_Logo_Entwurf-01.png" alt="Head of Content" class="logo mt-1" />
        </NuxtLink>

        <div class="relative flex flex-col md:flex-row">
            <nav class="flex flex-wrap items-center pt-3 pb-5 mb-4 text-base border-b border-gray-200 md:pt-0 md:mb-0 md:border-b-0 md:pr-3 md:mr-3 md:border-r md:pb-0">
                <NuxtLink to="/" class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">Home</NuxtLink>
                <NuxtLink to="/videos" class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">Videos</NuxtLink>
                <NuxtLink to="/aktuelles" class="mr-6 font-medium leading-6 text-gray-600 hover:text-gray-900">Aktuelles</NuxtLink>
                <NuxtLink :to="{ path: '/',hash:'#kontakt'}" class="font-medium leading-6 text-gray-600 md:mr-6 hover:text-gray-900">Kontakt</NuxtLink>
            </nav>
            <div class="inline-flex items-center justify-center ml-5 space-x-4 md:space-x-10 md:justify-end">
                <a href="https://cloud.headofcontent.de/" target="_blank" class="text-base font-medium leading-6 text-gray-600 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-900 cursor-pointer">
                    Login
                </a>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style> 
.logo {
    max-width: 7rem;
}
</style>