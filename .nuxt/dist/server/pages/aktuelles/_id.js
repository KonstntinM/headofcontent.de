exports.ids = [15];
exports.modules = {

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: /usr/local/lib/node_modules/nuxt/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/aktuelles/_id.vue?vue&type=template&id=4c203538&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<section class=\"w-full px-8 py-16 bg-white xl:px-0\"><div class=\"flex flex-col max-w-3xl mx-auto\"><h3 class=\"\n          text-3xl\n          font-extrabold\n          leading-none\n          sm:text-4xl\n          md:text-5xl\n          leading-7\n        \">"+_vm._ssrEscape("\n        "+_vm._s(this.beitrag.Titel)+"\n      ")+"</h3> <p class=\"\n          mt-1\n          mb-10\n          text-sm\n          font-medium\n          text-gray-500\n          uppercase\n          xl:text-base\n          xl:tracking-wider\n          lg:mb-0\n        \">"+_vm._ssrEscape("\n        Veröffentlicht am "+_vm._s(this.beitrag.veroeffentlicht)+"\n      ")+"</p> <div class=\"my-2 border-b border-gray-300 lg:my-5\"></div> <div class=\"\n          col-span-6\n          text-base\n          font-normal\n          text-gray-700\n          lg:leading-8\n          xl:leading-8\n          md:text-xl\n        \">"+(_vm._s(_vm.$md.render(this.beitrag.Inhalt)))+"</div></div></section>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/aktuelles/_id.vue?vue&type=template&id=4c203538&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!/usr/local/lib/node_modules/nuxt/node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/aktuelles/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data: function () {
    return {
      beitrag: {
        Inhalt: ""
      }
    };
  },
  created: async function () {
    this.beitrag = await this.$strapi.findOne("Beitrags", this.$route.params.id);
    var veroeffentlichungsdatum = this.beitrag.veroeffentlicht || this.beitrag.published_at;
    var veroeffentlicht_am = new Date(veroeffentlichungsdatum);
    this.beitrag.veroeffentlicht = veroeffentlicht_am.toLocaleString('de-DE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
});
// CONCATENATED MODULE: ./pages/aktuelles/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var aktuelles_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/aktuelles/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  aktuelles_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "b519bec4"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map