<template>
  <section id="kontakt" class="py-20 bg-white">

    <div class="max-w-5xl px-10 mx-auto xl:px-5">

      <div class="flex flex-col space-y-8">
        <p class="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-center">Bitte gib deinen Redaktionscode ein.</p>

        <div class="flex flex-row md:max-w-3xl mx-auto space-y-5 md:space-y-5 md:space-x-5">
            <input v-model="code" type="password" maxlength="5" class="flex-1 w-2/4 px-5 py-5 text-xl border border-gray-300 rounded-lg focus:ring-4 focus:border-purple-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none" placeholder="Redaktionscode"> <br>
            <a @click="authenticate" v-bind:class="{ 'border-red-500' : error }" class="md:max-w-xs flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none">Verifizieren</a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data: {
    code: '',
    error: false
  },
  methods: {
    authenticate: function (event) {
      if (code = 55555) {
          window.open(
            'https://cms.headofcontent.de/admin',
            '_blank'
          );
      } else {

      }
    }
  }
}
</script>

<style>

</style>