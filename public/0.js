(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModalComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalComponent */ "./resources/js/components/ModalComponent.vue");
/* harmony import */ var _parts_VideoModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parts/VideoModal */ "./resources/js/components/parts/VideoModal.vue");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobile-device-detect */ "./node_modules/mobile-device-detect/dist/index.js");
/* harmony import */ var mobile_device_detect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-scrollto */ "./node_modules/vue-scrollto/vue-scrollto.js");
/* harmony import */ var vue_scrollto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_scrollto__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_scrollto__WEBPACK_IMPORTED_MODULE_4___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      cars: "",
      staticData: "",
      showModal: false,
      showVideoModal: false,
      carData: "",
      mobile: mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__["isMobileOnly"],
      ios: mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__["isIOS"],
      android: mobile_device_detect__WEBPACK_IMPORTED_MODULE_3__["isAndroid"]
    };
  },
  methods: {
    info: function info(i) {
      this.carData = this.cars[i];
      this.showModal = true;
    }
  },
  components: {
    Modal: _ModalComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    VideoModal: _parts_VideoModal__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    var self = this;
    axios.get('/vehicles', {}).then(function (response) {
      self.cars = response.data;
      self.$emit('loaded', true);
    })["catch"](function (error) {
      console.log(error);
    });
  },
  mounted: function mounted() {
    var hash = window.location.hash;

    if (hash != "undefined") {
      this.$scrollTo(this.$refs.carBlock, 1500);
    }
  }
});
window.addEventListener("load", function (event) {
  var hash = window.location.hash;

  if (hash != "undefined") {
    var top = document.getElementById('car-block').offsetTop;
    console.log(top);
    window.scroll({
      top: top,
      behavior: 'smooth'
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
//
//
//
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
  name: "ModalComponent",
  props: ['data', 'mobile', 'ios', 'android'],
  data: function data() {
    return {
      style: ""
    };
  },
  mounted: function mounted() {
    if (this.$props.data.urls.length > 1) {
      this.style = "margin-bottom: 30px;";
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/VideoModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      staticData: {}
    };
  },
  created: function created() {
    var self = this;
    axios.get('/static', {}).then(function (response) {
      self.staticData = response.data;
    })["catch"](function (error) {
      console.log(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.play-button[data-v-782dcf83] {\n    position: absolute;\n    height: 80px;\n    width: 80px;\n    top: 62%;\n    opacity: 0.7;\n    left: 50%;\n    -webkit-transform: translate(-50%, -12%);\n            transform: translate(-50%, -12%);\n}\n.panel img[data-v-782dcf83] {\n    margin-top: 10px;\n}\n.cursor-pointer[data-v-782dcf83] {\n    cursor: pointer;\n}\n@media (max-width: 600px) {\n.panel[data-v-782dcf83] {\n        padding: 20px 0 15px 0;\n}\n.play-icon[data-v-782dcf83] {\n        display: none;\n}\n.play-icon-mobile[data-v-782dcf83] {\n        display: block;\n        width: auto!important;\n        height: 80px;\n}\n.text[data-v-782dcf83] {\n        position: absolute;\n        top: 76%;\n        font-size: 14px;\n        color: #fff;\n        width: 100%;\n        text-align: center;\n        padding: 0 30px;\n}\n}\n@media (min-width: 1200px) {\n.text-block p[data-v-782dcf83] {\n\n        font-size: 32px;\n        font-family: \"Montserrat\";\n        color: rgb(255, 255, 255);\n        line-height: 1.25;\n}\n.text-block[data-v-782dcf83] {\n        position: absolute;\n        right: 15%;\n        top: 20%;\n}\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (max-width: 600px) {\n.modal-mask[data-v-4b2d100a] {\n        position: fixed;\n        z-index: 9998;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: table;\n        -webkit-transition: opacity .3s ease;\n        transition: opacity .3s ease;\n}\n.model-description[data-v-4b2d100a] {\n        height: 100vh;\n}\n.modal-container[data-v-4b2d100a] {\n        width: auto!important;\n}\n}\n@media(min-width: 1200px) {\n.contact-vehicle[data-v-4b2d100a] {\n        display: -webkit-box;\n        display: flex;\n}\n.contact-icon[data-v-4b2d100a] {\n        background-size: 17px;\n}\n.contact-vehicle a[data-v-4b2d100a] {\n        padding-left: 30px;\n        line-height: 18px;\n}\n.recall-vehicle[data-v-4b2d100a] {\n        font-size: 24px;\n}\n.recall-cars div[data-v-4b2d100a] {\n        line-height: 2.222;\n}\n}\n.modal-mask[data-v-4b2d100a] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .5);\n    display: table;\n    -webkit-transition: opacity .3s ease;\n    transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-4b2d100a] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-4b2d100a] {\n    margin: 0px auto;\n    background-color: #fff;\n    width: 650px;\n    border-radius: 2px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n}\n.modal-header h3[data-v-4b2d100a] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-4b2d100a] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-4b2d100a] {\n    float: right;\n}\n.contact-list[data-v-4b2d100a] {\n    line-height: 1.125;\n    font-size: 24px;\n}\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-4b2d100a] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-4b2d100a] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-4b2d100a],\n.modal-leave-active .modal-container[data-v-4b2d100a] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n.fz-17[data-v-4b2d100a] {\n    font-size: 17px;\n}\n.model-description[data-v-4b2d100a] {\n    position: relative;\n}\n.close-btn[data-v-4b2d100a] {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    height: 20px;\n}\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@media (min-width: 1200px) {\n.modal-container[data-v-882f9128] {\n        height: 500px;\n        text-align: center;\n}\nvideo[data-v-882f9128]{\n        height: 100%;\n        width: auto!important;\n}\n}\nvideo[data-v-882f9128] {\n    width: 100%;\n}\n.modal-mask[data-v-882f9128] {\n    position: fixed;\n    z-index: 9998;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0, 0, 0, .7);\n    display: table;\n    -webkit-transition: opacity .3s ease ;\n    transition: opacity .3s ease ;\n}\n.modal-wrapper[data-v-882f9128] {\n    display: table-cell;\n    vertical-align: middle;\n}\n.modal-container[data-v-882f9128] {\n    width: 100%;\n    margin: 0px auto;\n    border-radius: 2px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);\n    -webkit-transition: all .3s ease;\n    transition: all .3s ease;\n    font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-882f9128] {\n    margin-top: 0;\n    color: #42b983;\n}\n.modal-body[data-v-882f9128] {\n    margin: 20px 0;\n}\n.modal-default-button[data-v-882f9128] {\n    float: right;\n}\n.modal-enter[data-v-882f9128] {\n    opacity: 0;\n}\n.modal-leave-active[data-v-882f9128] {\n    opacity: 0;\n}\n.modal-enter .modal-container[data-v-882f9128],\n.modal-leave-active .modal-container[data-v-882f9128] {\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("section", { staticClass: "video-block" }, [
        _c("div", { staticClass: "video-content" }, [
          _c("img", {
            staticClass: "video-desktop",
            attrs: { src: "/site/images/video-img-desktop.png" }
          }),
          _vm._v(" "),
          _c("div", { staticClass: "video-details" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "dropdown" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary dropdown-toggle",
                  attrs: { type: "button", "data-toggle": "dropdown" }
                },
                [
                  _vm._v(
                    "\n                            SEE IF YOUR VEHICLE IS ON THE LIST\n                        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "dropdown-menu" },
                [
                  _c("router-link", { attrs: { to: "/vin-lookup" } }, [
                    _c("button", { staticClass: "dropdown-item" }, [
                      _vm._v("SEARCH BY VIN OR LICENSE PLATE")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      directives: [
                        {
                          name: "scroll-to",
                          rawName: "v-scroll-to",
                          value: "#car-block",
                          expression: "'#car-block'"
                        }
                      ],
                      staticClass: "dropdown-item",
                      attrs: { href: "#car-block" }
                    },
                    [_vm._v("SEARCH BY VEHICLE BRAND")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("p", { staticClass: "txt-sml" }, [
                _vm._v(
                  "\n                            Morgan Freeman discusses the serious\n                            nature of the Takata Airbag Recall.\n                        "
                )
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "play-icon",
                  on: {
                    click: function($event) {
                      _vm.showVideoModal = true
                    }
                  }
                },
                [_vm._v("WATCH NOW")]
              ),
              _vm._v(" "),
              _c("img", {
                staticClass: "play-icon-mobile",
                attrs: {
                  src: "/site/images/play-icon-mobile.png",
                  alt: "play-icon"
                },
                on: {
                  click: function($event) {
                    _vm.showVideoModal = true
                  }
                }
              })
            ])
          ])
        ]),
        _vm._v(" "),
        _vm._m(1),
        _vm._v(" "),
        _vm._m(2)
      ]),
      _vm._v(" "),
      _c("section", { staticClass: "model-details" }, [
        _c("div", { staticClass: "panel" }, [
          _c("h2", [_vm._v("SEARCH BY VEHICLE BRAND")]),
          _vm._v(" "),
          _c("p", [_vm._v("choose from the list below")]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              directives: [
                {
                  name: "scroll-to",
                  rawName: "v-scroll-to",
                  value: "#car-block",
                  expression: "'#car-block'"
                }
              ],
              staticClass: "cursor-pointer",
              attrs: {
                height: "30",
                src: "/site/images/arrow_down.png",
                alt: ""
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "carBlock",
            staticClass: "car-block",
            attrs: { id: "car-block" }
          },
          [
            _c(
              "div",
              { staticClass: "container car-block-inner" },
              _vm._l(_vm.cars, function(car, i) {
                return _c("div", [
                  _c("img", {
                    staticClass: "cursor-pointer",
                    attrs: { src: "/storage/" + car.img, alt: car.name },
                    on: {
                      click: function($event) {
                        return _vm.info(i)
                      }
                    }
                  })
                ])
              }),
              0
            )
          ]
        )
      ]),
      _vm._v(" "),
      _vm.showModal
        ? _c("Modal", {
            attrs: {
              data: _vm.carData,
              mobile: _vm.mobile,
              ios: _vm.ios,
              android: _vm.android
            },
            on: {
              close: function($event) {
                _vm.showModal = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.showVideoModal
        ? _c("video-modal", {
            on: {
              close: function($event) {
                _vm.showVideoModal = false
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "desktop-details" }, [
      _c("p", [
        _vm._v(
          "\n                            “1 out of 6 vehicles have been\n                            affected by the "
        ),
        _c("span", { staticClass: "yellow-txt" }, [
          _vm._v("Takata Airbag Recall.")
        ]),
        _vm._v(
          "\n                            Check to see if yours is one.\n\n                            It could save your life.”\n                        "
        )
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("p", [_vm._v("It could save your life.”")]),
      _vm._v(" "),
      _c("p", [_vm._v("- Morgan")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "video-content" }, [
      _c("img", {
        staticClass: "video-mobile",
        attrs: { src: "/site/images/video-img-mobile.png" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dropdown" }, [
      _c("div", { staticClass: "dropdown-menu" }, [
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("SEARCH BY VIN OR LICENSE PLATE")
        ]),
        _vm._v(" "),
        _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
          _vm._v("SEARCH BY VEHICLE BRAND")
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-container" }, [
          _c("div", { staticClass: "model-description" }, [
            _c("h3", [_vm._v(_vm._s(_vm.data.name))]),
            _vm._v(" "),
            _c("img", {
              staticClass: "modal-default-button close-btn cursor-pointer",
              attrs: { src: "/site/images/close.png", alt: "close" },
              on: {
                click: function($event) {
                  return _vm.$emit("close")
                }
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "recall-vehicle" }, [
              _vm._v("Vehicles under recall:")
            ]),
            _c("br"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "recall-cars row" },
              _vm._l(_vm.data.makes, function(car, i) {
                return _c(
                  "div",
                  { staticClass: "col-md-6 col-lg-6 col-xs-12" },
                  [_vm._v(_vm._s(car.make)), _c("br")]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "contact-list" }, [
              _vm._v(
                "\n                        If your vehicle is on the list, call "
              ),
              _c("br"),
              _vm._v(
                "\n                        to schedule your FREE repair\n                    "
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "contact-vehicle" },
              [
                _vm.data.phone !== ""
                  ? _c(
                      "a",
                      {
                        staticClass: "contact-icon detail-icon",
                        staticStyle: {
                          color: "white",
                          "text-decoration": "none"
                        },
                        attrs: { href: "tel:" + _vm.data.phone }
                      },
                      [_vm._v(_vm._s(_vm.data.phone))]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm._l(_vm.data.urls, function(url, i) {
                  return _c(
                    "a",
                    {
                      staticClass: "visit-icon detail-icon",
                      style: "color: white; text-decoration: none;" + _vm.style,
                      attrs: { target: "_blank", href: url.url }
                    },
                    [
                      _vm.data.urls.length > 1
                        ? _c("span", { staticClass: "fz-17" }, [
                            i == 0
                              ? _c(
                                  "span",
                                  { staticStyle: { display: "inline" } },
                                  [
                                    _vm._v(
                                      "Dodge and Mercedes-Benz Sprinter Customers,"
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            i == 1
                              ? _c(
                                  "span",
                                  { staticStyle: { display: "inline" } },
                                  [_vm._v("Freightliner Sprinter Customers,")]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass: "fz-17",
                                staticStyle: {
                                  "text-decoration": "underline",
                                  display: "inline"
                                }
                              },
                              [_vm._v("Visit our Website")]
                            )
                          ])
                        : _vm.data.urls.length === 1
                        ? _c("span", [_vm._v("Visit our Website")])
                        : _vm._e()
                    ]
                  )
                }),
                _vm._v(" "),
                _vm.data.text == "1" && _vm.mobile && _vm.data.phone !== ""
                  ? _c(
                      "a",
                      {
                        staticClass: "text-icon detail-icon",
                        staticStyle: {
                          color: "white",
                          "text-decoration": "none"
                        },
                        attrs: { href: "sms:/" + _vm.data.phone }
                      },
                      [_vm._v("Click to text")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c("a")
              ],
              2
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=template&id=882f9128&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/parts/VideoModal.vue?vue&type=template&id=882f9128&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c(
        "div",
        {
          staticClass: "modal-wrapper",
          on: {
            click: function($event) {
              return _vm.$emit("close")
            }
          }
        },
        [
          _c("div", { staticClass: "modal-container" }, [
            _c("video", { attrs: { controls: "" } }, [
              _vm.staticData.home_video
                ? _c("source", {
                    attrs: {
                      src: "/storage/" + _vm.staticData.home_video,
                      type: "video/mp4"
                    }
                  })
                : _vm._e()
            ])
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/HomeComponent.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& */ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&");
/* harmony import */ var _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& */ "./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "782dcf83",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/HomeComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=style&index=0&id=782dcf83&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_style_index_0_id_782dcf83_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/HomeComponent.vue?vue&type=template&id=782dcf83&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HomeComponent_vue_vue_type_template_id_782dcf83_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/ModalComponent.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalComponent_vue_vue_type_template_id_4b2d100a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true& */ "./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true&");
/* harmony import */ var _ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ModalComponent_vue_vue_type_style_index_0_id_4b2d100a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css& */ "./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalComponent_vue_vue_type_template_id_4b2d100a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ModalComponent_vue_vue_type_template_id_4b2d100a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b2d100a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_4b2d100a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=style&index=0&id=4b2d100a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_4b2d100a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_4b2d100a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_4b2d100a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_4b2d100a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_style_index_0_id_4b2d100a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ModalComponent.vue?vue&type=template&id=4b2d100a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalComponent_vue_vue_type_template_id_4b2d100a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/parts/VideoModal.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/parts/VideoModal.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VideoModal_vue_vue_type_template_id_882f9128_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VideoModal.vue?vue&type=template&id=882f9128&scoped=true& */ "./resources/js/components/parts/VideoModal.vue?vue&type=template&id=882f9128&scoped=true&");
/* harmony import */ var _VideoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VideoModal.vue?vue&type=script&lang=js& */ "./resources/js/components/parts/VideoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VideoModal_vue_vue_type_style_index_0_id_882f9128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css& */ "./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VideoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VideoModal_vue_vue_type_template_id_882f9128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VideoModal_vue_vue_type_template_id_882f9128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "882f9128",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/parts/VideoModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/parts/VideoModal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/parts/VideoModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_style_index_0_id_882f9128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=style&index=0&id=882f9128&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_style_index_0_id_882f9128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_style_index_0_id_882f9128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_style_index_0_id_882f9128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_style_index_0_id_882f9128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_style_index_0_id_882f9128_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/parts/VideoModal.vue?vue&type=template&id=882f9128&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/parts/VideoModal.vue?vue&type=template&id=882f9128&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_template_id_882f9128_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./VideoModal.vue?vue&type=template&id=882f9128&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/parts/VideoModal.vue?vue&type=template&id=882f9128&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_template_id_882f9128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoModal_vue_vue_type_template_id_882f9128_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);