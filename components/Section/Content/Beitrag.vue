<template>
<NuxtLink :to="'/aktuelles/' + id" class="relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4">
                <a href="#_" class="relative block w-full h-64 overflow-hidden rounded">
                    <img class="object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105" :src="'https://cms.headofcontent.de' + image.attributes.formats.medium.url" :alt="image.attributes.alternativeText">
                </a>
                <p class="text-xs font-bold text-gray-400 uppercase">Beitrag</p>
                <a href="#_" class="block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900">{{ title }}</a> 
</NuxtLink>
</template>

<script>
export default {
    props: {
        id: Number,
        image: Object,
        title: String
    }
}
</script>

<style>

</style>