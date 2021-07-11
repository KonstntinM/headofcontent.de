<template>
  <section id="kontakt" class="py-20 bg-white">

    <div class="max-w-5xl px-10 mx-auto xl:px-5">

      <div class="flex flex-col justify-center space-y-8">
        <h2 class="w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl md:text-center">Kontakt</h2>
        <p class="w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-center">Wenn du uns erreichen möchtest, dann schreibe uns gerne über dieses Kontaktformular oder direkt an unserem E-Mailadresse kontakt(at)headofcontent(punkt)de .</p>

        <div class="flex flex-col w-full md:max-w-3xl mx-auto space-y-5 md:space-y-5 md:space-x-0">
            <p v-if="error" class="text text-red-500">{{ error }}</p>
            <div class="md:flex md:flex-row space-y-3 md:space-y-0 md:space-x-5">
              <input v-model="name" type="text" v-bind:class="{ 'border-red-500': error }" class="flex-1 w-full px-5 py-5 text-xl border border-gray-300 rounded-lg focus:ring-4 focus:border-purple-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none" placeholder="Dein Name">
              <input v-model="email" type="text" v-bind:class="{ 'border-red-500': error }" class="flex-1 w-full px-5 py-5 text-xl border border-gray-300 rounded-lg focus:ring-4 focus:border-purple-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none" placeholder="E-Mailadresse"> <br>
            </div>
            <input v-model="message" type="text"  v-bind:class="{ 'border-red-500': error }" class="flex-1 w-full px-5 py-5 pb-32 text-xl border border-gray-300 rounded-lg focus:ring-4 focus:border-purple-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none" placeholder="Nachricht">
            <hcaptcha />
            <button v-if="success" class="bg-green-400 disabled md:max-w-xs flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none cursor-not-allowed">Gesendet! 🥳</button>
            <button @click="send" v-else class="bg-blue-600 md:max-w-xs flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none">Senden</button>
                    
        <p class="text-gray-400">Mit dem Klicken auf Senden stimmst du unserer <NuxtLink to="/datenschutzerklärung" class="text-blue-500 underline">Datenschutzerklärung</NuxtLInk> zu.</p>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    message: '',
    error: null,
    success: false
  }),
  methods: {
    async send() {

      const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      // add captcha check!

      if (!this.name || !this.email || !this.message || !emailPattern.test(this.email)) {
        return this.error = "Bitte überprüfe deine Angaben und versuche es erneut."
      }

      var hCaptchaToken = await this.$hcaptcha.getResponse();

      if (!hCaptchaToken) {
        return this.error = "Bitte löse das CAPTCHA und versuche es erneut."
      }
      
      else {
        try {
          var response = await this.$axios.$post('https://mail.headofcontent.de/send-mail', {
            name: this.name,
            absender: this.email,
            nachricht: this.message,
            hCaptcha: hCaptchaToken
          })

          if (response.stauts == 200) {
            this.error = null
                this.success = true;
                this.name = ''
                this.email = ''
                this.message = ''
          } else {
            this.error = response.message
          }
        } catch {
          this.error = "Irgendetwas ist schief gelaufen. Das geht auf unsere Kappe! Bitte kontaktiere uns direkt über unsere E-Mailadresse (s. oben)."
        }

        plausible('Kontaktanfrage');
      }
    }
  }
}
</script>

<style>

</style>