<template>
  <section class="w-full py-8 bg-white sm:py-12 md:py-16 lg:px-16">
    <div class="px-10 mx-auto max-w-7xl">
        <div class="flex items-center flex-col md:flex-row md:justify-between w-full pb-5 mb-8 border-b border-gray-200">
            <h2 class="text-3xl font-bold text-gray-800 pb-5 md:pb-0">Alle Interviews</h2>
            <SectionContentNavigationVideo :pages="1" />
        </div>
        <SectionInterviews/>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>