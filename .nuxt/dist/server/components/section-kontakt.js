exports.ids = [10];
exports.modules = {

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Kontakt.vue?vue&type=template&id=ba9f8814&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"py-20 bg-white",attrs:{"id":"kontakt"}},[_vm._ssrNode("<div class=\"max-w-5xl px-10 mx-auto xl:px-5\">","</div>",[_vm._ssrNode("<div class=\"flex flex-col justify-center space-y-8\">","</div>",[_vm._ssrNode("<h2 class=\"w-full mx-auto text-4xl font-extrabold leading-none text-left text-gray-900 sm:text-5xl md:text-7xl md:text-center\">Kontakt</h2> <p class=\"w-full max-w-3xl mx-auto text-xl text-left text-gray-500 md:text-center\">Wenn du uns erreichen möchtest, dann schreibe uns gerne über dieses Kontaktformular oder direkt an unserem E-Mailadresse kontakt(at)headofcontent(punkt)de .</p> "),_vm._ssrNode("<div class=\"flex flex-col w-full md:max-w-3xl mx-auto space-y-5 md:space-y-5 md:space-x-0\">","</div>",[_vm._ssrNode(((_vm.error)?("<p class=\"text text-red-500\">"+_vm._ssrEscape(_vm._s(_vm.error))+"</p>"):"<!---->")+" <div class=\"md:flex md:flex-row space-y-3 md:space-y-0 md:space-x-5\"><input type=\"text\" placeholder=\"Dein Name\""+(_vm._ssrAttr("value",(_vm.name)))+(_vm._ssrClass("flex-1 w-full px-5 py-5 text-xl border border-gray-300 rounded-lg focus:ring-4 focus:border-purple-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none",{ 'border-red-500': _vm.error }))+"> <input type=\"text\" placeholder=\"E-Mailadresse\""+(_vm._ssrAttr("value",(_vm.email)))+(_vm._ssrClass("flex-1 w-full px-5 py-5 text-xl border border-gray-300 rounded-lg focus:ring-4 focus:border-purple-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none",{ 'border-red-500': _vm.error }))+"> <br></div> <input type=\"text\" placeholder=\"Nachricht\""+(_vm._ssrAttr("value",(_vm.message)))+(_vm._ssrClass("flex-1 w-full px-5 py-5 pb-32 text-xl border border-gray-300 rounded-lg focus:ring-4 focus:border-purple-700 focus:ring-blue-600 focus:ring-opacity-50 focus:outline-none",{ 'border-red-500': _vm.error }))+"> "),_c('hcaptcha'),_vm._ssrNode(" "+((_vm.success)?("<button class=\"bg-green-400 disabled md:max-w-xs flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none cursor-not-allowed\">Gesendet! 🥳</button>"):("<button class=\"bg-blue-600 md:max-w-xs flex-shrink-0 px-10 py-5 text-2xl font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 focus:ring-offset-2 focus:outline-none\">Senden</button>"))+" "),_vm._ssrNode("<p class=\"text-gray-400\">","</p>",[_vm._ssrNode("Mit dem Klicken auf Senden stimmst du unserer "),_c('NuxtLink',{staticClass:"text-blue-500 underline",attrs:{"to":"/datenschutzerklärung"}},[_vm._v("Datenschutzerklärung")]),_vm._ssrNode(" zu.")],2)],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Kontakt.vue?vue&type=template&id=ba9f8814&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Kontakt.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Kontaktvue_type_script_lang_js_ = ({
  data: () => ({
    name: '',
    email: '',
    message: '',
    error: null,
    success: false
  }),
  methods: {
    async send() {
      this.error = "Irgendetwas ist schief gelaufen. Das geht auf unsere Kappe! Bitte kontaktiere uns direkt über unsere E-Mailadresse (s. oben).";
      /*const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       // add captcha check!
       if (!this.name || !this.email || !this.message || !emailPattern.test(this.email)) {
        return this.error = "Bitte überprüfe deine Angaben und versuche es erneut."
      }
       try {
          var response = await this.$axios.$post('https://mail.headofcontent.de/send-mail', {
            name: this.name,
            absender: this.email,
            nachricht: this.message,
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
      }*/

      plausible('Kontaktanfrage');
    }

  }
});
// CONCATENATED MODULE: ./components/Section/Kontakt.vue?vue&type=script&lang=js&
 /* harmony default export */ var Section_Kontaktvue_type_script_lang_js_ = (Kontaktvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Kontakt.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Section_Kontaktvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7b09fbf8"
  
)

/* harmony default export */ var Kontakt = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=section-kontakt.js.map