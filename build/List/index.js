(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "list-container"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "classList": [
        "list-main"
      ],
      "events": {
        "scrollbottom": "loadMoreData"
      },
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "goods"
          },
          "classList": [
            "list-item"
          ],
          "repeat": function () {return this.list},
          "events": {
            "click": function (evt) {this.openWebView(this.$item.ticket_url,evt)}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-item-content"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "classList": [
                    "list-item-image"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.img}
                      }
                    },
                    {
                      "type": "text",
                      "attr": {
                        "show": function () {return !!this.$item.recommend_flag},
                        "value": function () {return this.$item.recommend_flag}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "list-item-info"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item.goods_name}
                      },
                      "classList": [
                        "list-item-info-name"
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {
                        "show": function () {return !!(this.$item.wap_tag.length===2)}
                      },
                      "classList": [
                        "list-item-info-label"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.$item.wap_tag[0]['value']}
                          },
                          "classList": [
                            "time"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "classList": [
                            "discount"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "show": function () {return this.$item.coupons_status!=='2'},
                                "value": function () {return this.$item.coupon_info.show_type==='1'?'用券':'立减'}
                              },
                              "classList": [
                                "discount-label"
                              ]
                            },
                            {
                              "type": "block",
                              "attr": {},
                              "shown": function () {return !!this.$item.wap_tag[1]},
                              "children": [
                                {
                                  "type": "text",
                                  "attr": {
                                    "value": function () {return this.$item.wap_tag[1]['value']}
                                  },
                                  "classList": [
                                    "discount-text"
                                  ]
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {
                        "show": function () {return this.$item.wap_tag.length<2}
                      },
                      "classList": [
                        "list-item-info-label"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "attr": {
                            "show": function () {return this.$item.wap_tag[0]['class']==='ticketing_time'},
                            "value": function () {return this.$item.wap_tag[0]['value']}
                          },
                          "classList": [
                            "time"
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {
                            "show": function () {return this.$item.wap_tag[0]['class']!=='ticketing_time'}
                          },
                          "classList": [
                            "discount"
                          ],
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "show": function () {return this.$item.coupons_status!=='2'},
                                "value": function () {return this.$item.coupon_info.show_type==='1'?'用券':'立减'}
                              },
                              "classList": [
                                "discount-label"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.wap_tag[0]['value']}
                              },
                              "classList": [
                                "discount-text"
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "list-item-info-bottom"
                      ],
                      "children": [
                        {
                          "type": "div",
                          "attr": {},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": "￥"
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return this.$item.min_final_price}
                              },
                              "classList": [
                                "low-price"
                              ]
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": "起"
                              }
                            },
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return '￥' + (this.$item.min_retail_price)}
                              },
                              "classList": [
                                "high-price"
                              ]
                            }
                          ]
                        },
                        {
                          "type": "div",
                          "attr": {},
                          "children": [
                            {
                              "type": "text",
                              "attr": {
                                "value": function () {return (this.$item.sales_volume) + (this.$item.rec_suffix)}
                              },
                              "classList": [
                                "sale"
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "list-item-border"
              ]
            }
          ]
        },
        {
          "type": "list-item",
          "attr": {
            "type": "loadMore",
            "show": function () {return this.pagination['next_page']!==this.pagination['page_count']}
          },
          "classList": [
            "load-more"
          ],
          "children": [
            {
              "type": "progress",
              "attr": {
                "type": "circular"
              }
            },
            {
              "type": "text",
              "attr": {
                "value": "加载更多"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
  ".list-item": {
    "flexDirection": "column"
  },
  ".list-item-content": {
    "paddingTop": "30px",
    "paddingRight": "30px",
    "paddingBottom": "30px",
    "paddingLeft": "24px"
  },
  ".list-item-border": {
    "marginTop": "0px",
    "marginRight": "30px",
    "marginBottom": "0px",
    "marginLeft": "30px",
    "borderTopWidth": "0px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#E1E1E1",
    "borderRightColor": "#E1E1E1",
    "borderBottomColor": "#E1E1E1",
    "borderLeftColor": "#E1E1E1"
  },
  ".list-item-image": {
    "marginRight": "20px",
    "paddingLeft": "6px"
  },
  ".list-item-image text": {
    "fontSize": "20px",
    "lineHeight": "34px",
    "height": "34px",
    "color": "#FFFFFF",
    "paddingTop": "0px",
    "paddingRight": "8px",
    "paddingBottom": "0px",
    "paddingLeft": "8px",
    "backgroundColor": "#E5004F",
    "borderRadius": "4px",
    "borderBottomLeftRadius": "0px",
    "transform": "{\"translateX\":\"0px\",\"translateY\":\"16px\"}",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-image"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".list-item image": {
    "width": "240px",
    "height": "180px",
    "borderRadius": "8px",
    "resizeMode": "cover",
    "marginLeft": "6px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "image"
        }
      ]
    }
  },
  ".list-item-info": {
    "flex": 1,
    "alignItems": "flex-start",
    "flexDirection": "column"
  },
  ".list-item-info-name": {
    "fontSize": "28px",
    "lineHeight": "35px",
    "flexWrap": "wrap",
    "textOverflow": "ellipsis",
    "color": "#333333",
    "lines": 2
  },
  ".list-item-info-label": {
    "marginTop": "20px"
  },
  ".list-item-info-label > text": {
    "marginRight": "10px",
    "paddingTop": "0px",
    "paddingRight": "8px",
    "paddingBottom": "0px",
    "paddingLeft": "8px",
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-label"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".list-item-info-label text": {
    "fontSize": "20px",
    "lineHeight": "30px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-label"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".list-item-info-label > div": {
    "borderRadius": "4px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-label"
        },
        {
          "t": "child"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".list-item-info-label .time": {
    "color": "#4e7cdd",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#4e7cdd",
    "borderRightColor": "#4e7cdd",
    "borderBottomColor": "#4e7cdd",
    "borderLeftColor": "#4e7cdd",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-label"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "time"
        }
      ]
    }
  },
  ".list-item-info-label .discount": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#f65e73",
    "borderRightColor": "#f65e73",
    "borderBottomColor": "#f65e73",
    "borderLeftColor": "#f65e73",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-label"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "discount"
        }
      ]
    }
  },
  ".list-item-info-label .discount-label": {
    "paddingTop": "0px",
    "paddingRight": "4px",
    "paddingBottom": "0px",
    "paddingLeft": "4px",
    "backgroundColor": "#f65e73",
    "borderRadius": "4px",
    "borderTopRightRadius": "0px",
    "borderBottomRightRadius": "0px",
    "color": "#FFFFFF",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-label"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "discount-label"
        }
      ]
    }
  },
  ".list-item-info-label .discount-text": {
    "color": "#f65e73",
    "paddingTop": "0px",
    "paddingRight": "8px",
    "paddingBottom": "0px",
    "paddingLeft": "8px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-label"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "discount-text"
        }
      ]
    }
  },
  ".list-item-info-bottom": {
    "marginTop": "20px",
    "width": "100%"
  },
  ".list-item-info-bottom div": {
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-bottom"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "div"
        }
      ]
    }
  },
  ".list-item-info-bottom text": {
    "color": "#f40256",
    "fontSize": "24px",
    "lineHeight": "24px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-bottom"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "text"
        }
      ]
    }
  },
  ".list-item-info-bottom .low-price": {
    "fontSize": "38px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-bottom"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "low-price"
        }
      ]
    }
  },
  ".list-item-info-bottom .high-price": {
    "color": "#999999",
    "textDecoration": "line-through",
    "marginLeft": "10px",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-bottom"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "high-price"
        }
      ]
    }
  },
  ".list-item-info-bottom .sale": {
    "flex": 1,
    "textAlign": "right",
    "color": "#333333",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "list-item-info-bottom"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "sale"
        }
      ]
    }
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.fetch');

var _system2 = _interopRequireDefault(_system);

var _system3 = $app_require$('@app-module/system.webview');

var _system4 = _interopRequireDefault(_system3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  data: {
    list: [],
    pagination: {}
  },

  openWebView: function openWebView(url) {
    _system4.default.loadUrl({
      url: url
    });
  },
  loadData: function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new Promise(function (resolve, reject) {
                _system2.default.fetch({
                  url: 'http://192.168.1.102:3000/api/list',
                  data: query,
                  success: function success(res) {
                    var code = res.code,
                        data = res.data;


                    if (code === 200) {

                      resolve(JSON.parse(data)['data']);
                    }
                  },
                  fail: function fail(data, code) {
                    reject({
                      code: code,
                      data: data
                    });
                  }
                });
              });

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadData() {
      return _ref.apply(this, arguments);
    }

    return loadData;
  }(),
  loadMoreData: function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
      var next_page, data;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              next_page = this.pagination.next_page;
              _context2.next = 3;
              return this.loadData({
                p: next_page
              });

            case 3:
              data = _context2.sent;


              this.list = this.list.concat(data.list);

              this.pagination = data.pagination;

              if (data.pagination['next_page'] === data.pagination['page_count']) {
                this.isLastPage = true;
              }

            case 7:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function loadMoreData() {
      return _ref2.apply(this, arguments);
    }

    return loadMoreData;
  }(),
  onInit: function () {
    var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
      var data;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.loadData();

            case 2:
              data = _context3.sent;


              console.log(data);

              this.list = data.list;
              this.pagination = data.pagination;

            case 6:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function onInit() {
      return _ref3.apply(this, arguments);
    }

    return onInit;
  }()
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map