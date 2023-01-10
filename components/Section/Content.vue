<template>
  <section class="w-full py-8 bg-white sm:py-12 md:py-16 lg:px-16">
    <div class="px-10 mx-auto max-w-7xl">
        <div class="flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200">
            <h2 class="text-3xl font-bold text-gray-800">Videos</h2>
            <NuxtLink to="/videos" class="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                <span>Alle Videos</span>
                <svg class="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </NuxtLink>
        </div>

        <div id="current-videos" class="grid grid-cols-12 gap-6">
            <SectionContentVideo v-for="video in this.videos" :key="video.id" :id="video.id" :image="video.attributes.Vorschaubild.data" :tag="video.attributes.Tag" :title="video.attributes.Titel" />
        </div>

        <div class="flex items-center justify-between w-full pb-5 mt-16 mb-8 border-b border-gray-200">
            <h2 class="text-3xl font-bold text-gray-800">Aktuelles</h2>
            <NuxtLink to="/aktuelles" href="#_" class="flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group">
                <span>Alle Beiträge</span>
                <svg class="w-4 h-4 mt-0.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </NuxtLink>
        </div>

        <div id="latest-posts" class="grid grid-cols-12 gap-6">
            <SectionContentBeitrag v-for="beitrag in this.beiträge" :key="beitrag.id" :id="beitrag.id" :image="beitrag.attributes.Beitragsbild.data[0]" :title="beitrag.attributes.Titel" />   
        </div>

        <div class="flex items-center justify-center w-full pb-1 mt-4 mb-6">
            <h2 class="text-4xl font-bold text-gray-800">Head of Podcast</h2>
        </div>

        <iframe src="https://open.spotify.com/embed/show/3Hbhfz5FmpmhVqMZfRVEpi?utm_source=headofcontent.de" width="100%" height="232" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
        beiträge: [],
        videos: [],
        interviews: []
    }
    },
  created: async function () {
    const responseBeitraege = await this.$strapi.find('Beitrags', {'pagination[pageSize]': 3, 'sort': 'publishedAt:desc', 'populate': ['*']});
    this.beiträge = responseBeitraege.data;
    const responseVideos = await this.$strapi.find('Videos', {'pagination[pageSize]': 3, 'sort': 'veroeffentlicht:asc', 'populate': ['*']});
    this.videos = responseVideos.data;
  }
}
</script>

<style>

</style>