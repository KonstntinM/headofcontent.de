<template>
  <div>
    <iframe
      class="w-full h-144"
      :src="this.video.Video"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />

    <section class="w-full px-8 py-16 bg-white xl:px-0">
      <div class="flex flex-col max-w-3xl mx-auto">
        <h3
          class="
            text-3xl
            font-extrabold
            leading-none
            sm:text-4xl
            md:text-5xl
            leading-7
          "
        >
          {{ this.video.Titel }}
        </h3>
        <p
          class="
            mt-1
            mb-10
            text-sm
            font-medium
            text-gray-500
            uppercase
            xl:text-base
            xl:tracking-wider
            lg:mb-0
          "
        >
          Veröffentlicht am {{ this.video.veroeffentlicht }}
        </p>
        <div class="my-2 border-b border-gray-300 lg:my-5"></div>
        <div
          v-html="$md.render(this.video.Beschreibung)"
          class="
            col-span-6
            text-base
            font-normal
            text-gray-700
            lg:leading-8
            xl:leading-8
            md:text-xl
          "
        ></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      video: { Beschreibung: "" },
    };
  },
  created: async function () {
    this.video = await this.$strapi.findOne("Videos", this.$route.params.id);

    var veroeffentlichungsdatum = this.video.veroeffentlicht || this.video.published_at

    var veroeffentlicht_am = new Date(veroeffentlichungsdatum);
    this.video.veroeffentlicht = veroeffentlicht_am.toLocaleString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  },
};
</script>

<style>
.h-144 {
  height: 35rem;
}
</style>