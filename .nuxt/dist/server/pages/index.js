exports.ids = [19,2,3,4,7,8,9,10,11,12,14];
exports.modules = {

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("1db565e0", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Content/Beitrag.vue?vue&type=template&id=328d39ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('NuxtLink',{staticClass:"relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4",attrs:{"to":'/aktuelles/' + _vm.id}},[_c('a',{staticClass:"relative block w-full h-64 overflow-hidden rounded",attrs:{"href":"#_"}},[_c('img',{staticClass:"object-cover object-center w-full h-full transition duration-500 ease-out transform scale-100 hover:scale-105",attrs:{"src":'https://cms.headofcontent.de' + _vm.image.formats.medium.url,"alt":_vm.image.alternativeText}})]),_vm._v(" "),_c('p',{staticClass:"text-xs font-bold text-gray-400 uppercase"},[_vm._v("Beitrag")]),_vm._v(" "),_c('a',{staticClass:"block text-2xl font-medium leading-tight text-gray-700 hover:text-gray-900",attrs:{"href":"#_"}},[_vm._v(_vm._s(_vm.title))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Content/Beitrag.vue?vue&type=template&id=328d39ba&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Content/Beitrag.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Beitragvue_type_script_lang_js_ = ({
  props: {
    id: Number,
    image: Object,
    title: String
  }
});
// CONCATENATED MODULE: ./components/Section/Content/Beitrag.vue?vue&type=script&lang=js&
 /* harmony default export */ var Content_Beitragvue_type_script_lang_js_ = (Beitragvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Content/Beitrag.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Content_Beitragvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9aa4ac50"
  
)

/* harmony default export */ var Beitrag = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Content/Video.vue?vue&type=template&id=c6d3621c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('NuxtLink',{staticClass:"relative col-span-12 mb-10 space-y-4 md:col-span-6 lg:col-span-4",attrs:{"to":'/videos/' + _vm.id}},[_c('a',{staticClass:"relative block w-full h-64 overflow-hidden rounded",attrs:{"href":"#_"}},[_c('img',{staticClass:"\n        object-cover object-center\n        w-full\n        h-full\n        transition\n        duration-500\n        ease-out\n        transform\n        scale-100\n        hover:scale-105\n      ",attrs:{"src":'https://cms.headofcontent.de' + _vm.image.formats.medium.url,"alt":_vm.image.alternativeText}})]),_vm._v(" "),_c('p',{staticClass:"text-xs font-bold text-gray-400 uppercase"},[_vm._v(_vm._s(_vm.tag))]),_vm._v(" "),_c('a',{staticClass:"\n      block\n      text-2xl\n      font-medium\n      leading-tight\n      text-gray-700\n      hover:text-gray-900\n    ",attrs:{"href":"#_"}},[_vm._v(_vm._s(_vm.title))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Content/Video.vue?vue&type=template&id=c6d3621c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Content/Video.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Videovue_type_script_lang_js_ = ({
  props: {
    id: Number,
    image: Object,
    tag: String,
    title: String
  },
  methods: {
    navigateToPage: function () {}
  }
});
// CONCATENATED MODULE: ./components/Section/Content/Video.vue?vue&type=script&lang=js&
 /* harmony default export */ var Content_Videovue_type_script_lang_js_ = (Videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Content/Video.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Content_Videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "9e1fc2ae"
  
)

/* harmony default export */ var Video = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(62);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("5240efac", content, true, context)
};

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/4ab8c20.png";

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trailer_vue_vue_type_style_index_0_id_13fd747f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trailer_vue_vue_type_style_index_0_id_13fd747f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trailer_vue_vue_type_style_index_0_id_13fd747f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trailer_vue_vue_type_style_index_0_id_13fd747f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Trailer_vue_vue_type_style_index_0_id_13fd747f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".py-option-wrapper[data-v-13fd747f]{max-height:18.5rem;min-height:18.5rem}.animation[data-v-13fd747f]{-webkit-transform:translateZ();transition:opacity .5s cubic-bezier(.4,0,.2,1);-moz-transition:opacity .5s cubic-bezier(.4,0,.2,1);-o-transition:opacity .5s cubic-bezier(.4,0,.2,1)}@media (min-width:1024px){.trailer-bg[data-v-13fd747f]{transform:translatex(6.5%)}.trailer[data-v-13fd747f]{transform:perspective(1000px) rotateY(-5deg) rotateX(0deg) rotate(0deg) scaleY(.95) translatex(6.5%);transition:transform .5s}.trailer[data-v-13fd747f]:hover{transform:perspective(1000px) rotateY(0deg) rotateX(0deg) rotate(0deg) scaleY(.95) scale(1.1) translatex(12.5%)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/30c0124.png";

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Hero/Trailer.vue?vue&type=template&id=13fd747f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative w-full px-5 rounded-lg lg:w-1/2 xl:px-0 "},[_vm._ssrNode("<div class=\"absolute top-0 left-0 w-11/12 -mt-20 opacity-50 trailer-bg\" data-v-13fd747f><svg viewBox=\"0 0 500 500\" class=\"w-full h-full ml-4 text-blue-100\" data-v-13fd747f><path fill=\"currentColor\" d=\"M45,-78C58.3,-70.3,69,-58.2,75.2,-44.4C81.3,-30.7,82.9,-15.3,83.5,0.4C84.2,16,83.8,32.1,76.5,43.9C69.2,55.7,55.1,63.3,41.2,69.4C27.3,75.4,13.6,80,-0.7,81.2C-15.1,82.5,-30.1,80.3,-41.2,72.6C-52.2,64.9,-59.2,51.6,-67.1,38.5C-75.1,25.5,-83.9,12.8,-83.8,0C-83.8,-12.7,-74.9,-25.4,-65.8,-36.4C-56.7,-47.4,-47.4,-56.7,-36.4,-65.7C-25.4,-74.7,-12.7,-83.5,1.6,-86.2C15.9,-89,31.8,-85.7,45,-78Z\" transform=\"translate(100 100)\" data-v-13fd747f></path></svg></div> <div class=\"wrapper py-option-wrapper trailer relative overflow-hidden rounded-md  cursor-pointer\" data-v-13fd747f><div class=\"absolute right-0 top-0 opacity-0 hover:opacity-100 animation bg-blue-400 py-option-wrapper z-10 object-cover flex items-center justify-center w-full h-full\" data-v-13fd747f><span class=\"flex items-center justify-center w-20 h-20\" data-v-13fd747f><h1 class=\"text-3xl font-extrabold text-white leading-none xl:text-4xl sm:text-center \" data-v-13fd747f>\n                            COMING SOON\n                        </h1></span></div> <div data-v-13fd747f><div class=\"absolute flex items-center justify-center w-full h-full\" data-v-13fd747f><span class=\"flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full shadow-2xl\" data-v-13fd747f><svg viewBox=\"0 0 52 66\" class=\"w-auto h-8 ml-1 text-white fill-current\" data-v-13fd747f><path d=\"M50 30.7L4.1.6C2.6-.4.8.9.8 2.9v60.3c0 2 1.8 3.3 3.3 2.3L50 35.3c1.5-1 1.5-3.6 0-4.6z\" fill-rule=\"nonzero\" data-v-13fd747f></path></svg></span></div> <img"+(_vm._ssrAttr("src",__webpack_require__(55)))+" alt=\"Vorschaubild des Head of Content Kanaltrailers\" class=\"z-10 object-cover w-full h-full\" data-v-13fd747f></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Hero/Trailer.vue?vue&type=template&id=13fd747f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Hero/Trailer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Trailervue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Section/Hero/Trailer.vue?vue&type=script&lang=js&
 /* harmony default export */ var Hero_Trailervue_type_script_lang_js_ = (Trailervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Hero/Trailer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Hero_Trailervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13fd747f",
  "5e3092ca"
  
)

/* harmony default export */ var Trailer = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Team/Member.vue?vue&type=template&id=50a1efd7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"space-y-6 text-center lg:ml-0 md:ml-10 "},[_vm._ssrNode("<div class=\"relative w-48 h-48 p-2 mx-auto md:w-56 md:h-56\"><img"+(_vm._ssrAttr("src",_vm.bild))+" alt class=\"relative z-20 w-full h-full rounded-xl\"> <svg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\""+(_vm._ssrClass("absolute inset-0 w-full h-full transform scale-150 fill-current opacity-10",_vm.farbe))+"><path"+(_vm._ssrAttr("d",_vm.hintergrundForm))+" transform=\"translate(100 100)\"></path></svg></div> <div class=\"space-y-2\"><div class=\"space-y-1 text-lg font-medium leading-6\"><h3>"+_vm._ssrEscape(_vm._s(_vm.name))+"</h3> <p"+(_vm._ssrClass(null,_vm.farbe))+">"+_vm._ssrEscape(" "+_vm._s(_vm.bereich))+"</p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Team/Member.vue?vue&type=template&id=50a1efd7&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Team/Member.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Membervue_type_script_lang_js_ = ({
  props: {
    name: String,
    bild: {
      type: String,
      required: false,
      default: __webpack_require__(58)
    },
    bereich: String,
    farbe: String,
    hintergrundForm: String
  }
});
// CONCATENATED MODULE: ./components/Section/Team/Member.vue?vue&type=script&lang=js&
 /* harmony default export */ var Team_Membervue_type_script_lang_js_ = (Membervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Team/Member.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Team_Membervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1b917990"
  
)

/* harmony default export */ var Member = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_deb9ef0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_deb9ef0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_deb9ef0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_deb9ef0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Hero_vue_vue_type_style_index_0_id_deb9ef0e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".accent[data-v-deb9ef0e]{background-image:linear-gradient(90deg,#3572b8,#56bec4);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/1e294fe.jpg";

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/a051017.jpg";

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/b1f5538.png";

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/0a824b4.jpg";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/42534d1.png";

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Hero.vue?vue&type=template&id=deb9ef0e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"relative flex flex-col items-center justify-center w-full px-6 pb-24 bg-white bg-cover lg:pb- lg:pt-16 min-w-screen"},[_vm._ssrNode("<div class=\"flex flex-col items-center justify-center mx-auto sm:p-6 xl:p-8 lg:flex-row lg:max-w-6xl lg:p-0\" data-v-deb9ef0e>","</div>",[_vm._ssrNode("<div class=\"container relative z-20 flex flex-col w-full px-5 pb-1 pr-12 mb-16 text-2xl text-gray-700 lg:w-1/2 sm:pr-0 md:pr-6 md:pl-0 lg:pl-5 xl:pr-10 sm:items-center lg:items-start lg:mb-0\" data-v-deb9ef0e>","</div>",[_vm._ssrNode("<h1 class=\"relative z-20 text-5xl font-extrabold leading-none xl:text-6xl sm:text-center lg:text-left\" data-v-deb9ef0e><div class=\"accent pb-1\" data-v-deb9ef0e>Junge, unabhänige</div> <span class=\"mt-1 text-gray-800 lg:mt-0\" data-v-deb9ef0e>Reportagen aus der Hauptstadt</span></h1> <p class=\"relative z-20 block mt-6 text-base text-gray-500 xl:text-xl sm:text-center lg:text-left\" data-v-deb9ef0e>Ansprechende politische Berichterstattung für Jugendliche und junge Erwachsene fehlt uns im Internet. Wir sind hier, um das zu ändern.</p> "),_vm._ssrNode("<div class=\"relative flex mt-4\" data-v-deb9ef0e>","</div>",[_c('NuxtLink',{staticClass:"flex items-center self-start justify-center px-5 py-2 mt-5 text-base font-medium leading-tight text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-full shadow lg:py-4 hover:bg-blue-600 focus:outline-none focus:border-blue-600 focus:shadow-outline-blue md:text-lg xl:text-xl md:px-5 xl:px-10",attrs:{"to":"#ueber-uns"}},[_vm._v("Über uns")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"relative flex items-center self-start justify-center py-2 pl-10 pr-5 mt-5 ml-5 text-base font-medium leading-tight text-gray-400 transition duration-150 ease-in-out bg-gray-100 border-transparent rounded-full shadow-sm lg:py-4 md:pl-16 md:pr-5 xl:pr-10 hover:text-blue-500 focus:outline-none md:text-lg xl:text-xl",attrs:{"to":"/videos"}},[_c('svg',{staticClass:"absolute left-0 w-6 h-6 ml-3 md:w-10 md:h-10",attrs:{"fill":"currentColor","viewBox":"0 0 20 20","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z","clip-rule":"evenodd"}})]),_vm._v(" "),_c('span',{staticClass:"text-blue-500"},[_vm._v("Aktuelle Videos")])])],2)],2),_vm._ssrNode(" "),_c('SectionHeroTrailer')],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Hero.vue?vue&type=template&id=deb9ef0e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Hero.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Herovue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Section/Hero.vue?vue&type=script&lang=js&
 /* harmony default export */ var Section_Herovue_type_script_lang_js_ = (Herovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Hero.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(61)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Section_Herovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "deb9ef0e",
  "17f84e74"
  
)

/* harmony default export */ var Hero = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionHeroTrailer: __webpack_require__(59).default})


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Content.vue?vue&type=template&id=3aad0d00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"w-full py-8 bg-white sm:py-12 md:py-16 lg:px-16"},[_vm._ssrNode("<div class=\"px-10 mx-auto max-w-7xl\">","</div>",[_vm._ssrNode("<div class=\"flex items-center justify-between w-full pb-5 mb-8 border-b border-gray-200\">","</div>",[_vm._ssrNode("<h2 class=\"text-3xl font-bold text-gray-800\">Videos</h2> "),_c('NuxtLink',{staticClass:"flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group",attrs:{"to":"/videos"}},[_c('span',[_vm._v("Alle Videos")]),_vm._v(" "),_c('svg',{staticClass:"w-4 h-4 mt-0.5 ml-1",attrs:{"fill":"none","stroke":"currentColor","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M9 5l7 7-7 7"}})])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-12 gap-6\">","</div>",_vm._l((this.videos),function(video){return _c('SectionContentVideo',{key:video.id,attrs:{"id":video.id,"image":video.Vorschaubild,"tag":video.Tag,"title":video.Titel}})}),1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"flex items-center justify-between w-full pb-5 mt-16 mb-8 border-b border-gray-200\">","</div>",[_vm._ssrNode("<h2 class=\"text-3xl font-bold text-gray-800\">Aktuelles</h2> "),_c('NuxtLink',{staticClass:"flex items-center text-base font-semibold text-blue-400 hover:text-blue-500 group",attrs:{"to":"/aktuelles","href":"#_"}},[_c('span',[_vm._v("Alle Beiträge")]),_vm._v(" "),_c('svg',{staticClass:"w-4 h-4 mt-0.5 ml-1",attrs:{"fill":"none","stroke":"currentColor","viewBox":"0 0 24 24","xmlns":"http://www.w3.org/2000/svg"}},[_c('path',{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M9 5l7 7-7 7"}})])])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"grid grid-cols-12 gap-6\">","</div>",_vm._l((this.beiträge),function(beitrag){return _c('SectionContentBeitrag',{key:beitrag.id,attrs:{"id":beitrag.id,"image":beitrag.Beitragsbild,"title":beitrag.Titel}})}),1),_vm._ssrNode(" <div class=\"flex items-center justify-center w-full pb-1 mt-4 mb-6\"><h2 class=\"text-4xl font-bold text-gray-800\">Head of Podcast</h2></div> <iframe src=\"https://open.spotify.com/embed/show/3Hbhfz5FmpmhVqMZfRVEpi?utm_source=headofcontent.de\" width=\"100%\" height=\"232\" frameBorder=\"0\" allowfullscreen=\"allowfullscreen\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\"></iframe>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Content.vue?vue&type=template&id=3aad0d00&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Content.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Contentvue_type_script_lang_js_ = ({
  data: function () {
    return {
      beiträge: [],
      videos: [],
      interviews: []
    };
  },
  created: async function () {
    this.beiträge = await this.$strapi.find('Beitrags', {
      '_limit': 3,
      '_sort': 'created_at:DESC'
    });
    this.videos = await this.$strapi.find('Videos', {
      '_limit': 3,
      '_sort': 'veroeffentlicht:ASC'
    });
  }
});
// CONCATENATED MODULE: ./components/Section/Content.vue?vue&type=script&lang=js&
 /* harmony default export */ var Section_Contentvue_type_script_lang_js_ = (Contentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Content.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Section_Contentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "17e63a46"
  
)

/* harmony default export */ var Content = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionContentVideo: __webpack_require__(53).default,SectionContentBeitrag: __webpack_require__(52).default})


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/ÜberUns.vue?vue&type=template&id=493d755a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"w-full px-8 pt-20 pb-16 bg-white xl:px-0",attrs:{"id":"ueber-uns"}},[_vm._ssrNode("<div class=\"flex flex-col items-start max-w-6xl mx-auto md:flex-row\"><h3 class=\"w-full text-4xl font-extrabold tracking-normal text-gray-900 sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2\">Über uns</h3> <div class=\"flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0\"><p class=\"col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl\">\n              An Berichterstattung zu aktueller Politik mangelt es nicht im Internet. Hunderte Nachrichtenseiten kämpfen mit YouTube-Videos und Blogs um die Aufmerksamkeit der Nutzer:innen. Doch eine Sache hat uns bisher gefehlt: Die Perspektive junger Menschen. Deshalb haben wir uns entschieden unsere eigene Jugendredaktion zu gründen, darüber zu sprechen, was uns bewegt und dort zu berichten, wo wir uns sowieso online aufhalten. Auf YouTube, Instagram und Twitter. Dabei ist unser Anspruch qualitativ hochwertigen Content zu produzieren, der mit anderem Angebot im Netz mithalten kann.\n          </p> <p class=\"col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-9 md:text-xl\">\n              Alle zwei Wochen veröffentlichen wir ein neues Video zu Themen, die uns bewegen. Spannend und ansprechen gestaltet, so dass wir sie uns selbst anschauen würden.\n          </p></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/ÜberUns.vue?vue&type=template&id=493d755a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/ÜberUns.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _berUnsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Section/ÜberUns.vue?vue&type=script&lang=js&
 /* harmony default export */ var Section_berUnsvue_type_script_lang_js_ = (_berUnsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/ÜberUns.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Section_berUnsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3464ed4b"
  
)

/* harmony default export */ var _berUns = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Team.vue?vue&type=template&id=14e4e23d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"w-full py-16 bg-white lg:py-24"},[_vm._ssrNode("<div class=\"px-12 mx-auto text-center max-w-7xl\">","</div>",[_vm._ssrNode("<div class=\"space-y-12 md:text-left\">","</div>",[_vm._ssrNode("<div class=\"mb-20 space-y-5 sm:mx-auto sm:max-w-xl md:max-w-2xl sm:space-y-4 lg:max-w-5xl\">","</div>",[_vm._ssrNode("<h2 class=\"relative text-4xl font-extrabold tracking-tight sm:text-5xl\">Unser Team 👋</h2> "),_vm._ssrNode("<p class=\"text-xl text-gray-500\">","</p>",[_vm._ssrNode("Wir sind das Team von Head of Content. Jede Woche diskutieren wir aufs neue, welche Themen gerade aktuell und spannend sind. Du hast Lust mitzumachen? Dann schreibe uns gerne über unser "),_c('NuxtLink',{staticClass:"font-medium text-blue-500 underline",attrs:{"to":{ path: '/',hash:'#kontakt'}}},[_vm._v("Kontaktformular")]),_vm._ssrNode(".")],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl\">","</div>",[_c('SectionTeamMember',{attrs:{"name":"Gustav","bild":__webpack_require__(63),"bereich":"Moderation, Redaktion","farbe":"text-pink-500","hintergrund-form":"M34.2,-54.9C47,-51.8,62,-48.1,70.2,-38.9C78.4,-29.6,79.9,-14.8,80,0.1C80.2,14.9,78.9,29.9,70.8,39.3C62.6,48.7,47.6,52.6,34.7,57.1C21.7,61.6,10.9,66.7,-1.7,69.7C-14.3,72.7,-28.7,73.6,-42.4,69.6C-56.1,65.5,-69.2,56.5,-74.9,44.1C-80.6,31.7,-79,15.8,-77.6,0.8C-76.2,-14.2,-75,-28.4,-70.1,-42.3C-65.2,-56.2,-56.7,-69.8,-44.4,-73.2C-32.1,-76.6,-16.1,-69.9,-2.7,-65.2C10.7,-60.5,21.3,-58,34.2,-54.9Z"}}),_vm._ssrNode(" "),_c('SectionTeamMember',{attrs:{"name":"Lolan","bild":__webpack_require__(64),"bereich":"Redaktion","farbe":"text-teal-300","hintergrund-form":"M42.7,-73.4C55,-67,64.3,-54.7,69.9,-41.5C75.5,-28.3,77.5,-14.2,76.5,-0.6C75.4,12.9,71.3,25.8,64.6,37.3C57.9,48.7,48.8,58.6,37.6,63.1C26.4,67.5,13.2,66.5,0.8,65.2C-11.6,63.8,-23.2,62.1,-34.9,57.9C-46.6,53.7,-58.4,47.1,-67.1,37.1C-75.9,27,-81.6,13.5,-83.1,-0.9C-84.6,-15.2,-81.9,-30.5,-73.2,-40.7C-64.6,-51,-50.1,-56.4,-36.9,-62.3C-23.8,-68.2,-11.9,-74.6,1.7,-77.5C15.2,-80.4,30.5,-79.8,42.7,-73.4Z"}}),_vm._ssrNode(" "),_c('SectionTeamMember',{attrs:{"name":"Max","bereich":"Redaktion","farbe":"text-yellow-400","hintergrund-form":"M41.4,-70.8C54.1,-64.5,65,-54.1,70.7,-41.7C76.5,-29.2,77.1,-14.6,76.9,-0.1C76.6,14.3,75.5,28.6,68.8,39.5C62.1,50.3,49.9,57.7,37.5,63.5C25.1,69.3,12.5,73.5,-0.6,74.4C-13.6,75.4,-27.3,73.1,-37.6,66.1C-47.9,59.1,-54.8,47.4,-63.1,35.6C-71.4,23.8,-81,11.9,-83.2,-1.3C-85.4,-14.4,-80.1,-28.8,-70.3,-38C-60.5,-47.1,-46.1,-51.1,-33.6,-57.5C-21.2,-64,-10.6,-73,1.9,-76.3C14.4,-79.6,28.8,-77.2,41.4,-70.8Z"}}),_vm._ssrNode(" "),_c('SectionTeamMember',{attrs:{"name":"Paul","bereich":"Redaktion, Schnitt","farbe":"text-blue-300","hintergrund-form":"M34.2,-54.9C47,-51.8,62,-48.1,70.2,-38.9C78.4,-29.6,79.9,-14.8,80,0.1C80.2,14.9,78.9,29.9,70.8,39.3C62.6,48.7,47.6,52.6,34.7,57.1C21.7,61.6,10.9,66.7,-1.7,69.7C-14.3,72.7,-28.7,73.6,-42.4,69.6C-56.1,65.5,-69.2,56.5,-74.9,44.1C-80.6,31.7,-79,15.8,-77.6,0.8C-76.2,-14.2,-75,-28.4,-70.1,-42.3C-65.2,-56.2,-56.7,-69.8,-44.4,-73.2C-32.1,-76.6,-16.1,-69.9,-2.7,-65.2C10.7,-60.5,21.3,-58,34.2,-54.9Z"}}),_vm._ssrNode(" "),_c('SectionTeamMember',{attrs:{"name":"Marek","bereich":"Schnitt","farbe":"text-red-500","bild":__webpack_require__(65),"hintergrund-form":"M42.7,-73.4C55,-67,64.3,-54.7,69.9,-41.5C75.5,-28.3,77.5,-14.2,76.5,-0.6C75.4,12.9,71.3,25.8,64.6,37.3C57.9,48.7,48.8,58.6,37.6,63.1C26.4,67.5,13.2,66.5,0.8,65.2C-11.6,63.8,-23.2,62.1,-34.9,57.9C-46.6,53.7,-58.4,47.1,-67.1,37.1C-75.9,27,-81.6,13.5,-83.1,-0.9C-84.6,-15.2,-81.9,-30.5,-73.2,-40.7C-64.6,-51,-50.1,-56.4,-36.9,-62.3C-23.8,-68.2,-11.9,-74.6,1.7,-77.5C15.2,-80.4,30.5,-79.8,42.7,-73.4Z"}}),_vm._ssrNode(" "),_c('SectionTeamMember',{attrs:{"name":"Konstantin","bild":__webpack_require__(66),"bereich":"Organisation, Redaktion, Schnitt","farbe":"text-purple-400","hintergrund-form":"M34.2,-54.9C47,-51.8,62,-48.1,70.2,-38.9C78.4,-29.6,79.9,-14.8,80,0.1C80.2,14.9,78.9,29.9,70.8,39.3C62.6,48.7,47.6,52.6,34.7,57.1C21.7,61.6,10.9,66.7,-1.7,69.7C-14.3,72.7,-28.7,73.6,-42.4,69.6C-56.1,65.5,-69.2,56.5,-74.9,44.1C-80.6,31.7,-79,15.8,-77.6,0.8C-76.2,-14.2,-75,-28.4,-70.1,-42.3C-65.2,-56.2,-56.7,-69.8,-44.4,-73.2C-32.1,-76.6,-16.1,-69.9,-2.7,-65.2C10.7,-60.5,21.3,-58,34.2,-54.9Z"}})],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/Team.vue?vue&type=template&id=14e4e23d&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/Team.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Teamvue_type_script_lang_js_ = ({
  data() {
    return {
      team: [{
        name: "Gustav Ipsum"
      }],
      shapes: {},
      colors: {}
    };
  }

});
// CONCATENATED MODULE: ./components/Section/Team.vue?vue&type=script&lang=js&
 /* harmony default export */ var Section_Teamvue_type_script_lang_js_ = (Teamvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/Team.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Section_Teamvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "95193cae"
  
)

/* harmony default export */ var Team = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionTeamMember: __webpack_require__(60).default})


/***/ }),

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

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/CallToAction.vue?vue&type=template&id=6fbd3624&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"\n    flex\n    items-center\n    justify-center\n    py-0\n    bg-white bg-gradient-to-br\n    from-indigo-600\n    via-indigo-500\n    to-teal-400\n    min-w-screen\n  "},[_vm._ssrNode("<div class=\"\n      relative\n      flex flex-col\n      items-center\n      w-full\n      max-w-6xl\n      px-4\n      py-8\n      mx-auto\n      text-center\n      lg:text-left\n      lg:block\n      sm:px-6\n      md:pb-0\n      md:pt-12\n      lg:px-12\n      lg:py-12\n    \"><h2 class=\"\n        my-4\n        text-3xl\n        font-extrabold\n        tracking-tight\n        text-white\n        sm:text-4xl\n        md:text-5xl\n        lg:my-0\n        xl:text-4xl\n        sm:leading-tight\n      \">\n      Schau doch mal auf\n      <span class=\"block text-indigo-200 xl:inline\">Instagram</span> vorbei!\n    </h2> <p class=\"\n        mt-1\n        mb-10\n        text-sm\n        font-medium\n        text-indigo-200\n        uppercase\n        xl:text-base\n        xl:tracking-wider\n        lg:mb-0\n      \">\n      Dort findest du regelmäßig spannende Blicke hinter unsere Kulissen.\n    </p> <div class=\"flex mb-8 lg:mt-6 lg:mb-0\"><div class=\"inline-flex\"><a href=\"https://www.instagram.com/headofcontent_\" target=\"_blank\" rel=\"noreferrer\" class=\"\n            inline-flex\n            items-center\n            justify-center\n            px-5\n            py-3\n            text-base\n            font-medium\n            text-indigo-700\n            transition\n            duration-150\n            ease-in-out\n            bg-indigo-100\n            border border-transparent\n            rounded-md\n            hover:text-indigo-600\n            hover:bg-indigo-50\n            focus:outline-none\n            focus:shadow-outline\n            focus:border-indigo-300\n          \">\n          Auf zu Insta\n        </a></div></div> <div class=\"bottom-0 right-0 mb-0 mr-3 lg:absolute lg:-mb-12\"><img"+(_vm._ssrAttr("src",__webpack_require__(67)))+" alt class=\"\n          max-w-xs\n          mb-4\n          opacity-75\n          md:max-w-2xl\n          lg:max-w-lg\n          xl:mb-0\n          xl:max-w-md\n        \"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Section/CallToAction.vue?vue&type=template&id=6fbd3624&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Section/CallToAction.vue?vue&type=script&lang=js&
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
/* harmony default export */ var CallToActionvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/Section/CallToAction.vue?vue&type=script&lang=js&
 /* harmony default export */ var Section_CallToActionvue_type_script_lang_js_ = (CallToActionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Section/CallToAction.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Section_CallToActionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "cf73d94a"
  
)

/* harmony default export */ var CallToAction = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=897c362c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('SectionHero'),_vm._ssrNode(" "),_c('SectionContent'),_vm._ssrNode(" "),_c('SectionÜberUns'),_vm._ssrNode(" "),_c('SectionTeam'),_vm._ssrNode(" "),_c('SectionKontakt'),_vm._ssrNode(" "),_c('SectionCallToAction')],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=897c362c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e6ce66e0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SectionHero: __webpack_require__(73).default,SectionContent: __webpack_require__(74).default,SectionÜberUns: __webpack_require__(75).default,SectionTeam: __webpack_require__(76).default,SectionKontakt: __webpack_require__(77).default,SectionCallToAction: __webpack_require__(78).default})


/***/ })

};;
//# sourceMappingURL=index.js.map