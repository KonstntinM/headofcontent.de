<template>
  <div class="grid grid-cols-12 gap-6">
    <SectionContentBeitrag v-for="beitrag in this.beiträge" :key="beitrag.id" :id="beitrag.id" :image="beitrag.Beitragsbild" :title="beitrag.Titel" />   
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        beiträge: []
    }
    },
  created: async function () {
    this.beiträge = await this.$strapi.find('Beitrags', {'_limit': 9, '_sort': 'published_at:DESC', 'populate': ['*'] });
  }
}
</script>

<style>

</style>