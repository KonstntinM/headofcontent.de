<template>
  <div class="grid grid-cols-12 gap-6">
    <SectionContentVideo v-for="video in this.braten" :key="video.id" :id="video.id" :image="video.attributes.Vorschaubild.data" :tag="video.attributes.Tag" :title="video.attributes.Titel" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        braten: []
    }
    },
  created: async function () {
    const responseBraten = await this.$strapi.find('Videos', {'_sort': 'veroeffentlicht:asc', 'populate': ['*'] });
    this.braten = responseBraten.data;
  }
}
</script>

<style>

</style>