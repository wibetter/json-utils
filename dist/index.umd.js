(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["JSONUtils"] = factory();
	else
		root["JSONUtils"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/data/KeyWordList.js":
/*!*********************************!*\
  !*** ./src/data/KeyWordList.js ***!
  \*********************************/
/*! exports provided: KeyWordList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyWordList", function() { return KeyWordList; });
// JSONSchema关键字清单
var KeyWordList = ['key', 'enum', 'enumextra', 'items', 'input', 'boolean', 'number', 'color', 'url', 'textarea', 'radio', 'select', 'date', 'date-time', 'time', 'json', 'codearea', 'htmlarea', 'quantity', 'dynamic-data', 'datasource', 'event', 'array', 'object'];

/***/ }),

/***/ "./src/data/TypeDataList.js":
/*!**********************************!*\
  !*** ./src/data/TypeDataList.js ***!
  \**********************************/
/*! exports provided: TypeDataList, EventTypeDataList, DataSourceTypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeDataList", function() { return TypeDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTypeDataList", function() { return EventTypeDataList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceTypeList", function() { return DataSourceTypeList; });
/* harmony import */ var $data_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $data/index */ "./src/data/index.js");
 // 类型数据清单

var TypeDataList = {
  jsonschema: $data_index__WEBPACK_IMPORTED_MODULE_0__["initJSONSchemaData"],
  input: $data_index__WEBPACK_IMPORTED_MODULE_0__["initInputData"],
  boolean: $data_index__WEBPACK_IMPORTED_MODULE_0__["initBooleanData"],
  object: $data_index__WEBPACK_IMPORTED_MODULE_0__["initObjectData"],
  array: $data_index__WEBPACK_IMPORTED_MODULE_0__["initArrayData"],
  'empty-array': $data_index__WEBPACK_IMPORTED_MODULE_0__["EmptyArray"],
  'empty-object': $data_index__WEBPACK_IMPORTED_MODULE_0__["EmptyObject"],
  url: $data_index__WEBPACK_IMPORTED_MODULE_0__["initURLData"],
  textarea: $data_index__WEBPACK_IMPORTED_MODULE_0__["initTextareaData"],
  color: $data_index__WEBPACK_IMPORTED_MODULE_0__["initColorData"],
  img: $data_index__WEBPACK_IMPORTED_MODULE_0__["initIMGData"],
  number: $data_index__WEBPACK_IMPORTED_MODULE_0__["initNumberData"],
  json: $data_index__WEBPACK_IMPORTED_MODULE_0__["initJsonData"],
  codearea: $data_index__WEBPACK_IMPORTED_MODULE_0__["initCodeAreaData"],
  htmlarea: $data_index__WEBPACK_IMPORTED_MODULE_0__["initHtmlAreaData"],
  date: $data_index__WEBPACK_IMPORTED_MODULE_0__["initDateData"],
  'date-time': $data_index__WEBPACK_IMPORTED_MODULE_0__["initDateTimeData"],
  time: $data_index__WEBPACK_IMPORTED_MODULE_0__["initTimeData"],
  quantity: $data_index__WEBPACK_IMPORTED_MODULE_0__["initQuantityData"],
  radio: $data_index__WEBPACK_IMPORTED_MODULE_0__["initRadioData"],
  select: $data_index__WEBPACK_IMPORTED_MODULE_0__["initSelectData"],
  'dynamic-data': $data_index__WEBPACK_IMPORTED_MODULE_0__["initDynamicData"],
  datasource: $data_index__WEBPACK_IMPORTED_MODULE_0__["initDataSourceData"],
  event: $data_index__WEBPACK_IMPORTED_MODULE_0__["initEventData"]
}; // 事件类型数据

var EventTypeDataList = {
  on: $data_index__WEBPACK_IMPORTED_MODULE_0__["initEventDataTypeON"],
  emit: $data_index__WEBPACK_IMPORTED_MODULE_0__["initEventData"]
}; // 数据源类型

var DataSourceTypeList = {
  local: $data_index__WEBPACK_IMPORTED_MODULE_0__["initDataSourceData"],
  remote: $data_index__WEBPACK_IMPORTED_MODULE_0__["initDataSourceDataV2"]
};

/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/*! exports provided: initJSONSchemaData, initInputData, initBooleanData, initTextareaData, initNumberData, initRadioData, initSelectData, initDateTimeData, initDateData, initTimeData, initColorData, initURLData, initIMGData, initArrayData, initObjectData, EmptyArray, EmptyObject, initQuantityData, initJsonData, initCodeAreaData, initHtmlAreaData, initEventDataV1, initEventData, initEventDataTypeON, initDataSourceData, initDataSourceDataV2, initDynamicData, EmptyDynamicDataCont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initSchemaEntity_JSONSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initSchemaEntity/JSONSchema */ "./src/data/initSchemaEntity/JSONSchema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initJSONSchemaData", function() { return _initSchemaEntity_JSONSchema__WEBPACK_IMPORTED_MODULE_0__["initJSONSchemaData"]; });

/* harmony import */ var _initSchemaEntity_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initSchemaEntity/Input */ "./src/data/initSchemaEntity/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initInputData", function() { return _initSchemaEntity_Input__WEBPACK_IMPORTED_MODULE_1__["initInputData"]; });

/* harmony import */ var _initSchemaEntity_Boolean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initSchemaEntity/Boolean */ "./src/data/initSchemaEntity/Boolean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initBooleanData", function() { return _initSchemaEntity_Boolean__WEBPACK_IMPORTED_MODULE_2__["initBooleanData"]; });

/* harmony import */ var _initSchemaEntity_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./initSchemaEntity/Textarea */ "./src/data/initSchemaEntity/Textarea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initTextareaData", function() { return _initSchemaEntity_Textarea__WEBPACK_IMPORTED_MODULE_3__["initTextareaData"]; });

/* harmony import */ var _initSchemaEntity_Number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./initSchemaEntity/Number */ "./src/data/initSchemaEntity/Number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initNumberData", function() { return _initSchemaEntity_Number__WEBPACK_IMPORTED_MODULE_4__["initNumberData"]; });

/* harmony import */ var _initSchemaEntity_Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initSchemaEntity/Radio */ "./src/data/initSchemaEntity/Radio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initRadioData", function() { return _initSchemaEntity_Radio__WEBPACK_IMPORTED_MODULE_5__["initRadioData"]; });

/* harmony import */ var _initSchemaEntity_Select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initSchemaEntity/Select */ "./src/data/initSchemaEntity/Select.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initSelectData", function() { return _initSchemaEntity_Select__WEBPACK_IMPORTED_MODULE_6__["initSelectData"]; });

/* harmony import */ var _initSchemaEntity_DateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./initSchemaEntity/DateTime */ "./src/data/initSchemaEntity/DateTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initDateTimeData", function() { return _initSchemaEntity_DateTime__WEBPACK_IMPORTED_MODULE_7__["initDateTimeData"]; });

/* harmony import */ var _initSchemaEntity_Date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./initSchemaEntity/Date */ "./src/data/initSchemaEntity/Date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initDateData", function() { return _initSchemaEntity_Date__WEBPACK_IMPORTED_MODULE_8__["initDateData"]; });

/* harmony import */ var _initSchemaEntity_Time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./initSchemaEntity/Time */ "./src/data/initSchemaEntity/Time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initTimeData", function() { return _initSchemaEntity_Time__WEBPACK_IMPORTED_MODULE_9__["initTimeData"]; });

/* harmony import */ var _initSchemaEntity_Color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./initSchemaEntity/Color */ "./src/data/initSchemaEntity/Color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initColorData", function() { return _initSchemaEntity_Color__WEBPACK_IMPORTED_MODULE_10__["initColorData"]; });

/* harmony import */ var _initSchemaEntity_URL__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./initSchemaEntity/URL */ "./src/data/initSchemaEntity/URL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initURLData", function() { return _initSchemaEntity_URL__WEBPACK_IMPORTED_MODULE_11__["initURLData"]; });

/* harmony import */ var _initSchemaEntity_IMG__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./initSchemaEntity/IMG */ "./src/data/initSchemaEntity/IMG.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initIMGData", function() { return _initSchemaEntity_IMG__WEBPACK_IMPORTED_MODULE_12__["initIMGData"]; });

/* harmony import */ var _initSchemaEntity_Array__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./initSchemaEntity/Array */ "./src/data/initSchemaEntity/Array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initArrayData", function() { return _initSchemaEntity_Array__WEBPACK_IMPORTED_MODULE_13__["initArrayData"]; });

/* harmony import */ var _initSchemaEntity_Object__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./initSchemaEntity/Object */ "./src/data/initSchemaEntity/Object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initObjectData", function() { return _initSchemaEntity_Object__WEBPACK_IMPORTED_MODULE_14__["initObjectData"]; });

/* harmony import */ var _initSchemaEntity_EmptyArray__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./initSchemaEntity/EmptyArray */ "./src/data/initSchemaEntity/EmptyArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyArray", function() { return _initSchemaEntity_EmptyArray__WEBPACK_IMPORTED_MODULE_15__["EmptyArray"]; });

/* harmony import */ var _initSchemaEntity_EmptyObject__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./initSchemaEntity/EmptyObject */ "./src/data/initSchemaEntity/EmptyObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyObject", function() { return _initSchemaEntity_EmptyObject__WEBPACK_IMPORTED_MODULE_16__["EmptyObject"]; });

/* harmony import */ var _initSchemaEntity_Quantity__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./initSchemaEntity/Quantity */ "./src/data/initSchemaEntity/Quantity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initQuantityData", function() { return _initSchemaEntity_Quantity__WEBPACK_IMPORTED_MODULE_17__["initQuantityData"]; });

/* harmony import */ var _initSchemaEntity_Json__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./initSchemaEntity/Json */ "./src/data/initSchemaEntity/Json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initJsonData", function() { return _initSchemaEntity_Json__WEBPACK_IMPORTED_MODULE_18__["initJsonData"]; });

/* harmony import */ var _initSchemaEntity_CodeArea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./initSchemaEntity/CodeArea */ "./src/data/initSchemaEntity/CodeArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initCodeAreaData", function() { return _initSchemaEntity_CodeArea__WEBPACK_IMPORTED_MODULE_19__["initCodeAreaData"]; });

/* harmony import */ var _initSchemaEntity_HtmlArea__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./initSchemaEntity/HtmlArea */ "./src/data/initSchemaEntity/HtmlArea.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initHtmlAreaData", function() { return _initSchemaEntity_HtmlArea__WEBPACK_IMPORTED_MODULE_20__["initHtmlAreaData"]; });

/* harmony import */ var _initSchemaEntity_Event__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./initSchemaEntity/Event */ "./src/data/initSchemaEntity/Event.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initEventDataV1", function() { return _initSchemaEntity_Event__WEBPACK_IMPORTED_MODULE_21__["initEventDataV1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initEventData", function() { return _initSchemaEntity_Event__WEBPACK_IMPORTED_MODULE_21__["initEventData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initEventDataTypeON", function() { return _initSchemaEntity_Event__WEBPACK_IMPORTED_MODULE_21__["initEventDataTypeON"]; });

/* harmony import */ var _initSchemaEntity_DataSource__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./initSchemaEntity/DataSource */ "./src/data/initSchemaEntity/DataSource.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initDataSourceData", function() { return _initSchemaEntity_DataSource__WEBPACK_IMPORTED_MODULE_22__["initDataSourceData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initDataSourceDataV2", function() { return _initSchemaEntity_DataSource__WEBPACK_IMPORTED_MODULE_22__["initDataSourceDataV2"]; });

/* harmony import */ var _initSchemaEntity_DynamicData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./initSchemaEntity/DynamicData */ "./src/data/initSchemaEntity/DynamicData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initDynamicData", function() { return _initSchemaEntity_DynamicData__WEBPACK_IMPORTED_MODULE_23__["initDynamicData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmptyDynamicDataCont", function() { return _initSchemaEntity_DynamicData__WEBPACK_IMPORTED_MODULE_23__["EmptyDynamicDataCont"]; });


























/***/ }),

/***/ "./src/data/initSchemaEntity/Array.js":
/*!********************************************!*\
  !*** ./src/data/initSchemaEntity/Array.js ***!
  \********************************************/
/*! exports provided: initArrayData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initArrayData", function() { return initArrayData; });
/* array类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  items：用于设置选择项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initArrayData = {
  type: 'array',
  format: 'array',
  title: '数组',
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
  items: {
    type: 'object',
    // 不可编辑
    format: 'object',
    title: '数组项',
    description: '',
    // 字段项的说明和描述
    isRequired: false,
    readOnly: false,
    properties: {
      name: {
        type: 'string',
        format: 'input',
        title: '名字',
        default: '',
        // 默认值
        description: '',
        // 字段项的说明和描述
        placeholder: '',
        // 输入提示
        isRequired: false,
        readOnly: false
      }
    },
    required: ['name'],
    propertyOrder: ['name']
  }
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Boolean.js":
/*!**********************************************!*\
  !*** ./src/data/initSchemaEntity/Boolean.js ***!
  \**********************************************/
/*! exports provided: initBooleanData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBooleanData", function() { return initBooleanData; });
/* boolean类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number），字段值的数据类型
 *  title：字段项的label值
 *  format：用于标识字段项的UI展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initBooleanData = {
  type: 'boolean',
  title: '布尔值',
  format: 'boolean',
  default: false,
  // 默认值
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/CodeArea.js":
/*!***********************************************!*\
  !*** ./src/data/initSchemaEntity/CodeArea.js ***!
  \***********************************************/
/*! exports provided: initCodeAreaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initCodeAreaData", function() { return initCodeAreaData; });
/* CodeArea类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initCodeAreaData = {
  type: 'string',
  title: '函数类型',
  format: 'codearea',
  placeholder: '请输入函数方法',
  // 输入提示
  default: 'function func() { console.log("hello, world!"); }',
  // 默认值
  description: '用于定义函数方法',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Color.js":
/*!********************************************!*\
  !*** ./src/data/initSchemaEntity/Color.js ***!
  \********************************************/
/*! exports provided: initColorData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initColorData", function() { return initColorData; });
/* color类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initColorData = {
  type: 'string',
  title: '颜色值',
  format: 'color',
  default: '#ffffff',
  // 默认值
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/DataSource.js":
/*!*************************************************!*\
  !*** ./src/data/initSchemaEntity/DataSource.js ***!
  \*************************************************/
/*! exports provided: initDataSourceData, initDataSourceDataV2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDataSourceData", function() { return initDataSourceData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDataSourceDataV2", function() { return initDataSourceDataV2; });
/** dataSource字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initDataSourceData = {
  type: 'object',
  format: 'datasource',
  title: '数据源',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'local',
      format: 'typeSelect',
      enum: ['local', 'remote'],
      enumextra: ['local', 'remote'],
      title: '数据源类型'
    },
    data: {
      type: 'string',
      title: '本地json数据',
      placeholder: '请输入静态json数据',
      // 输入提示
      format: 'json',
      default: '{}',
      // 默认值
      description: '用于设置本地的静态json数据',
      isRequired: true
    },
    filter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true
    }
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter']
}; // 默认是用于展示local本地数据源的，如果展示远程数据源使用initDataSourceDataV2

var initDataSourceDataV2 = {
  type: 'object',
  format: 'datasource',
  title: '数据源',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'remote',
      format: 'typeSelect',
      enum: ['local', 'remote'],
      enumextra: ['local', 'remote'],
      title: '数据源类型'
    },
    data: {
      type: 'string',
      title: '远程json数据',
      placeholder: '请输入远程json数据源地址',
      // 输入提示
      format: 'url',
      default: 'http://xxx',
      // 默认值
      isRequired: true,
      description: '用于设置获取元素数据的请求地址'
    },
    filter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true
    }
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter']
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Date.js":
/*!*******************************************!*\
  !*** ./src/data/initSchemaEntity/Date.js ***!
  \*******************************************/
/*! exports provided: initDateData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDateData", function() { return initDateData; });
/* Date类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initDateData = {
  type: 'string',
  title: '日期',
  format: 'date',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/DateTime.js":
/*!***********************************************!*\
  !*** ./src/data/initSchemaEntity/DateTime.js ***!
  \***********************************************/
/*! exports provided: initDateTimeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDateTimeData", function() { return initDateTimeData; });
/* DateTime类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initDateTimeData = {
  type: 'string',
  title: '日期',
  format: 'date-time',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/DynamicData.js":
/*!**************************************************!*\
  !*** ./src/data/initSchemaEntity/DynamicData.js ***!
  \**************************************************/
/*! exports provided: initDynamicData, EmptyDynamicDataCont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDynamicData", function() { return initDynamicData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyDynamicDataCont", function() { return EmptyDynamicDataCont; });
/** dynamic-data: 动态数据
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initDynamicData = {
  type: 'object',
  format: 'dynamic-data',
  title: '动态数据',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'local',
      format: 'typeSelect',
      enum: ['local', 'remote'],
      enumextra: ['本地数据', '接口数据'],
      title: '数据类型'
    },
    config: {
      type: 'object',
      title: '接口配置',
      format: 'object',
      description: '用于存放接口的配置数据(url、请求参数等)',
      isRequired: true,
      properties: {
        dataName: {
          type: 'string',
          default: 'local',
          format: 'typeSelect',
          enum: ['local', 'remote'],
          enumextra: ['本地数据', '接口数据'],
          title: '数据类型'
        },
        body: {
          type: 'object',
          title: '请求参数配置',
          format: 'object',
          description: '用于配置当前接口的请求参数数值',
          isRequired: true
        },
        filter: {
          type: 'string',
          title: '过滤器函数体',
          format: 'codearea',
          default: 'return data;',
          description: '用于定义过滤接口数据',
          isRequired: true
        }
      },
      required: ['dataName', 'body', 'filter'],
      propertyOrder: ['dataName', 'body', 'filter']
    },
    data: {
      type: 'string',
      title: '数据内容',
      format: 'json',
      default: '{}',
      // 默认值
      description: '用于存放DynamicData的数据内容',
      isRequired: true
    },
    localFilter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: 'return data;',
      description: '用于定义过滤本地数据',
      isRequired: true
    }
  },
  required: ['type', 'config', 'data', 'localFilter'],
  propertyOrder: ['type', 'config', 'data', 'localFilter']
}; // 动态数据对应的空json数据内容

var EmptyDynamicDataCont = {
  type: 'local',
  config: {
    dataName: '',
    // 动态数据源名称
    body: {},
    // 请求参数相关
    filter: 'return data;'
  },
  data: '{}',
  // 用于存储结果数据
  localFilter: 'return data;'
}; // 示例对象: 动态数据类型-接口数据 对应的json数据内容

var DynamicDataContDemo = {
  type: 'remote',
  config: {
    id: 0,
    // 动态数据源id
    dataName: 'data-12',
    // 动态数据源名称
    title: 'xxx数据源',
    // 数据源中文名称
    desc: 'xxx数据源描述',
    //  数据源中文描述
    url: 'https://api.thecatapi.com/v1/images/search',
    // 动态数据源请求地址
    method: 'get',
    option: {},
    header: {},
    // 请求头
    body: {
      // 请求参数相关
      param1: {
        title: '参数名称',
        scope: 'static',
        // 固定参数
        value: '111' // 固定值

      },
      param2: {
        title: '参数名称',
        scope: 'window',
        name: 'PARAM1',
        value: '111' // 默认值

      },
      pageId: {
        title: '页面id',
        scope: 'hash',
        name: 'pId',
        value: '111' // 默认值

      },
      param7: {
        title: '参数名称',
        scope: 'dynamic',
        // 接口下发
        dataName: 'api3',
        body: {
          param2: {
            title: '参数名称',
            scope: 'static',
            value: '222'
          },
          param3: {
            title: '参数名称',
            scope: 'static',
            value: '333'
          }
        }
      }
    },
    mock: '{}',
    filter: 'return data;'
  },
  data: '{}',
  // 用于存储结果数据
  localFilter: 'return data;'
};

/***/ }),

/***/ "./src/data/initSchemaEntity/EmptyArray.js":
/*!*************************************************!*\
  !*** ./src/data/initSchemaEntity/EmptyArray.js ***!
  \*************************************************/
/*! exports provided: EmptyArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyArray", function() { return EmptyArray; });
// 空数组的schema数据
var EmptyArray = {
  type: 'array',
  format: 'array',
  title: '数组',
  description: '',
  items: {
    type: 'object',
    format: 'object',
    title: '数组项',
    description: '',
    properties: {}
  }
};

/***/ }),

/***/ "./src/data/initSchemaEntity/EmptyObject.js":
/*!**************************************************!*\
  !*** ./src/data/initSchemaEntity/EmptyObject.js ***!
  \**************************************************/
/*! exports provided: EmptyObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyObject", function() { return EmptyObject; });
// 空对象的schema数据
var EmptyObject = {
  type: 'object',
  format: 'object',
  title: '对象类型',
  description: '',
  properties: {}
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Event.js":
/*!********************************************!*\
  !*** ./src/data/initSchemaEntity/Event.js ***!
  \********************************************/
/*! exports provided: initEventDataV1, initEventData, initEventDataTypeON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEventDataV1", function() { return initEventDataV1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEventData", function() { return initEventData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initEventDataTypeON", function() { return initEventDataTypeON; });
/** event字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
// 旧版Event数据
var initEventDataV1 = {
  type: 'object',
  format: 'event',
  title: '事件',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'out',
      format: 'typeSelect',
      enum: ['in', 'out'],
      enumextra: ['in', 'out'],
      title: '事件类型',
      readOnlyInJson: false
    },
    filter: {
      type: 'string',
      format: 'textarea',
      default: 'return data;',
      title: '过滤器'
    }
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter']
};
/** 新版EventData
 * type: emit 的默认数据 */

var initEventData = {
  type: 'object',
  format: 'event',
  title: '事件',
  isRequired: false,
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'emit',
      format: 'typeSelect',
      enum: ['on', 'emit'],
      enumextra: ['on', 'emit'],
      title: '事件类型',
      isRequired: false,
      readOnly: false
    },
    trigger: {
      type: 'string',
      format: 'input',
      default: 'eventName',
      title: '触发事件',
      description: '用于输入触发事件的名称',
      placeholder: '请输入触发事件的名称',
      isRequired: false,
      readOnly: false
    },
    eventData: {
      type: 'string',
      title: '事件数据',
      format: 'json',
      default: '{}',
      // 默认值
      description: '传递给触发事件的数据对象',
      // 字段项的说明和描述
      isRequired: false,
      readOnly: false
    }
  },
  required: ['type', 'trigger', 'eventData'],
  propertyOrder: ['type', 'trigger', 'eventData']
};
/** 新版EventData
 * type: on 的默认数据 */

var initEventDataTypeON = {
  type: 'object',
  format: 'event',
  title: '事件',
  isRequired: false,
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'on',
      format: 'typeSelect',
      enum: ['on', 'emit'],
      enumextra: ['on', 'emit'],
      title: '事件类型',
      isRequired: false,
      readOnly: false
    },
    register: {
      type: 'string',
      format: 'input',
      default: 'eventName',
      title: '注册事件',
      description: '用于输入注册事件的名称',
      placeholder: '请输入注册事件的名称',
      isRequired: false,
      readOnly: false
    },
    actionFunc: {
      type: 'string',
      title: '执行函数',
      format: 'codearea',
      default: '() => {}',
      // 默认值
      description: '',
      // 字段项的说明和描述
      isRequired: false,
      readOnly: false
    }
  },
  required: ['type', 'register', 'actionFunc'],
  propertyOrder: ['type', 'register', 'actionFunc']
};

/***/ }),

/***/ "./src/data/initSchemaEntity/HtmlArea.js":
/*!***********************************************!*\
  !*** ./src/data/initSchemaEntity/HtmlArea.js ***!
  \***********************************************/
/*! exports provided: initHtmlAreaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initHtmlAreaData", function() { return initHtmlAreaData; });
/* HtmlArea类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initHtmlAreaData = {
  type: 'string',
  title: '富文本类型',
  format: 'htmlarea',
  placeholder: '请输入html代码片段',
  default: '<p>hello,world!</p>',
  // 默认值
  description: '用于放置html代码片段',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/IMG.js":
/*!******************************************!*\
  !*** ./src/data/initSchemaEntity/IMG.js ***!
  \******************************************/
/*! exports provided: initIMGData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initIMGData", function() { return initIMGData; });
/** image图片类型字段
 *  用户可以使用此组件上传图片，最后返回对应的图片资源地址
 * */
var initIMGData = {
  type: 'string',
  title: 'IMG',
  format: 'image',
  default: '',
  // 默认值
  description: '点击上传图片',
  // 字段项的说明和描述
  imgWidth: 200,
  // 图片默认的宽度，单位默认px
  imgHeight: 200,
  // 图片默认的高度，单位默认px
  imgRatio: 1,
  // 图片宽高比例是否可调整
  imgRatioReadOnly: false,
  // 图片宽高比例是否可调整
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Input.js":
/*!********************************************!*\
  !*** ./src/data/initSchemaEntity/Input.js ***!
  \********************************************/
/*! exports provided: initInputData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInputData", function() { return initInputData; });
/* input类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initInputData = {
  type: 'string',
  title: '单文本框',
  format: 'input',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/JSONSchema.js":
/*!*************************************************!*\
  !*** ./src/data/initSchemaEntity/JSONSchema.js ***!
  \*************************************************/
/*! exports provided: initJSONSchemaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initJSONSchemaData", function() { return initJSONSchemaData; });
/** 新版JSONSchema一级字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initJSONSchemaData = {
  type: 'object',
  title: 'jsonSchemaObject',
  properties: {
    func: {
      type: 'object',
      format: 'func',
      title: '功能设置',
      readOnly: true,
      properties: {
        a: {
          type: 'string',
          title: '单文本框',
          format: 'input',
          default: '',
          // 默认值
          description: '',
          // 字段项的说明和描述
          placeholder: '',
          // 输入提示
          isRequired: false,
          readOnly: false
        }
      },
      required: ['a'],
      propertyOrder: ['a']
    },
    style: {
      type: 'object',
      format: 'style',
      title: '样式设置',
      readOnly: true,
      properties: {
        b: {
          type: 'string',
          title: '单文本框',
          format: 'input',
          default: '',
          // 默认值
          description: '',
          // 字段项的说明和描述
          placeholder: '',
          // 输入提示
          isRequired: false,
          readOnly: false
        }
      },
      required: ['b'],
      propertyOrder: ['b']
    },
    data: {
      type: 'object',
      format: 'data',
      title: '数据设置',
      readOnly: true,
      properties: {
        c: {
          type: 'string',
          title: '单文本框',
          format: 'input',
          default: '',
          // 默认值
          description: '',
          // 字段项的说明和描述
          placeholder: '',
          // 输入提示
          isRequired: false,
          readOnly: false
        }
      },
      required: ['c'],
      propertyOrder: ['c']
    }
  },
  required: ['func', 'style', 'data'],
  propertyOrder: ['func', 'style', 'data']
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Json.js":
/*!*******************************************!*\
  !*** ./src/data/initSchemaEntity/Json.js ***!
  \*******************************************/
/*! exports provided: initJsonData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initJsonData", function() { return initJsonData; });
/* json类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initJsonData = {
  type: 'string',
  title: 'json数据项',
  format: 'json',
  default: '{}',
  // 默认值
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Number.js":
/*!*********************************************!*\
  !*** ./src/data/initSchemaEntity/Number.js ***!
  \*********************************************/
/*! exports provided: initNumberData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initNumberData", function() { return initNumberData; });
/* number类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number），字段值的数据类型
 *  title：字段项的label值
 *  format：用于标识字段项的UI展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  minimum：最小值
 *  maximum：最大值
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initNumberData = {
  type: 'number',
  title: '数值',
  format: 'number',
  default: 1,
  // 默认值
  minimum: 0,
  // 在高级设置中配置
  maximum: 1000,
  // 在高级设置中配置
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Object.js":
/*!*********************************************!*\
  !*** ./src/data/initSchemaEntity/Object.js ***!
  \*********************************************/
/*! exports provided: initObjectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initObjectData", function() { return initObjectData; });
/** Object字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initObjectData = {
  type: 'object',
  format: 'object',
  title: '对象类型',
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
  properties: {
    a: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '',
      // 默认值
      description: '',
      // 字段项的说明和描述
      placeholder: '',
      // 输入提示
      isRequired: false,
      readOnly: false
    }
  },
  required: ['a'],
  propertyOrder: ['a']
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Quantity.js":
/*!***********************************************!*\
  !*** ./src/data/initSchemaEntity/Quantity.js ***!
  \***********************************************/
/*! exports provided: initQuantityData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initQuantityData", function() { return initQuantityData; });
/** quantity字段项
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  properties：存放所有的子字段数据内容
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  readOnly：字段项可设置是否可编辑
 *  required：存放所有子字段的key值，用于验证子字段项是否存在，同时required可充当排序功能
 *  propertyOrder：按序存放所有子字段的key值（排序功能）
 * */
var initQuantityData = {
  type: 'object',
  format: 'quantity',
  title: '单位计量输入',
  isRequired: false,
  readOnly: false,
  properties: {
    unit: {
      type: 'number',
      title: '单位数值',
      format: 'number',
      default: 50,
      // 默认值
      minimum: 0,
      // 在高级设置中配置
      maximum: 1000,
      // 在高级设置中配置
      description: '',
      // 字段项的说明和描述
      isRequired: false,
      readOnly: false
    },
    quantity: {
      type: 'string',
      format: 'typeSelect',
      // 选择列表
      default: 'px',
      enum: ['px', 'rem', 'em', '%'],
      enumextra: ['px', 'rem', 'em', '%'],
      title: '单位类型',
      isRequired: false,
      readOnly: false
    }
  },
  required: ['unit', 'quantity'],
  propertyOrder: ['unit', 'quantity']
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Radio.js":
/*!********************************************!*\
  !*** ./src/data/initSchemaEntity/Radio.js ***!
  \********************************************/
/*! exports provided: initRadioData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRadioData", function() { return initRadioData; });
/* radio类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  items：用于设置选择项
 *  isRequired：是否是必填项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initRadioData = {
  type: 'string',
  title: '单选',
  format: 'radio',
  items: {
    type: 'string',
    // 不可编辑
    enum: ['a', 'b', 'c'],
    enumextra: ['选项a', '选项b', '选项c']
  },
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Select.js":
/*!*********************************************!*\
  !*** ./src/data/initSchemaEntity/Select.js ***!
  \*********************************************/
/*! exports provided: initSelectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initSelectData", function() { return initSelectData; });
/* select类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  items：用于设置选择项
 *  description：字段说明&描述
 *  readOnly：字段项可设置是否可编辑
 * */
var initSelectData = {
  type: 'array',
  title: '多选',
  format: 'select',
  items: {
    type: 'string',
    // 不可编辑
    enum: ['a', 'b', 'c'],
    enumextra: ['选项a', '选项b', '选项c']
  },
  description: '',
  // 字段项的说明和描述
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Textarea.js":
/*!***********************************************!*\
  !*** ./src/data/initSchemaEntity/Textarea.js ***!
  \***********************************************/
/*! exports provided: initTextareaData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTextareaData", function() { return initTextareaData; });
/* textarea类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initTextareaData = {
  type: 'string',
  title: '多行文本框',
  format: 'textarea',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/Time.js":
/*!*******************************************!*\
  !*** ./src/data/initSchemaEntity/Time.js ***!
  \*******************************************/
/*! exports provided: initTimeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initTimeData", function() { return initTimeData; });
/* Time类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initTimeData = {
  type: 'string',
  title: '时间',
  format: 'time',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/data/initSchemaEntity/URL.js":
/*!******************************************!*\
  !*** ./src/data/initSchemaEntity/URL.js ***!
  \******************************************/
/*! exports provided: initURLData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initURLData", function() { return initURLData; });
/* URL类型字段
 * 【字段属性说明】
 *  type：用于标识字段项的基本数据类型（object、array、string、boolean、number）
 *  title：字段项的label值
 *  format：用于标识字段项的展示类型（input、date、data-time、url、textarea 等）
 *  isRequired：是否是必填项
 *  default：默认值
 *  description：字段说明&描述
 *  placeholder：输入提示
 *  readOnly：字段项可设置是否可编辑
 * */
var initURLData = {
  type: 'string',
  title: 'URL',
  format: 'url',
  default: '',
  // 默认值
  description: '',
  // 字段项的说明和描述
  placeholder: '',
  // 输入提示
  isRequired: false,
  readOnly: false
};

/***/ }),

/***/ "./src/function/dynamicDataAnalyzer.js":
/*!*********************************************!*\
  !*** ./src/function/dynamicDataAnalyzer.js ***!
  \*********************************************/
/*! exports provided: dynamicDataAnalyzer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dynamicDataAnalyzer", function() { return dynamicDataAnalyzer; });
/* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $utils/typeof */ "./src/utils/typeof.js");
/**
 * dynamicDataAnalyzer: 根据当前的json，统计当前json里面用到的动态数据源情况
 * 【方法参数说明】
 * jsonData: json数据内容，必填项
 * 【返回数据格式说明】
 * dynamicDataAnalyzer:
 * {
  widget1: [
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        },
        pageId: {
          title: '页面id',
          scope: 'hash',
          name: 'pId',
          value: '111' // 默认值
        }
      },
    },
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        },
        pageId: {
          title: '页面id',
          scope: 'hash',
          name: 'pId',
          value: '111' // 默认值
        }
      }
    }
  ],
  widget2: [
    {
      dataName: 'api1',
      body: {
        param1: {
          title: '参数名称',
          scope: 'static',  // 固定参数
          value: '111'  // 固定值
        },
        param2: {
          title: '参数名称',
          scope: 'window',
          name: 'PARAM1',
          value: '111' // 默认值
        }
      }
    }
  ]
}
 */

function dynamicDataAnalyzer(curJsonData, analyzerResult) {
  var curAnalyzerResult = analyzerResult || []; // 根据当前schem数据分析使用到的元数据情况

  if (curJsonData && JSON.stringify(curJsonData) !== '{}') {
    if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isObject"])(curJsonData)) {
      var curJsonMap = Object.keys(curJsonData); // 动态数据类型的jsonData包含四个数值：type、config（dataName/body/filter）、data、localFilter
      // 判断是否是动态数据类型

      if (curJsonData.type && curJsonData.type === 'remote' && curJsonData.config && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isObject"])(curJsonData.config) && curJsonData.localFilter && curJsonData.data) {
        var apiParams = curJsonData.config.body;

        if (apiParams && !Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isObject"])(apiParams)) {
          try {
            apiParams = JSON.parse(apiParams);
          } catch (e) {
            apiParams = {};
          }
        }

        curAnalyzerResult.push({
          id: curJsonData.config.id,
          dataName: curJsonData.config.dataName,
          body: apiParams
        });
      } else {
        var curJsonDataList = Object.keys(curJsonData);
        curJsonDataList.map(function (jsonKey) {
          dynamicDataAnalyzer(curJsonData[jsonKey], curAnalyzerResult);
        });
      }
    } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isArray"])(curJsonData)) {
      curJsonData.map(function (jsonDataItem) {
        dynamicDataAnalyzer(jsonDataItem, curAnalyzerResult);
      });
    }
  }

  return curAnalyzerResult;
}

/***/ }),

/***/ "./src/function/getJsonDataByKeyRoute.js":
/*!***********************************************!*\
  !*** ./src/function/getJsonDataByKeyRoute.js ***!
  \***********************************************/
/*! exports provided: getJsonDataByKeyRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJsonDataByKeyRoute", function() { return getJsonDataByKeyRoute; });
/* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $utils/index */ "./src/utils/index.js");

/**
 * getJSONDataByKeyRoute: 根据key索引路径获取对应的数值
 * 【方法参数说明】
 * keyRoute: key值索引路径
 * targetJsonDataObj: json数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */

function getJsonDataByKeyRoute(keyRoute, targetJsonDataObj, useObjClone) {
  var curJsonDataObj = targetJsonDataObj;

  if (useObjClone) {
    curJsonDataObj = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(targetJsonDataObj); // 进行深拷贝，避免影响原有数据
  }

  if (keyRoute) {
    var keyRouteArr = keyRoute.split('-');

    for (var index = 0, size = keyRouteArr.length; index < size; index++) {
      // 1、获取当前的jsonKey值
      var curKey = keyRouteArr[index];

      if (curKey) {
        // 只有curKey不为空的时候才进行赋值
        // 2、根据key值获取对应的数据对象
        curJsonDataObj = curJsonDataObj && curJsonDataObj[curKey];
      }
    }
  }

  return curJsonDataObj;
}

/***/ }),

/***/ "./src/function/getSchemaByIndexRoute.js":
/*!***********************************************!*\
  !*** ./src/function/getSchemaByIndexRoute.js ***!
  \***********************************************/
/*! exports provided: getSchemaByIndexRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSchemaByIndexRoute", function() { return getSchemaByIndexRoute; });
/* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $utils/index */ "./src/utils/index.js");

/**
 * getSchemaByIndexRoute: 根据index索引路径获取对应的schema数据
 * 【方法参数说明】
 * indexRoute: index索引路径
 * targetJsonSchemaObj: schema数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */

/**   */

function getSchemaByIndexRoute(indexRoute, targetJsonSchemaObj, useObjClone) {
  var curJsonSchemaObj = targetJsonSchemaObj;

  if (useObjClone) {
    curJsonSchemaObj = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }

  if (indexRoute) {
    var indexRouteArr = indexRoute.split('-');

    for (var index = 0, size = indexRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
      var curIndex = indexRouteArr[index];

      if (curIndex === '0' && (curJsonSchemaObj.format === 'array' || curJsonSchemaObj.format === 'radio' || curJsonSchemaObj.format === 'select') && curJsonSchemaObj.items) {
        // 从items中获取数据
        curJsonSchemaObj = curJsonSchemaObj.items;
      } else if (curIndex) {
        var curKeyTemp = '0'; // 1、先根据路径值获取key值

        if (curJsonSchemaObj.propertyOrder) {
          curKeyTemp = curJsonSchemaObj.propertyOrder[curIndex];
        } else if (curJsonSchemaObj.properties) {
          var propertyOrder = Object.keys(curJsonSchemaObj.properties);
          curKeyTemp = propertyOrder[curIndex];
        } // 2、根据key值获取对应的json数据对象


        curJsonSchemaObj = curJsonSchemaObj.properties[curKeyTemp];
      }
    }
  }

  return curJsonSchemaObj;
}

/***/ }),

/***/ "./src/function/indexRoute2keyRoute.js":
/*!*********************************************!*\
  !*** ./src/function/indexRoute2keyRoute.js ***!
  \*********************************************/
/*! exports provided: indexRoute2keyRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indexRoute2keyRoute", function() { return indexRoute2keyRoute; });
/**
 * indexRoute2keyRoute：根据index索引路径获取对应的key值路径
 * 【方法参数说明】
 * indexRoute: index索引路径
 * targetJsonSchemaObj: schema数据对象
 * */
function indexRoute2keyRoute(indexRoute, targetJsonSchemaObj) {
  var curJsonSchemaObj = targetJsonSchemaObj;
  var curKeyRoute = '';
  var indexRouteArr = indexRoute.split('-');

  for (var index = 0, size = indexRouteArr.length; index < size; index++) {
    // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
    var curIndex = indexRouteArr[index];

    if (curIndex === '0' && curJsonSchemaObj.items) {
      // 从items中获取数据
      curJsonSchemaObj = curJsonSchemaObj.items; // 对象类型数据引用

      curKeyRoute = curKeyRoute ? "".concat(curKeyRoute, "-items") : 'items';
    } else if (curIndex) {
      // 1、先根据路径值获取key值
      var curKey = '0'; // 1、先根据路径值获取key值

      if (curJsonSchemaObj.propertyOrder) {
        curKey = curJsonSchemaObj.propertyOrder[curIndex];
      } else if (curJsonSchemaObj.properties) {
        var propertyOrder = Object.keys(curJsonSchemaObj.properties);
        curKey = propertyOrder[curIndex];
      } // 2、根据key值获取对应的json数据对象


      curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用

      curKeyRoute = curKeyRoute ? "".concat(curKeyRoute, "-").concat(curKey) : curKey;
    }
  }

  return curKeyRoute;
}

/***/ }),

/***/ "./src/function/json2schema.js":
/*!*************************************!*\
  !*** ./src/function/json2schema.js ***!
  \*************************************/
/*! exports provided: json2schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json2schema", function() { return json2schema; });
/* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $utils/index */ "./src/utils/index.js");
/* harmony import */ var $data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $data/TypeDataList */ "./src/data/TypeDataList.js");
/* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $utils/typeof */ "./src/utils/typeof.js");
/**
 * json2schema：根据json数据内容获取对应的schema数据
 * 当前包含三个转换方法：baseJson2Schema、objectJson2Schema、arrayJson2Schema
 * */



/**
 * 基础类型的jsonData转schema
 * 备注：目前可转换Boolean、Number、URL、Date、DateTime、Time、color、json类型
 * 其中textarea、radio、codearea和htmlarea的数值不好和input区分，故均转换为input类型
 * */

function baseJson2Schema(jsonData) {
  var curJsonSchema = '';

  if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isBoolean"])(jsonData)) {
    // 1、Boolean类型
    curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].boolean);
  } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(jsonData)) {
    // 2、Number类型
    curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].number);
  } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isURL"])(jsonData)) {
    // 3、URL类型
    curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].url);
  } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isDateStr"])(jsonData)) {
    // 4、Date类型
    curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].date);
  } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isDateTimeStr"])(jsonData)) {
    // 5、DateTime类型
    curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"]['date-time']);
  } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isTimeStr"])(jsonData)) {
    // 6、Time类型
    curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].time);
  } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isColor"])(jsonData)) {
    // 7、Color类型
    curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].color);
  } else {
    try {
      // json数据类型：进行格式化（检查是否是合格的json字符串数据）
      var jsonDataObj = JSON.parse(jsonData);

      if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isNumber"])(jsonDataObj)) {
        // 简单数字字符串类型数值统一认为是字符串类型
        curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].input);
      } else {
        // 排除简单数字字符串类型数值
        curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].json);
      }
    } catch (err) {
      // textarea类型
      if (jsonData && jsonData.length > 30) {
        // 字符串长度超过50则认为是codearea类型
        curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].textarea);
      } else {
        // 其他类型(input、radio、codearea、htmlarea)
        curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].input);
      }
    }
  }

  return curJsonSchema;
}
/**
 * Object类型的jsonData转schema
 * 备注：目前可转换datasource、event、quantity、object四种对象类型
 * */


function objectJson2Schema(jsonData) {
  var curJsonSchema;

  if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isObject"])(jsonData)) {
    var properties = Object.keys(jsonData);

    if (jsonData.data && jsonData.filter && properties.length === 2) {
      // DataSource数据源类型
      if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isArray"])(jsonData.data) || Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isObject"])(jsonData.data)) {
        // 本地数据源类型
        curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["DataSourceTypeList"].local);
      } else {
        // 远程数据源类型
        curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["DataSourceTypeList"].remote);
      }
    } else if (jsonData.trigger && jsonData.eventData && properties.length === 2) {
      // 触发事件类型（固定格式的Object类型）
      curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["EventTypeDataList"].emit);
    } else if (jsonData.register && jsonData.actionFunc && properties.length === 2) {
      // 注册事件类型（固定格式的Object类型）
      curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["EventTypeDataList"].on);
    } else if (jsonData.quantity && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isQuantity"])(jsonData.quantity) && properties.length === 2) {
      // 计量单位类型（固定格式的Object类型）
      curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].quantity);
    } else {
      // 其他非固定格式的Object类型
      curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"]['empty-object']); // 新建空数组对象schema
      // 遍历子数据项目

      Object.keys(jsonData).map(function (jsonKey) {
        var curJsonItem = jsonData[jsonKey];
        curJsonSchema.properties[jsonKey] = json2schema(curJsonItem);
      });
    }
  }

  return curJsonSchema;
}
/**
 * Array类型的jsonData转schema
 * 备注：目前可转换select、array两种数组类型
 * */


function arrayJson2Schema(jsonData) {
  var curJsonSchema; // 判断是否是数组类型

  if (jsonData && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isArray"])(jsonData)) {
    // 判断是否select类型（select类型是字符串类型的array）
    if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isSelect"])(jsonData)) {
      curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"].select); // 将当前jsonData的值设置为select的选项值

      curJsonSchema.items.enum = jsonData;
      var enumextraLength = curJsonSchema.items.enumextra.length;
      var arrLength = jsonData.length;

      if (arrLength > enumextraLength) {
        // 如果当前jsonDats的数值个数大于selectSchemaData的选项个数，则需要进行补充
        for (var ind = enumextraLength, size = arrLength; ind < size; ind++) {
          curJsonSchema.items.enumextra.push("\u9009\u9879".concat(jsonData(ind)));
        }
      }
    } else {
      curJsonSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_1__["TypeDataList"]['empty-array']); // 新建空数组对象schema
      // 根据第一个数组项获取items的schema对象

      var arrItemObj = json2schema(jsonData[0]); // 正常情况下，Array的一级子对象是Object类型

      curJsonSchema.items.properties = arrItemObj.properties;
    }
  }

  return curJsonSchema;
}
/**
 * 根据jsonData生成一份对应的jsonSchema
 * */


function json2schema(jsonData) {
  var curJsonSchema = {};

  if (jsonData && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isObject"])(jsonData)) {
    curJsonSchema = objectJson2Schema(jsonData);
  } else if (jsonData && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_2__["isArray"])(jsonData)) {
    curJsonSchema = arrayJson2Schema(jsonData);
  } else {
    curJsonSchema = baseJson2Schema(jsonData);
  }

  return curJsonSchema;
}

/***/ }),

/***/ "./src/function/json2treeData.js":
/*!***************************************!*\
  !*** ./src/function/json2treeData.js ***!
  \***************************************/
/*! exports provided: dataRoute2dataPath, json2treeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataRoute2dataPath", function() { return dataRoute2dataPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "json2treeData", function() { return json2treeData; });
/* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $utils/typeof */ "./src/utils/typeof.js");
/**
 * json2treeData: 根据当前的json数据，转换成treeData（供antd的TreeSelect使用）
 * 【方法参数说明】
 * mockData: json数据，必填项。
 * 【返回数据格式说明】
 * [
 {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-1',
        key: '0-0-1',
      },
      {
        title: 'Child Node2',
        value: '0-0-2',
        key: '0-0-2',
      },
    ],
  },
 {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
  },
 ];
 */

/**
 *  DataRoute转真实数据路径
 * */

function dataRoute2dataPath(dataRoute, baseDataPath) {
  var dataPath = baseDataPath || 'data'; // 默认数据根路径值为data

  var dataRouteArr = dataRoute.split('-');
  dataRouteArr.map(function (path) {
    if (/^\d+$/.test(path)) {
      dataPath = "".concat(dataPath, "[").concat(path, "]");
    } else {
      dataPath = "".concat(dataPath, ".").concat(path);
    }
  });
  return dataPath;
}
/**
 *  mockData转treeData
 * */

function json2treeData(mockData, parentDataRoute) {
  var treeData = [];

  if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isObject"])(mockData)) {
    var mockDataProps = Object.keys(mockData);
    mockDataProps.map(function (propKey) {
      var mockDataItem = mockData[propKey];
      var curDataRoute = parentDataRoute ? "".concat(parentDataRoute, "-").concat(propKey) : propKey;

      if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isObject"])(mockDataItem) || Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isArray"])(mockDataItem)) {
        treeData.push({
          title: propKey,
          value: curDataRoute,
          key: curDataRoute,
          children: json2treeData(mockDataItem, curDataRoute)
        });
      } else {
        treeData.push({
          title: propKey,
          value: curDataRoute,
          key: curDataRoute
        });
      }
    });
  } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isArray"])(mockData)) {
    mockData.map(function (mockDataItem, index) {
      var curDataRoute = parentDataRoute ? "".concat(parentDataRoute, "-").concat(index) : index;

      if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isObject"])(mockDataItem) || Object($utils_typeof__WEBPACK_IMPORTED_MODULE_0__["isArray"])(mockDataItem)) {
        treeData.push({
          title: index,
          value: curDataRoute,
          key: curDataRoute,
          children: json2treeData(mockDataItem, curDataRoute)
        });
      } else {
        treeData.push({
          title: index,
          value: curDataRoute,
          key: curDataRoute
        });
      }
    });
  }

  return treeData;
}

/***/ }),

/***/ "./src/function/metaElemAnalyzer.js":
/*!******************************************!*\
  !*** ./src/function/metaElemAnalyzer.js ***!
  \******************************************/
/*! exports provided: metaElemAnalyzer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaElemAnalyzer", function() { return metaElemAnalyzer; });
/* harmony import */ var $utils_jsonSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $utils/jsonSchema */ "./src/utils/jsonSchema.js");
/* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $utils/typeof */ "./src/utils/typeof.js");
/**
 * metaElemAnalyzer: 根据当前的schema，统计当前json里面用到的元数据情况
 * 【方法参数说明】
 * schemaData: schema数据，必填项。当为空时会自动根据jsonData生成一份对应的schemaData数据
 * 【返回数据格式说明】
 * metaElemAnalyzer: {
 *   input: 3,
 *   color: 1,
 *   event: {
 *     emit: 1,
 *     on: 2
 *   },
 *   datasource: {
 *     local: 1,
 *     remote: 1,
 *     interfaceData: 2
 *   }
 * }
 */


/**
 * Object类型的schema元数据分析
 * */

function objectSchema2JsonData(jsonSchema, analyzerResult) {
  var curAnalyzerResult = analyzerResult || {};

  if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_1__["isObject"])(jsonSchema) && jsonSchema.type === 'object' && jsonSchema.properties) {
    var curPropertyOrder = [];

    if (jsonSchema.propertyOrder) {
      curPropertyOrder = jsonSchema.propertyOrder;
    } else {
      curPropertyOrder = Object.keys(jsonSchema.properties);
    }

    curPropertyOrder.map(function (jsonKey) {
      var curSchema = jsonSchema.properties[jsonKey];
      curAnalyzerResult = metaElemAnalyzer(curSchema, curAnalyzerResult);
    });
  }

  return curAnalyzerResult;
}
/** 主方法 */


function metaElemAnalyzer(curJsonSchemaObj, analyzerResult) {
  // 根据analyzerResult是否为空，判断是否是最外层的调用
  var isFirstAnalyzer = !analyzerResult ? true : false;
  var curAnalyzerResult = analyzerResult || {}; // 根据当前schem数据分析使用到的元数据情况

  if (curJsonSchemaObj && JSON.stringify(curJsonSchemaObj) !== '{}') {
    var curFormat = Object($utils_jsonSchema__WEBPACK_IMPORTED_MODULE_0__["getCurrentFormat"])(curJsonSchemaObj);

    if (curFormat === 'object' || curFormat === 'func' || curFormat === 'style' || curFormat === 'data') {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['object']) {
        curAnalyzerResult['object'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['object'] = 1;
      }

      curAnalyzerResult = objectSchema2JsonData(curJsonSchemaObj, curAnalyzerResult);
    } else if (curFormat === 'array') {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['array']) {
        curAnalyzerResult['array'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['array'] = 1;
      }

      curJsonSchemaObj = curJsonSchemaObj.items;
      curAnalyzerResult = objectSchema2JsonData(curJsonSchemaObj, curAnalyzerResult);
    } else {
      if (!isFirstAnalyzer && curAnalyzerResult[curFormat]) {
        curAnalyzerResult[curFormat] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult[curFormat] = 1;
      }
    }
  }

  return curAnalyzerResult;
}

/***/ }),

/***/ "./src/function/oldSchemaToNewSchema.js":
/*!**********************************************!*\
  !*** ./src/function/oldSchemaToNewSchema.js ***!
  \**********************************************/
/*! exports provided: oldSchemaToNewSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oldSchemaToNewSchema", function() { return oldSchemaToNewSchema; });
/* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $utils/index */ "./src/utils/index.js");
/* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $utils/typeof */ "./src/utils/typeof.js");
/* harmony import */ var $data_TypeDataList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $data/TypeDataList */ "./src/data/TypeDataList.js");
/* harmony import */ var $utils_jsonSchema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $utils/jsonSchema */ "./src/utils/jsonSchema.js");
/**
 * oldSchemaToNewSchema：旧版jsonSchema转新版jsonSchema
 * 新版新增propertyOrder属性（排序展示需要），因此旧版的required需要根据properties生成对应的propertyOrder属性
 * 备注：新版的title需要从description中获取值（旧版的title值使用的是description字段的值）
 * */




function oldSchemaToNewSchema(oldSchema) {
  var newJSONSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(oldSchema); // 进行深拷贝，避免影响原有数据;
  // 1.根据原有的description值生成title值

  if (!newJSONSchema.title && newJSONSchema.description) {
    newJSONSchema.title = newJSONSchema.description;
  } // 2.当format为空时重新进行赋值


  if (!newJSONSchema.format) {
    newJSONSchema.format = Object($utils_jsonSchema__WEBPACK_IMPORTED_MODULE_3__["getCurrentFormat"])(newJSONSchema);
  } // 3.不需要default属性的类型自动删除


  if ((newJSONSchema.format === 'quantity' || newJSONSchema.format === 'array' || newJSONSchema.format === 'datasource' || newJSONSchema.format === 'event' || newJSONSchema.format === 'object' || newJSONSchema.format === 'radio' || newJSONSchema.format === 'select') && Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["exitPropertie"])(newJSONSchema.default)) {
    delete newJSONSchema.default; // 单位计量输入类型的默认值改放unit属性中
  } // 转换旧版的radio类型的数据结构


  if (newJSONSchema.format === 'radio') {
    newJSONSchema.type = 'string';

    if (newJSONSchema.enum && newJSONSchema.enumextra) {
      // 统一转换至items
      newJSONSchema.items = {
        type: 'string',
        enum: Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(newJSONSchema.enum),
        enumextra: Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(newJSONSchema.enumextra)
      }; // 删除此前的enum、enumextra

      delete newJSONSchema.enum;
      delete newJSONSchema.enumextra;
    }
  } // 转换旧版的quantity类型的数据结构


  if (newJSONSchema.format === 'quantity') {
    var curProperties = newJSONSchema.properties;
    var newQuantitySchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_2__["TypeDataList"].quantity); // 新版quantity的schema数据对象

    if (curProperties.quantity && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_1__["isObject"])(curProperties.quantity) && curProperties.quantity.default) {
      var oldDefault = curProperties.quantity.default; // percent 自动转换成 %

      newQuantitySchema.properties.quantity.default = oldDefault === 'percent' ? '%' : oldDefault;
    } // 融合新版schema数据


    newJSONSchema = newQuantitySchema;
  } // 转换旧版的datasource类型的数据结构


  if (newJSONSchema.format === 'datasource') {
    var _curProperties = newJSONSchema.properties; // 先获取旧版的关键数据

    var typeProp = _curProperties.type && _curProperties.type.default;
    var dataProp = _curProperties.data && _curProperties.data.default;
    var filterProp = _curProperties.filter && _curProperties.filter.default;

    if (typeProp === 'local') {
      newJSONSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_2__["DataSourceTypeList"].local);
      newJSONSchema.properties.data.default = dataProp ? Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(dataProp) : '{}';
    } else {
      newJSONSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_2__["DataSourceTypeList"].remote);
      newJSONSchema.properties.data.default = dataProp ? Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(dataProp) : 'http://xxx';
    }

    newJSONSchema.properties.filter.default = filterProp ? Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(filterProp) : '() => {}';
  } // 转换旧版的event类型的数据结构


  if (newJSONSchema.format === 'event') {
    var _curProperties2 = newJSONSchema.properties; // 先获取旧版的关键数据

    var eventType = _curProperties2.type && _curProperties2.type.default; // 重构Event的数据结构

    if (eventType === 'in' || eventType === 'on') {
      // 兼容旧版的'in'和新版的'on'
      // 注册类事件: 新版type改成'on'
      var eventFunc = _curProperties2.filter && _curProperties2.filter.default || '() => {}';
      newJSONSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_2__["EventTypeDataList"].on);

      if (_curProperties2.actionFunc && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_1__["isObject"])(_curProperties2.actionFunc)) {
        newJSONSchema.properties.actionFunc.default = _curProperties2.actionFunc.default || Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(eventFunc);
      }
    } else {
      // 其他，则默认为触发事件
      // 注册类事件: 新版type改成'emit'
      var _eventFunc = _curProperties2.filter && _curProperties2.filter.default || '{}';

      newJSONSchema = Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])($data_TypeDataList__WEBPACK_IMPORTED_MODULE_2__["EventTypeDataList"].emit);

      if (_curProperties2.eventData && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_1__["isObject"])(_curProperties2.eventData)) {
        newJSONSchema.properties.eventData.default = _curProperties2.eventData.default || Object($utils_index__WEBPACK_IMPORTED_MODULE_0__["objClone"])(_eventFunc);
      }
    }
  } // 判断是否有propertyOrder属性


  if (newJSONSchema.properties) {
    // 3.重新生成required属性
    newJSONSchema.required = Object.keys(newJSONSchema.properties);

    if (!newJSONSchema.propertyOrder) {
      // 4.生成propertyOrder属性
      newJSONSchema.propertyOrder = newJSONSchema.required;
    } // 5.继续遍历properties属性进行转换


    newJSONSchema.propertyOrder.map(function (jsonKey) {
      newJSONSchema.properties[jsonKey] = oldSchemaToNewSchema(newJSONSchema.properties[jsonKey]);
    });
  } // 判断是否有items属性


  if (newJSONSchema.items) {
    // 6. 转换items中的数据
    newJSONSchema.items = oldSchemaToNewSchema(newJSONSchema.items);
  }

  return newJSONSchema;
}

/***/ }),

/***/ "./src/function/schema2json.js":
/*!*************************************!*\
  !*** ./src/function/schema2json.js ***!
  \*************************************/
/*! exports provided: schema2json */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schema2json", function() { return schema2json; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var $utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! $utils/index */ "./src/utils/index.js");
/* harmony import */ var $utils_jsonSchema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! $utils/jsonSchema */ "./src/utils/jsonSchema.js");
/* harmony import */ var $utils_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! $utils/typeof */ "./src/utils/typeof.js");
/* harmony import */ var $data_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! $data/index */ "./src/data/index.js");


/**
 * schema2Json：根据schema数据内容生成一份对应的json数据
 * 当前包含三个转换方法：baseSchema2JsonData、objectSchema2JsonData、arraySchema2JsonData
 * 【方法参数说明】
 * jsonSchema: schema数据对象，主要根据此对象生成对应的json数据
 * jsonData: json数据对象，会优先使用此jsonData对应的数值
 * */





/**
 * 基础类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */

function baseSchema2JsonData(jsonSchema, jsonData) {
  var curJsonData = '';
  var oldValue = jsonData;

  if (Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(oldValue) && Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(jsonSchema.default) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(oldValue) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(jsonSchema.default)) {
    // 表示当前数据类型发生变化，则丢弃旧版数据
    oldValue = undefined;
  }
  /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */


  var curValue = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(oldValue) ? oldValue : jsonSchema.default;

  switch (jsonSchema.type) {
    case 'string':
      if (jsonSchema.format === 'typeSelect') {
        // 选择类型的字段直接使用schema中的数值
        curJsonData = jsonSchema.default;
      } else if (jsonSchema.format === 'color') {
        if (curValue === '#fff' || curValue === '#FFF') {
          curValue = '#ffffff'; // 避免出现#fff类型的值，type=color不能识别
        }

        curJsonData = curValue || '#ffffff';
      } else if (jsonSchema.format === 'json') {
        /** 转成json类型进行特殊处理
         * 需要保证json类型的数值是json对象 */
        var curJsonItemData = ''; // 字符串类型的json数据
        // 判断当前jsonData是否是对象类型

        if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_3__["isObject"])(jsonData) || Object($utils_typeof__WEBPACK_IMPORTED_MODULE_3__["isArray"])(jsonData)) {
          curJsonItemData = jsonData;
        } else if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_3__["isFunction"])(jsonData) || jsonData === '') {
          // 函数类型自动替换成默认的json数据"{}"
          curJsonItemData = {};
        } else {
          /** 当前的curJsonData是一个字符串，需要判断是否可以系列化成一个json对象
           * 如果不能系列化一个json对象，则自动转换成一个默认的json数据"{}"
           */
          try {
            // 进行格式化（检查是否是合格的json数据）
            curJsonItemData = JSON.parse(jsonData);
          } catch (err) {
            // 不合格的json数据自动转换成一个默认的json数据"{}"
            curJsonItemData = {};
          }
        }

        curJsonData = curJsonItemData;
      } else {
        // 其他类型允许出现空字符串
        curJsonData = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(curValue) ? curValue : '';
      }

      break;

    case 'boolean':
      curJsonData = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(curValue) ? curValue : false;
      break;

    case 'number':
      curJsonData = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(curValue) ? curValue : 1;
      break;

    default:
      curJsonData = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(curValue) ? curValue : '';
  }

  return curJsonData;
}
/**
 * Object类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */


function objectSchema2JsonData(jsonSchema, jsonData) {
  var curJsonData = {};
  var curType = Object($utils_jsonSchema__WEBPACK_IMPORTED_MODULE_2__["getCurrentFormat"])(jsonSchema);

  if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_3__["isObject"])(jsonSchema) && jsonSchema.type === 'object') {
    var jsonItem = jsonSchema;
    var oldValue = jsonData;

    if (Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(oldValue) && Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(jsonItem.default) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(oldValue) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(jsonItem.default)) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */


    var curValue = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(oldValue) ? oldValue : jsonItem.default;

    if (curType === 'dynamic-data') {
      // 动态数据源类型（固定格式的Object类型）
      curJsonData = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["objClone"])($data_index__WEBPACK_IMPORTED_MODULE_4__["EmptyDynamicDataCont"]);

      if (curValue && Object($utils_typeof__WEBPACK_IMPORTED_MODULE_3__["isObject"])(curValue) && JSON.stringify(curValue) !== '{}') {
        curJsonData = Object.assign(curJsonData, curValue);
      }
    } else if (curType === 'datasource') {
      // 数据源类型（固定格式的Object类型）
      if (jsonItem.properties && jsonItem.properties.type && jsonItem.properties.type.default && jsonItem.properties.type.default === 'local') {
        // 本地数据源类型
        curJsonData = {
          data: '{}',
          filter: '() => {}'
        }; // 读取旧值

        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }

        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        } // 纠正data中的默认数据


        if (curJsonData.data === 'http://xxx') {
          curJsonData.data = '{}';
        }
      } else {
        // 远程数据类型
        curJsonData = {
          data: 'http://xxx',
          filter: '() => {}'
        }; // 读取旧值

        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }

        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        } // 纠正data中的默认数据


        if (curJsonData.data === '{}') {
          curJsonData.data = 'http://xxx';
        }
      }
    } else if (curType === 'event') {
      // 事件类型（固定格式的Object类型）
      if (jsonItem.properties && jsonItem.properties.type && jsonItem.properties.type.default && jsonItem.properties.type.default === 'emit') {
        // 触发事件类型
        if (curValue && curValue.type === 'out') {
          curJsonData = {
            trigger: curValue && curValue.filter || 'eventName',
            // 兼容旧版数据
            eventData: '{}'
          };
        } else {
          curJsonData = {
            trigger: 'eventName',
            // 兼容旧版数据
            eventData: '{}'
          }; // 读取旧值

          if (curValue && curValue.trigger) {
            curJsonData.trigger = curValue.trigger;
          }

          if (curValue && curValue.eventData) {
            curJsonData.eventData = curValue.eventData;
          }
        }
      } else {
        // 注册事件类型-触发事件类型
        if (curValue && curValue.type === 'in') {
          curJsonData = {
            register: 'eventName',
            actionFunc: curValue && curValue.filter || '() => {}' // 兼容旧版数据

          };
        } else {
          curJsonData = {
            register: 'eventName',
            // 兼容旧版数据
            actionFunc: '() => {}'
          }; // 读取旧值

          if (curValue && curValue.register) {
            curJsonData.register = curValue.register;
          }

          if (curValue && curValue.actionFunc) {
            curJsonData.actionFunc = curValue.actionFunc;
          }
        }
      }
    } else if (jsonSchema.properties) {
      var curPropertyOrder = [];

      if (jsonSchema.propertyOrder) {
        curPropertyOrder = jsonSchema.propertyOrder;
      } else {
        curPropertyOrder = Object.keys(jsonSchema.properties);
      } // 其他非固定格式的Object类型


      curPropertyOrder.map(function (jsonKey) {
        var curJsonItem = jsonSchema.properties[jsonKey];
        var curOldValue = jsonData && jsonData[jsonKey];

        switch (curJsonItem.type) {
          case 'array':
            curJsonData[jsonKey] = arraySchema2JsonData(curJsonItem, curOldValue);
            break;

          case 'object':
            // 普通对象类型
            curJsonData[jsonKey] = objectSchema2JsonData(curJsonItem, curOldValue);
            break;

          default:
            // 其他基础类型
            curJsonData[jsonKey] = baseSchema2JsonData(curJsonItem, curOldValue);
        }
      });
    }
  }

  return curJsonData;
}
/**
 * Array类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */


function arraySchema2JsonData(jsonSchema, jsonData) {
  var curJsonData = []; // 判断是否是数组类型

  if (jsonSchema && jsonSchema.type === 'array') {
    // Array数据对象类型
    var oldValue = jsonData;

    if (Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(oldValue) && Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(jsonSchema.default) && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(oldValue) !== _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(jsonSchema.default)) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */


    var curValue = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(oldValue) ? oldValue : jsonSchema.default;

    if (jsonSchema.format === 'array') {
      if (Object($utils_typeof__WEBPACK_IMPORTED_MODULE_3__["isArray"])(curValue)) {
        curValue.map(function (arrItem) {
          curJsonData.push(objectSchema2JsonData(jsonSchema.items, arrItem));
        });
      } else {
        var childItems = objectSchema2JsonData(jsonSchema.items, curValue);
        curJsonData.push(childItems);
      }
    } else {
      // 考虑select类型（多选的数值也是以array对象记录）
      curJsonData = Object($utils_index__WEBPACK_IMPORTED_MODULE_1__["exitPropertie"])(curValue) ? curValue : [];
    }
  }

  return curJsonData;
}
/**
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */


function schema2json(jsonSchema, jsonData) {
  var curJsonData = {};

  if (jsonSchema.type === 'object') {
    curJsonData = objectSchema2JsonData(jsonSchema, jsonData);
  } else if (jsonSchema.type === 'array') {
    curJsonData = arraySchema2JsonData(jsonSchema, jsonData);
  } else {
    curJsonData = baseSchema2JsonData(jsonSchema, jsonData);
  }

  return curJsonData;
}

/***/ }),

/***/ "./src/function/schemaMetaList.js":
/*!****************************************!*\
  !*** ./src/function/schemaMetaList.js ***!
  \****************************************/
/*! exports provided: schemaMetaList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "schemaMetaList", function() { return schemaMetaList; });
/* harmony import */ var $data_TypeDataList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $data/TypeDataList */ "./src/data/TypeDataList.js");
/**
 * schemaMetaList: 当前JSON数据可视化提供的元数据清单
 * 11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、img、radio、 select）
 * 9个特殊类型组件（Object、Array、Json、datasource、DynamicData、Event、CodeArea、htmlArea、quantity）
 */
 // 类型数据清单

var schemaMetaList = $data_TypeDataList__WEBPACK_IMPORTED_MODULE_0__["TypeDataList"];

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: getJsonDataByKeyRoute, getSchemaByIndexRoute, indexRoute2keyRoute, json2schema, metaElemAnalyzer, oldSchemaToNewSchema, schema2json, schemaMetaList, dynamicDataAnalyzer, dataRoute2dataPath, json2treeData, objClone, isEqual, exitPropertie, getParentKeyRoute, getParentKeyRoute_CurKey, getCurrentFormat, isEmptySchema, isEmptyWidgetSchema, isUsedToWidgetConfig, isNewSchemaData, isBoxSchemaData, isFirstSchemaData, isSameParent, getCurPosition, getParentIndexRoute, getNextIndexRoute, getParentIndexRoute_CurIndex, moveForward, moveBackward, isURL, isString, isNumber, isBoolean, isDateStr, isDateTimeStr, isTimeStr, isArray, isSelect, isObject, isQuantity, isColor, isFunction, KeyWordList, TypeDataList, EventTypeDataList, DataSourceTypeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _function_getJsonDataByKeyRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function/getJsonDataByKeyRoute */ "./src/function/getJsonDataByKeyRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getJsonDataByKeyRoute", function() { return _function_getJsonDataByKeyRoute__WEBPACK_IMPORTED_MODULE_0__["getJsonDataByKeyRoute"]; });

/* harmony import */ var _function_getSchemaByIndexRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./function/getSchemaByIndexRoute */ "./src/function/getSchemaByIndexRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSchemaByIndexRoute", function() { return _function_getSchemaByIndexRoute__WEBPACK_IMPORTED_MODULE_1__["getSchemaByIndexRoute"]; });

/* harmony import */ var _function_indexRoute2keyRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function/indexRoute2keyRoute */ "./src/function/indexRoute2keyRoute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "indexRoute2keyRoute", function() { return _function_indexRoute2keyRoute__WEBPACK_IMPORTED_MODULE_2__["indexRoute2keyRoute"]; });

/* harmony import */ var _function_json2schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./function/json2schema */ "./src/function/json2schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "json2schema", function() { return _function_json2schema__WEBPACK_IMPORTED_MODULE_3__["json2schema"]; });

/* harmony import */ var _function_metaElemAnalyzer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./function/metaElemAnalyzer */ "./src/function/metaElemAnalyzer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaElemAnalyzer", function() { return _function_metaElemAnalyzer__WEBPACK_IMPORTED_MODULE_4__["metaElemAnalyzer"]; });

/* harmony import */ var _function_oldSchemaToNewSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/oldSchemaToNewSchema */ "./src/function/oldSchemaToNewSchema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oldSchemaToNewSchema", function() { return _function_oldSchemaToNewSchema__WEBPACK_IMPORTED_MODULE_5__["oldSchemaToNewSchema"]; });

/* harmony import */ var _function_schema2json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./function/schema2json */ "./src/function/schema2json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schema2json", function() { return _function_schema2json__WEBPACK_IMPORTED_MODULE_6__["schema2json"]; });

/* harmony import */ var _function_schemaMetaList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./function/schemaMetaList */ "./src/function/schemaMetaList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "schemaMetaList", function() { return _function_schemaMetaList__WEBPACK_IMPORTED_MODULE_7__["schemaMetaList"]; });

/* harmony import */ var _function_dynamicDataAnalyzer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./function/dynamicDataAnalyzer */ "./src/function/dynamicDataAnalyzer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dynamicDataAnalyzer", function() { return _function_dynamicDataAnalyzer__WEBPACK_IMPORTED_MODULE_8__["dynamicDataAnalyzer"]; });

/* harmony import */ var _function_json2treeData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./function/json2treeData */ "./src/function/json2treeData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataRoute2dataPath", function() { return _function_json2treeData__WEBPACK_IMPORTED_MODULE_9__["dataRoute2dataPath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "json2treeData", function() { return _function_json2treeData__WEBPACK_IMPORTED_MODULE_9__["json2treeData"]; });

/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/index */ "./src/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objClone", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_10__["objClone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_10__["isEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "exitPropertie", function() { return _utils_index__WEBPACK_IMPORTED_MODULE_10__["exitPropertie"]; });

/* harmony import */ var _utils_jsonData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/jsonData */ "./src/utils/jsonData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParentKeyRoute", function() { return _utils_jsonData__WEBPACK_IMPORTED_MODULE_11__["getParentKeyRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParentKeyRoute_CurKey", function() { return _utils_jsonData__WEBPACK_IMPORTED_MODULE_11__["getParentKeyRoute_CurKey"]; });

/* harmony import */ var _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/jsonSchema */ "./src/utils/jsonSchema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentFormat", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["getCurrentFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmptySchema", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["isEmptySchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmptyWidgetSchema", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["isEmptyWidgetSchema"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUsedToWidgetConfig", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["isUsedToWidgetConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNewSchemaData", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["isNewSchemaData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoxSchemaData", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["isBoxSchemaData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFirstSchemaData", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["isFirstSchemaData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSameParent", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["isSameParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurPosition", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["getCurPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParentIndexRoute", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["getParentIndexRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNextIndexRoute", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["getNextIndexRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getParentIndexRoute_CurIndex", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["getParentIndexRoute_CurIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveForward", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["moveForward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "moveBackward", function() { return _utils_jsonSchema__WEBPACK_IMPORTED_MODULE_12__["moveBackward"]; });

/* harmony import */ var _utils_typeof__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/typeof */ "./src/utils/typeof.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isURL", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateStr", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isDateStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDateTimeStr", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isDateTimeStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTimeStr", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isTimeStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSelect", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isSelect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isQuantity", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isQuantity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isColor", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utils_typeof__WEBPACK_IMPORTED_MODULE_13__["isFunction"]; });

/* harmony import */ var _data_KeyWordList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/KeyWordList */ "./src/data/KeyWordList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyWordList", function() { return _data_KeyWordList__WEBPACK_IMPORTED_MODULE_14__["KeyWordList"]; });

/* harmony import */ var _data_TypeDataList__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data/TypeDataList */ "./src/data/TypeDataList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TypeDataList", function() { return _data_TypeDataList__WEBPACK_IMPORTED_MODULE_15__["TypeDataList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventTypeDataList", function() { return _data_TypeDataList__WEBPACK_IMPORTED_MODULE_15__["EventTypeDataList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataSourceTypeList", function() { return _data_TypeDataList__WEBPACK_IMPORTED_MODULE_15__["DataSourceTypeList"]; });

/**
 * json-utils: json工具集合
 * 【提供的工具方法清单】
 *
 * 【10个主要的json工具方法】
 * getJsonDataByKeyRoute: 根据key索引路径获取对应的数值
 * getSchemaByIndexRoute: 根据index索引路径获取对应的schema数据
 * indexRoute2keyRoute: 根据index索引路径获取对应的key值路径
 * json2schema: 根据json数据内容获取对应的schema数据
 * oldSchemaToNewSchema: 旧版jsonSchema转新版jsonSchema
 * schema2json: 根据schema数据内容生成一份对应的json数据
 * dynamicDataAnalyzer: 根据当前的json和对应的schema，统计当前json里面用到的动态数据源情况
 * schemaMetaList: 当前JSON数据可视化提供的元数据清单
 * metaElemAnalyzer: 根据当前的json和对应的schema，统计当前json里面用到的元数据情况
 * dynamicDataAnalyzer: 根据当前的json和对应的schema，统计当前json里面用到的动态数据源情况
 *
 * 【其他较小的json工具方法】
 *
 * 【json数据内容相关的操作方法】
 * getParentKeyRoute: 获取父元素的key路径值
 * getParentKeyRoute_CurKey: 获取父元素的key路径值和当前key
 *
 * 【schema相关的操作方法】
 * getCurrentFormat: 获取当前字段的类型（format）
 * isEmptySchema: 判断是否为空的Schema
 * isEmptyWidgetSchema: 判断是否为空的WidgetSchema
 * isUsedToWidgetConfig: 判断是否为用于区块配置的jsonSchema数据
 * isNewSchemaData: 判断是否是最新版的schema数据
 * isBoxSchemaData: 根据format判断是否是容器类型字段
 * isFirstSchemaData: 根据format判断是否是一级类型字段(func、style、data)
 * isSameParent: 判断是否是同一个父元素
 * getCurPosition: 判断当前元素在目标元素的位置 前 or 后（根据当前元素的位置和目标元素的位置）
 * getParentIndexRoute: 获取父元素的路径值
 * getNextIndexRoute: 获取下一个兄弟元素的路径值
 * getParentIndexRoute_CurIndex: 获取父元素的路径值和当前index
 * moveForward: 将当前路径值向前移动一位
 * moveBackward: 将当前路径值向后移动一位
 *
 * 【纯工具方法】
 * objClone: js对象数据深拷贝，避免数据联动
 * isEqual: 对比两个json数据是否相等
 * exitPropertie: 判断当前属性是否存在(识别数值为false、0、null)
 *
 * 【基础元数据类型判断】
 * isURL
 * isString
 * isNumber
 * isBoolean
 * isDateStr
 * isDateTimeStr
 * isTimeStr
 * isArray
 * isSelect
 * isObject
 * isQuantity
 * isColor
 * isFunction
 */
//【8个主要的json工具方法】









 //【其他较小的json工具方法】

 // 纯工具方法

 // json数据内容相关的操作方法

 // json数据结构相关的操作方法
// 数值判断

 // JSON关键字：用于规避key的命名

 // 所有类型对应的json对象

 // TypeDataList、EventTypeDataList、DataSourceTypeList、DynamicDataList

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: objClone, isEqual, exitPropertie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objClone", function() { return objClone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitPropertie", function() { return exitPropertie; });
/** js对象数据深拷贝，避免数据联动 */
function objClone(targetObj) {
  var newObj = JSON.stringify(targetObj);
  return JSON.parse(newObj);
}
/** 对比两个json数据是否相等 */

function isEqual(targetObj, nextTargetObj) {
  return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
}
/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */

function exitPropertie(targetPropertie) {
  var exitPropertie = false;

  if (targetPropertie !== undefined) {
    // targetPropertie 等于""、0、false时均认为是存在的属性
    exitPropertie = true;
  }

  return exitPropertie;
}

/***/ }),

/***/ "./src/utils/jsonData.js":
/*!*******************************!*\
  !*** ./src/utils/jsonData.js ***!
  \*******************************/
/*! exports provided: getParentKeyRoute, getParentKeyRoute_CurKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentKeyRoute", function() { return getParentKeyRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentKeyRoute_CurKey", function() { return getParentKeyRoute_CurKey; });
/**
 * 获取父元素的key路径值
 */
function getParentKeyRoute(curKeyRoute) {
  var curKeyArr = curKeyRoute.split('-');
  curKeyArr.pop();
  return curKeyArr.join('-');
}
/**
 * 获取父元素的key路径值和当前key
 */

function getParentKeyRoute_CurKey(curKeyRoute) {
  var curKeyArr = curKeyRoute.split('-');
  var curKey = curKeyArr.pop();
  return [curKeyArr.join('-'), curKey];
}

/***/ }),

/***/ "./src/utils/jsonSchema.js":
/*!*********************************!*\
  !*** ./src/utils/jsonSchema.js ***!
  \*********************************/
/*! exports provided: getCurrentFormat, isEmptySchema, isEmptyWidgetSchema, isUsedToWidgetConfig, isNewSchemaData, isBoxSchemaData, isFirstSchemaData, isSameParent, getCurPosition, getParentIndexRoute, getNextIndexRoute, getParentIndexRoute_CurIndex, moveForward, moveBackward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentFormat", function() { return getCurrentFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptySchema", function() { return isEmptySchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyWidgetSchema", function() { return isEmptyWidgetSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUsedToWidgetConfig", function() { return isUsedToWidgetConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewSchemaData", function() { return isNewSchemaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxSchemaData", function() { return isBoxSchemaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFirstSchemaData", function() { return isFirstSchemaData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSameParent", function() { return isSameParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurPosition", function() { return getCurPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentIndexRoute", function() { return getParentIndexRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextIndexRoute", function() { return getNextIndexRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParentIndexRoute_CurIndex", function() { return getParentIndexRoute_CurIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveForward", function() { return moveForward; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveBackward", function() { return moveBackward; });
/**
 * JSONSchema(json格式)对象的通用操作方法【非响应式数据操作方法集合】
 */

/**
 * 获取当前字段的类型（format）
 * 如果当前字段没有format字段，则根据type字段赋予默认的类型
 */
function getCurrentFormat(targetJsonData) {
  var currentType = targetJsonData && targetJsonData.format;

  if (!currentType) {
    if (targetJsonData && targetJsonData.type) {
      currentType = targetJsonData.type;
    } else {
      currentType = 'input';
    }
  }

  return currentType;
}
/** 判断是否为空的Schema
 * 包括 通用schema和区块配置专用的schema
 * */

function isEmptySchema(targetJsonSchema) {
  var isEmpty = true;

  if (!targetJsonSchema) {
    return isEmpty;
  }

  var curType = getCurrentFormat(targetJsonSchema);

  if (curType === 'object' && targetJsonSchema.properties && targetJsonSchema.propertyOrder && targetJsonSchema.propertyOrder.length > 0) {
    // Object对象类型
    isEmpty = false;
  } else if (curType === 'array' && targetJsonSchema.items && targetJsonSchema.items.properties && targetJsonSchema.items.propertyOrder && targetJsonSchema.items.propertyOrder.length > 0) {
    // Array数组类型
    isEmpty = false;
  } else if (targetJsonSchema.type || targetJsonSchema.format) {
    // 其他基本类型
    isEmpty = false;
  }

  return isEmpty;
}
/** 判断是否为空的WidgetSchema
 * 备注：WidgetSchema 一级字段必须为object，且有三个子属性：func、style、data
 * */

function isEmptyWidgetSchema(targetJsonSchema) {
  var isEmpty = true;

  if (targetJsonSchema) {
    var curType = getCurrentFormat(targetJsonSchema);

    if (curType === 'object' && targetJsonSchema.properties && targetJsonSchema.propertyOrder && targetJsonSchema.propertyOrder.length > 0) {
      var funcSchema = targetJsonSchema.properties.func || {};
      var styleSchema = targetJsonSchema.properties.style || {};
      var dataSchema = targetJsonSchema.properties.data || {};

      if (funcSchema.propertyOrder && funcSchema.propertyOrder.length > 0 || styleSchema.propertyOrder && styleSchema.propertyOrder.length > 0 || dataSchema.propertyOrder && dataSchema.propertyOrder.length > 0) {
        isEmpty = false;
      }
    }
  }

  return isEmpty;
}
/** 判断是否为用于区块配置的jsonSchema数据
 * 备注：一级字段必须为object（用于规避非法的jsonSchema数据，以及结构单一的jsonSchema数据）
 * 且具备固定的三个子属性（func、style、data）
 * */

function isUsedToWidgetConfig(targetJsonSchema) {
  var isWidgetConfig = false;

  if (targetJsonSchema) {
    var curType = getCurrentFormat(targetJsonSchema);

    if (curType === 'object' && targetJsonSchema.properties && targetJsonSchema.propertyOrder && targetJsonSchema.properties.func && targetJsonSchema.properties.style && targetJsonSchema.properties.data) {
      isWidgetConfig = true;
    }
  }

  return isWidgetConfig;
}
/**
 *  判断是否是最新版的schema数据
 *  备注：确保当前schema数据是通过@wibetter/json-schema-editor生成的
 * */

function isNewSchemaData(schemaData) {
  var isNewVersion = false;
  var lastUpdateTime = schemaData.lastUpdateTime; // 从那一刻开始就认为是新版JSONSchema

  var newVersionTime = new Date('2020-07-29T07:30:00.691Z').getTime();

  if (lastUpdateTime && new Date(lastUpdateTime).getTime() >= newVersionTime) {
    isNewVersion = true;
  }

  return isNewVersion;
}
/** 根据format判断是否是容器类型字段
 *  容器类型字段：func、style、data、object
 *  主要用于判断当前元素点击新增时是添加子元素还是添加兄弟节点，容器类型点击新增时则添加子节点。
 *  备注：array类型字段只有固定的一个items属性，不能新增其他子元素。
 * */

function isBoxSchemaData(format) {
  var isBoxSchema = false;

  if (format === 'func' || format === 'style' || format === 'data' || format === 'object') {
    isBoxSchema = true;
  }

  return isBoxSchema;
}
/** 根据format判断是否是一级类型字段
 *  一级类型字段：func、style、data
 *  备注：一级类型字段不允许拖拽和复制
 * */

function isFirstSchemaData(format) {
  var isFirstSchema = false;

  if (format === 'func' || format === 'style' || format === 'data') {
    isFirstSchema = true;
  }

  return isFirstSchema;
}
/**
 * 判断是否是同一个父元素
 * 备注：用于判断两个元素是否在同一个父级容器中
 */

function isSameParent(curIndex, targetIndex) {
  var curIndexArr = curIndex.split('-');
  var targetIndexArr = targetIndex.split('-');
  curIndexArr.pop();
  targetIndexArr.pop();

  if (curIndexArr.join('-') === targetIndexArr.join('-')) {
    return true;
  }

  return false;
}
/**
 * 判断当前元素在目标元素的位置 前 or 后（根据当前元素的位置和目标元素的位置）
 */

function getCurPosition(curIndex, targetIndex) {
  var curIndexArr = curIndex.split('-');
  var targetIndexArr = targetIndex.split('-');
  var curPosition = 'before'; // 默认在目标元素的前面
  // 使用短的路径进行遍历（避免空指针）

  var forEachArr = curIndexArr.length > targetIndexArr.length ? targetIndexArr : curIndexArr;

  for (var index = 0, size = forEachArr.length; index < size; index += 1) {
    var curIndexItem = Number(curIndexArr[index]);
    var targetIndexItem = Number(targetIndexArr[index]);

    if (curIndexItem > targetIndexItem) {
      curPosition = 'after'; // 表示当前元素在目标元素的后面
    }
  }

  return curPosition;
}
/**
 * 获取父元素的路径值
 */

function getParentIndexRoute(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  curIndexArr.pop();
  return curIndexArr.join('-');
}
/**
 * 获取下一个兄弟元素的路径值
 */

function getNextIndexRoute(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var lastIndex = curIndexArr.pop();
  var endIndex = Number(lastIndex) + 1;
  curIndexArr.push("".concat(endIndex));
  return curIndexArr.join('-');
}
/**
 * 获取父元素的路径值和当前index
 */

function getParentIndexRoute_CurIndex(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var curIndex = curIndexArr.pop();
  return [curIndexArr.join('-'), curIndex];
}
/**
 * 将当前路径值向前移动一位
 */

function moveForward(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) - 1);
  return curIndexArr.join('-');
}
/**
 * 将当前路径值向后移动一位
 */

function moveBackward(curIndexRoute) {
  var curIndexArr = curIndexRoute.split('-');
  var curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) + 1);
  return curIndexArr.join('-');
}

/***/ }),

/***/ "./src/utils/typeof.js":
/*!*****************************!*\
  !*** ./src/utils/typeof.js ***!
  \*****************************/
/*! exports provided: isURL, isString, isNumber, isBoolean, isDateStr, isDateTimeStr, isTimeStr, isArray, isSelect, isObject, isQuantity, isColor, isFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isURL", function() { return isURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateStr", function() { return isDateStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDateTimeStr", function() { return isDateTimeStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTimeStr", function() { return isTimeStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelect", function() { return isSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isQuantity", function() { return isQuantity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isColor", function() { return isColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony import */ var $data_TypeDataList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! $data/TypeDataList */ "./src/data/TypeDataList.js");
 // 判断是否是URL地址类型

function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s);
} // 判断是否是字符串类型

function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
} // 判断是否是数字类型

function isNumber(value) {
  return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
} // 判断是否是Boolean类型

function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
} // 判断是否是年月日的时间类型

function isDateStr(dateStr) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
} // 判断是否是年月日时分的时间类型

function isDateTimeStr(dateStr) {
  return /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(dateStr) || /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateStr);
} // 判断是否是时分的时间类型

function isTimeStr(dateStr) {
  return /^\d{2}:\d{2}:\d{2}$/.test(dateStr) || /^\d{2}:\d{2}$/.test(dateStr);
}
/**
 *  判断是否是数组类型
 * */

function isArray(curObj) {
  var isArray = false;

  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Array') {
    isArray = true;
  }

  return isArray;
}
/**
 *  判断是否是select多选类型(基础类型的array)
 *  select类型一定是一个array类型
 * */

function isSelect(curObj) {
  if (!isArray(curObj)) {
    return false;
  }

  for (var ind = 0, size = curObj.length; ind < size; ind++) {
    var arrItem = curObj[ind];

    if (!isString(arrItem)) {
      // 只要有一个不是string类型就认为不是select
      return false;
    }
  }

  return true;
}
/**
 *  判断是否是对象类型
 * */

function isObject(curObj) {
  var isObject = false;

  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
    isObject = true;
  }

  return isObject;
}
/**
 *  判断是否是单位类型
 * */

function isQuantity(val) {
  var isObject = false; // 获取当前计量单位元素可选的单位类型

  var quantityList = $data_TypeDataList__WEBPACK_IMPORTED_MODULE_0__["TypeDataList"].quantity.properties.quantity.enum;

  if (quantityList.indexOf(val) >= 0) {
    isObject = true;
  }

  return isObject;
}
/**
 *  判断是否是颜色值
 * */

function isColor(colorVal) {
  return /^#[0-9a-f]{6}$/.test(colorVal) || /^#[0-9a-f]{3}$/.test(colorVal);
}
/**
 *  判断是否是函数类型
 * */

function isFunction(curObj) {
  var isFunction = false;

  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Function') {
    isFunction = true;
  }

  return isFunction;
}

/***/ })

/******/ });
});