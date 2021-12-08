<template>
  <div class="grid grid-cols-12 gap-6">
    <SectionContentInterview v-for="interview in this.interviews" :key="interview.id" :id="beitrag.id" :image="interview.Beitragsbild" :title="interview.Titel" />   
  </div>
</template>

<script>
export default {
  data: function() {
    return {
        interviews: []
    }
    },
  created: async function () {
    this.beiträge = await this.$strapi.find('Interviews', {'_limit': 9, '_sort': 'published_at:DESC'});
  }
}
</script>

<style>

</style>