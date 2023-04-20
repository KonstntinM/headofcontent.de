<template>
  <div class="grid grid-cols-12 gap-6">
    <SectionContentBeitrag v-for="beitrag in this.beiträge" :key="beitrag.id" :id="beitrag.id" :image="beitrag.attributes.Beitragsbild.data[0]" :title="beitrag.attributes.Titel" />   
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
    const responseBeitraege = await this.$strapi.find('Beitrags', {'sort': 'publishedAt:desc', 'populate': ['*'] });
    this.beiträge = responseBeitraege.data;
  }
}
</script>

<style>

</style>