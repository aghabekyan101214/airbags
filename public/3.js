(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickFactsComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuickFactsComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: ""
    };
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/get-quick-facts').then(function (response) {
      _this.data = response.data;

      _this.$emit('loaded', true);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickFactsComponent.vue?vue&type=template&id=d5fc7e30&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/QuickFactsComponent.vue?vue&type=template&id=d5fc7e30& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container black-block" }, [
    _c("div", { staticClass: "container" }, [
      _c(
        "div",
        { staticClass: "row" },
        [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-7" }, [
            _c("section", { staticClass: "panel" }, [
              _c(
                "ul",
                { staticClass: "quick-facts-list" },
                _vm._l(_vm.data, function(d) {
                  return _c("li", [
                    _c("span", [_vm._v(_vm._s(d.text))]),
                    _vm._v(" "),
                    d.url !== null
                      ? _c(
                          "a",
                          {
                            staticClass: "to-tweet",
                            attrs: { href: d.url, target: "_blank" }
                          },
                          [_vm._v("Tweet this")]
                        )
                      : _vm._e()
                  ])
                }),
                0
              )
            ])
          ]),
          _vm._v(" "),
          _c("vehicle-search")
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel col-12" }, [
      _c("h3", { staticClass: "sml-title" }, [
        _vm._v(
          "\n                    Quick Facts About the\n                    largest automotive safety\n                    recall in US history:\n                "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/QuickFactsComponent.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/QuickFactsComponent.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickFactsComponent_vue_vue_type_template_id_d5fc7e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickFactsComponent.vue?vue&type=template&id=d5fc7e30& */ "./resources/js/components/QuickFactsComponent.vue?vue&type=template&id=d5fc7e30&");
/* harmony import */ var _QuickFactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickFactsComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/QuickFactsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuickFactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickFactsComponent_vue_vue_type_template_id_d5fc7e30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickFactsComponent_vue_vue_type_template_id_d5fc7e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/QuickFactsComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/QuickFactsComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/QuickFactsComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickFactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./QuickFactsComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickFactsComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickFactsComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/QuickFactsComponent.vue?vue&type=template&id=d5fc7e30&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/QuickFactsComponent.vue?vue&type=template&id=d5fc7e30& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickFactsComponent_vue_vue_type_template_id_d5fc7e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./QuickFactsComponent.vue?vue&type=template&id=d5fc7e30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/QuickFactsComponent.vue?vue&type=template&id=d5fc7e30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickFactsComponent_vue_vue_type_template_id_d5fc7e30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickFactsComponent_vue_vue_type_template_id_d5fc7e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);