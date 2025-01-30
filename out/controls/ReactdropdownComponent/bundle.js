/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ReactdropdownComponent/Multidropdown.tsx":
/*!**************************************************!*\
  !*** ./ReactdropdownComponent/Multidropdown.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Multidropdown: () => (/* binding */ Multidropdown)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fluentui/react-components */ \"@fluentui/react-components\");\n/* harmony import */ var _fluentui_react_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nclass Multidropdown extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor() {\n    var _this;\n    var _a;\n    super(...arguments);\n    _this = this;\n    this.state = {\n      selectedCommodityText: this.props.context.parameters.MVHCommodityText.raw || \"\",\n      filteredRecords: this.props.records,\n      isOpen: {},\n      isTreeVisible: false,\n      selectedCommodityGuid: ((_a = this.props.context.parameters.MVHCommodityGUID) === null || _a === void 0 ? void 0 : _a.raw) || null,\n      validationError: null\n    };\n    this.handleSearchChange = e => {\n      var selectedCommodityText = e.target.value;\n      this.setState({\n        selectedCommodityText,\n        selectedCommodityGuid: null,\n        validationError: null,\n        isTreeVisible: true\n      }, () => {\n        this.filterRecords(selectedCommodityText);\n      });\n    };\n    this.filterRecords = selectedCommodityText => {\n      var {\n        records\n      } = this.props;\n      if (selectedCommodityText.trim() === \"\") {\n        this.setState({\n          filteredRecords: records\n        });\n        return;\n      }\n      var filterRecords = options => {\n        return options.map(option => {\n          var subOptions = option.subOptions ? filterRecords(option.subOptions) : null;\n          if (option.name.toLowerCase().includes(selectedCommodityText.toLowerCase()) || subOptions && subOptions.length > 0) {\n            return Object.assign(Object.assign({}, option), {\n              subOptions\n            });\n          }\n          return null;\n        }).filter(Boolean);\n      };\n      this.setState({\n        filteredRecords: filterRecords(records)\n      });\n    };\n    this.handleOptionClick = option => {\n      this.props.SelectedValue(option.name, option.key);\n      this.props.notifyOutputChanged();\n      this.setState({\n        selectedCommodityText: option.name,\n        selectedCommodityGuid: option.key,\n        validationError: null,\n        isTreeVisible: false\n      });\n    };\n    this.validateSelection = () => {\n      if (!this.state.selectedCommodityGuid) {\n        var error = \"Please select a commodity.\";\n        this.setState({\n          validationError: error\n        }, () => {\n          this.props.notifyOutputChanged(); // Notify the model-driven app\n        });\n        return false;\n      }\n      this.setState({\n        validationError: null\n      }, () => {\n        this.props.notifyOutputChanged(); // Clear error if validation passes\n      });\n      return true;\n    };\n    this.renderOptions = function (options) {\n      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"multidropdown__nested-options\",\n        style: {\n          paddingLeft: level * 20,\n          paddingTop: \"5px\"\n        }\n      }, options.map(option => (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        key: option.key,\n        className: \"multidropdown__option-container\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        href: \"#\",\n        className: \"multidropdown__link \".concat(option.subOptions ? \"multidropdown__has-submenu\" : \"\"),\n        onClick: e => {\n          e.preventDefault();\n          if (option.subOptions) {\n            var key = \"\".concat(option.key, \"_open\");\n            _this.setState(prevState => ({\n              isOpen: Object.assign(Object.assign({}, prevState.isOpen), {\n                [key]: !prevState.isOpen[key]\n              })\n            }));\n          } else {\n            _this.handleOptionClick(option);\n          }\n        },\n        style: {\n          display: \"flex\",\n          alignItems: \"center\",\n          justifyContent: \"space-between\",\n          width: \"100%\",\n          backgroundColor: \"transparent\",\n          border: \"none\",\n          cursor: \"pointer\",\n          textAlign: \"left\",\n          fontSize: \"14px\",\n          padding: \"5px 10px\",\n          margin: \"3px 0\",\n          textDecoration: \"none\",\n          color: \"#0078d4\"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", null, option.name), option.subOptions && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"multidropdown__submenu-indicator\",\n        style: {\n          fontSize: \"18px\",\n          paddingLeft: \"8px\",\n          transform: _this.state.isOpen[\"\".concat(option.key, \"_open\")] ? \"rotate(90deg)\" : \"rotate(0deg)\",\n          transition: \"transform 0.3s ease\"\n        }\n      }, \"\\u25B6\"))), option.subOptions && _this.state.isOpen[\"\".concat(option.key, \"_open\")] && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"multidropdown__submenu\"\n      }, _this.renderOptions(option.subOptions, level + 1)))))));\n    };\n  }\n  render() {\n    var {\n      filteredRecords,\n      selectedCommodityText,\n      isTreeVisible,\n      validationError\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"multidropdown__container\",\n      style: {\n        width: \"250px\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      style: {\n        display: \"flex\",\n        alignItems: \"center\",\n        gap: \"10px\",\n        marginBottom: \"10px\"\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n      type: \"text\",\n      value: selectedCommodityText,\n      onChange: this.handleSearchChange,\n      placeholder: \"Search by commodity name\",\n      style: {\n        flex: 1,\n        padding: \"5px\",\n        fontSize: \"14px\",\n        border: \"1px solid #ccc\",\n        borderRadius: \"4px\"\n      }\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_components__WEBPACK_IMPORTED_MODULE_1__.Button, {\n      onClick: () => {\n        this.setState(prevState => ({\n          isTreeVisible: !prevState.isTreeVisible\n        }), () => {\n          this.filterRecords(this.state.selectedCommodityText);\n        });\n      },\n      style: {\n        marginLeft: \"5px\",\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        padding: \"5px\",\n        minWidth: \"32px\"\n      }\n    }, \"\\u25BC\")), isTreeVisible && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"multidropdown__dropdown\",\n      style: {\n        maxHeight: \"300px\",\n        overflowY: \"auto\",\n        backgroundColor: \"#fff\",\n        border: \"1px solid #ccc\",\n        borderRadius: \"5px\",\n        boxShadow: \"0 4px 6px rgba(0, 0, 0, 0.1)\",\n        marginTop: \"10px\",\n        padding: \"10px\",\n        position: \"absolute\",\n        zIndex: 1000\n      }\n    }, this.renderOptions(filteredRecords))), validationError && (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      style: {\n        color: \"red\",\n        marginTop: \"5px\",\n        fontSize: \"12px\"\n      }\n    }, validationError)));\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ReactdropdownComponent/Multidropdown.tsx?");

/***/ }),

/***/ "./ReactdropdownComponent/index.ts":
/*!*****************************************!*\
  !*** ./ReactdropdownComponent/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReactdropdownComponent: () => (/* binding */ ReactdropdownComponent)\n/* harmony export */ });\n/* harmony import */ var _Multidropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Multidropdown */ \"./ReactdropdownComponent/Multidropdown.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n//index.ts\nvar __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n // Ensure the path is correct\n\nclass ReactdropdownComponent {\n  constructor() {\n    //private records: any[] = [];\n    //private hierarchy: any[] = []; // Hierarchical structure for the dropdown\n    this.hierarchyState = [];\n    /**\r\n     * Convert raw records into a hierarchical structure\r\n     * @param data - Array of records\r\n     */\n    this.convertToHierarchyMVH = data => {\n      var hierarchy = [];\n      data.forEach(item => {\n        // Find or create Level 1\n        var level1 = hierarchy.find(l1 => l1.name === item.mvh_l1commoditycalculated);\n        if (!level1) {\n          level1 = {\n            name: item.mvh_l1commoditycalculated,\n            key: item.mvh_l3commoditiesid,\n            subOptions: []\n          };\n          hierarchy.push(level1);\n        }\n        // If Level 2 exists, find or create it\n        if (item.mvh_l2commoditycalculated) {\n          var level2 = level1.subOptions.find(l2 => l2.name === item.mvh_l2commoditycalculated);\n          if (!level2) {\n            level2 = {\n              name: item.mvh_l2commoditycalculated,\n              //key: item.mvh_L2Commodity.mvh_l2commodityid,\n              key: item.mvh_l3commoditiesid,\n              subOptions: []\n            };\n            level1.subOptions.push(level2);\n          }\n          // If Level 3 exists, add it to Level 2\n          if (item.mvh_l3commodityname) {\n            level2.subOptions.push({\n              name: item.mvh_l3commodityname,\n              key: item.mvh_l3commoditiesid\n            });\n          } else {\n            level2.subOptions = null;\n          }\n        }\n      });\n      return hierarchy;\n    };\n    this.convertToHierarchyVCA = data => {\n      var hierarchy = [];\n      data.forEach(item => {\n        // Find or create Level 1\n        var level1 = hierarchy.find(l1 => l1.name === item.mvh_l1commoditycalculated);\n        if (!level1) {\n          level1 = {\n            name: item.mvh_l1commoditycalculated,\n            key: item.mvh_vcal2commodityid,\n            subOptions: []\n          };\n          hierarchy.push(level1);\n        }\n        // If Level 2 exists, add it to Level 1\n        if (item.mvh_l2commodityname) {\n          level1.subOptions.push({\n            name: item.mvh_l2commodityname,\n            key: item.mvh_vcal2commodityid\n          });\n        } else {\n          level1.subOptions = null;\n        }\n      });\n      return hierarchy;\n    };\n    this.MVHCommodityText = \"\";\n    this.MVHCommodityGUID = \"\";\n    this.BusinessUnit = \"\";\n    this.OnSelectedValue = this.OnSelectedValue.bind(this);\n  }\n  //this.OnSelectedL1Value.bind(this);\n  OnSelectedValue(value, id) {\n    this.MVHCommodityText = value;\n    this.MVHCommodityGUID = id;\n    console.log(\"value, id\", value, id);\n  }\n  init(context, notifyOutputChanged) {\n    return __awaiter(this, void 0, void 0, function* () {\n      this.notifyOutputChanged = notifyOutputChanged;\n      this.context = context;\n      console.log(\"Component initialized with context:\", context);\n      return Promise.resolve();\n    });\n  }\n  updateView(context) {\n    // Pass the context as a prop to Multidropdown\n    var fetchData = () => __awaiter(this, void 0, void 0, function* () {\n      try {\n        this.BusinessUnit = this.context.parameters.BusinessUnit.raw;\n        if (this.BusinessUnit && this.BusinessUnit.toLowerCase().includes(\"vca\")) {\n          console.log(\"Fetching VCA data\");\n          var result = yield context.webAPI.retrieveMultipleRecords(\"mvh_vcal2commodity\", \"?$select=mvh_l1commoditycalculated,mvh_l2commodityname,mvh_vcal2commodityid&$expand=mvh_L1Commodity($select=mvh_vcal1commodityid)\");\n          var records = result.entities;\n          this.hierarchyState = this.convertToHierarchyVCA(records); // Update the class-level state\n          console.log(\"Updated Hierarchy:\", this.hierarchyState);\n        } else {\n          console.log(\"Fetching MVH data\");\n          var _result = yield context.webAPI.retrieveMultipleRecords(\"mvh_l3commodities\", \"?$select=mvh_l1commoditycalculated,mvh_l2commoditycalculated,mvh_l3commodityname,mvh_l3commoditiesid&$expand=mvh_L2Commodity($select=mvh_l2commodityid)\");\n          var _records = _result.entities;\n          this.hierarchyState = this.convertToHierarchyMVH(_records); // Update the class-level state\n          console.log(\"Updated Hierarchy:\", this.hierarchyState);\n        }\n        // Call the notifyOutputChanged to notify PowerApps framework of the change\n        this.notifyOutputChanged();\n      } catch (error) {\n        /*try {\r\n        console.log(\"Fetching MVH data\");\r\n        const result = await context.webAPI.retrieveMultipleRecords(\r\n          \"mvh_l3commodities\",\r\n          \"?$select=mvh_l1commoditycalculated,mvh_l2commoditycalculated,mvh_l3commodityname,mvh_l3commoditiesid&$expand=mvh_L2Commodity($select=mvh_l2commodityid)\"\r\n        );\r\n        const records = result.entities;\r\n        this.hierarchyState = this.convertToHierarchyMVH(records); // Update the class-level state\r\n        console.log(\"Updated Hierarchy:\", this.hierarchyState);\r\n        // Call the notifyOutputChanged to notify PowerApps framework of the change\r\n        this.notifyOutputChanged();\r\n        }*/\n        console.error(\"Error fetching data:\", error);\n      }\n    });\n    // Call the fetchData method to get the data\n    fetchData();\n    var props = {\n      name: \"Power Apps\",\n      context: context,\n      records: this.hierarchyState,\n      SelectedValue: this.OnSelectedValue,\n      notifyOutputChanged: this.notifyOutputChanged\n    };\n    //this.MVHCommodityText = context.parameters.MVHCommodityText.raw || \"\";\n    //this.MVHCommodityGUID = context.parameters.MVHCommodityGUID.raw || \"\";\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Multidropdown__WEBPACK_IMPORTED_MODULE_0__.Multidropdown, props);\n  }\n  getOutputs() {\n    return {\n      MVHCommodityText: this.MVHCommodityText,\n      MVHCommodityGUID: this.MVHCommodityGUID,\n      RecordCount: this.hierarchyState.length.toString(),\n      BusinessUnit: this.BusinessUnit\n    };\n  }\n  destroy() {\n    // Cleanup logic if needed\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./ReactdropdownComponent/index.ts?");

/***/ }),

/***/ "@fluentui/react-components":
/*!************************************!*\
  !*** external "FluentUIReactv940" ***!
  \************************************/
/***/ ((module) => {

module.exports = FluentUIReactv940;

/***/ }),

/***/ "react":
/*!***************************!*\
  !*** external "Reactv16" ***!
  \***************************/
/***/ ((module) => {

module.exports = Reactv16;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./ReactdropdownComponent/index.ts");
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('FirstPcfNamespace.ReactdropdownComponent', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ReactdropdownComponent);
} else {
	var FirstPcfNamespace = FirstPcfNamespace || {};
	FirstPcfNamespace.ReactdropdownComponent = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.ReactdropdownComponent;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}