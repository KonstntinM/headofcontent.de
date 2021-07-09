<template>
  <div class="grid grid-cols-12 gap-6">
    <SectionContentVideo v-for="video in this.braten" :key="video.id" :id="video.id" :image="video.Vorschaubild" :tag="video.Tag" :title="video.Titel" />
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
    this.braten = await this.$strapi.find('Videos', {'_limit': 9, '_sort': 'veroeffentlicht:ASC'});
  }
}
</script>

<style>

</style>