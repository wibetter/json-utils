/*!
 * @wibetter/json-utils v1.2.30
 * author: ldan@wibetter
 * build tool: AKFun
 * build time: Mon May 24 2021 16:51:13 GMT+0800 (China Standard Time)
 * build info: https://github.com/wibetter/akfun
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.JSONUtils=t():e.JSONUtils=t()}(this,(function(){return function(e){var t={};function r(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function i(e){var t=JSON.stringify(e);return JSON.parse(t)}function n(e,t){return JSON.stringify(e)===JSON.stringify(t)}function a(e){var t=!1;return null!=e&&(t=!0),t}function o(e,t,r){var n=t;if(r&&(n=i(t)),e)for(var a=e.split("-"),o=0,u=a.length;o<u;o++){var p=a[o];p&&(n=n&&n[p])}return n}function u(e,t,r){var n=t;if(r&&(n=i(t)),e)for(var a=e.split("-"),o=0,u=a.length;o<u;o++){var p=a[o];if("0"!==p||"array"!==n.format&&"radio"!==n.format&&"single-select"!==n.format&&"select"!==n.format||!n.items){if(p){var d="0";if(n.propertyOrder)d=n.propertyOrder[p];else if(n.properties){d=Object.keys(n.properties)[p]}n=n.properties[d]}}else n=n.items}return n}function p(e,t,r){var n=t;if(r&&(n=i(t)),e&&n)for(var a=e.split("-"),o=0,u=a.length;o<u;o++){var p=a[o];p&&n.properties&&(n=n.properties[p])}return n}function d(e,t){for(var r=t,i="",n=e.split("-"),a=0,o=n.length;a<o;a++){var u=n[a];if("0"===u&&r.items)r=r.items,i=i?i+"-items":"items";else if(u){var p="0";if(r.propertyOrder)p=r.propertyOrder[u];else if(r.properties){p=Object.keys(r.properties)[u]}r=r.properties[p],i=i?i+"-"+p:p}}return i}r.r(t),r.d(t,"getJsonDataByKeyRoute",(function(){return o})),r.d(t,"getSchemaByIndexRoute",(function(){return u})),r.d(t,"getSchemaByKeyRoute",(function(){return p})),r.d(t,"indexRoute2keyRoute",(function(){return d})),r.d(t,"json2schema",(function(){return k})),r.d(t,"metaElemAnalyzer",(function(){return z})),r.d(t,"oldSchemaToNewSchema",(function(){return H})),r.d(t,"schema2json",(function(){return V})),r.d(t,"schemaMetaList",(function(){return X})),r.d(t,"dynamicDataAnalyzer",(function(){return Y})),r.d(t,"dataRoute2dataPath",(function(){return ee})),r.d(t,"json2treeData",(function(){return te})),r.d(t,"objClone",(function(){return i})),r.d(t,"isEqual",(function(){return n})),r.d(t,"exitPropertie",(function(){return a})),r.d(t,"getParentKeyRoute",(function(){return re})),r.d(t,"getParentKeyRoute_CurKey",(function(){return ie})),r.d(t,"getCurrentFormat",(function(){return w})),r.d(t,"isEmptySchema",(function(){return T})),r.d(t,"isEmptyWidgetSchema",(function(){return J})),r.d(t,"isUsedToWidgetConfig",(function(){return P})),r.d(t,"isNewSchemaData",(function(){return $})),r.d(t,"isBoxSchemaData",(function(){return _})),r.d(t,"isFirstSchemaData",(function(){return B})),r.d(t,"isStructuredSchema",(function(){return C})),r.d(t,"isSameParent",(function(){return I})),r.d(t,"getCurPosition",(function(){return L})),r.d(t,"getParentIndexRoute",(function(){return U})),r.d(t,"getNextIndexRoute",(function(){return A})),r.d(t,"getParentIndexRoute_CurIndex",(function(){return K})),r.d(t,"moveForward",(function(){return E})),r.d(t,"moveBackward",(function(){return M})),r.d(t,"isURL",(function(){return g})),r.d(t,"isString",(function(){return b})),r.d(t,"isNumber",(function(){return O})),r.d(t,"isBoolean",(function(){return v})),r.d(t,"isDateStr",(function(){return j})),r.d(t,"isDateTimeStr",(function(){return h})),r.d(t,"isTimeStr",(function(){return q})),r.d(t,"isArray",(function(){return x})),r.d(t,"isSelect",(function(){return R})),r.d(t,"isObject",(function(){return S})),r.d(t,"isQuantity",(function(){return N})),r.d(t,"isColor",(function(){return D})),r.d(t,"isFunction",(function(){return F})),r.d(t,"KeyWordList",(function(){return ne})),r.d(t,"TypeDataList",(function(){return c})),r.d(t,"EventTypeDataList",(function(){return y})),r.d(t,"DataSourceTypeList",(function(){return m}));var l={type:"object",format:"event",title:"事件",isRequired:!1,readOnly:!1,properties:{type:{type:"string",default:"emit",format:"typeSelect",enum:["on","emit"],enumextra:["on","emit"],title:"事件类型",isRequired:!1,readOnly:!1},trigger:{type:"string",format:"input",default:"eventName",title:"触发事件",description:"用于输入触发事件的名称",placeholder:"请输入触发事件的名称",isRequired:!1,readOnly:!1},eventData:{type:"string",title:"事件数据",format:"json",default:"{}",description:"传递给触发事件的数据对象",isRequired:!1,readOnly:!1}},required:["type","trigger","eventData"],propertyOrder:["type","trigger","eventData"]},s={type:"object",format:"datasource",title:"数据源",readOnly:!1,properties:{type:{type:"string",default:"local",format:"typeSelect",enum:["local","remote"],enumextra:["local","remote"],title:"数据源类型"},data:{type:"string",title:"本地json数据",placeholder:"请输入静态json数据",format:"json",default:"{}",description:"用于设置本地的静态json数据",isRequired:!0},filter:{type:"string",title:"过滤器",format:"codearea",default:"() => {}",description:"用于定义过滤当前数据的函数",isRequired:!0}},required:["type","data","filter"],propertyOrder:["type","data","filter"]},f={type:"local",config:{dataName:"",body:{},filter:"return data;"},data:"{}",localFilter:"return data;"},c={jsonschema:{type:"object",title:"jsonSchemaObject",properties:{func:{type:"object",format:"func",title:"功能设置",readOnly:!0,properties:{a:{type:"string",title:"单文本框",format:"input",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1}},required:["a"],propertyOrder:["a"]},style:{type:"object",format:"style",title:"样式设置",readOnly:!0,properties:{b:{type:"string",title:"单文本框",format:"input",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1}},required:["b"],propertyOrder:["b"]},data:{type:"object",format:"data",title:"数据设置",readOnly:!0,properties:{c:{type:"string",title:"单文本框",format:"input",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1}},required:["c"],propertyOrder:["c"]}},required:["func","style","data"],propertyOrder:["func","style","data"]},input:{type:"string",title:"单文本框",format:"input",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1},boolean:{type:"boolean",title:"布尔值",format:"boolean",default:!1,description:"",isRequired:!1,readOnly:!1},object:{type:"object",format:"object",title:"对象Object",description:"",isRequired:!1,readOnly:!1,properties:{a:{type:"string",title:"单文本框",format:"input",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1}},required:["a"],propertyOrder:["a"]},array:{type:"array",format:"array",title:"数组Array",description:"",isRequired:!1,readOnly:!1,items:{type:"object",format:"object",title:"数组项",description:"",isRequired:!1,readOnly:!1,properties:{name:{type:"string",format:"input",title:"名字",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1}},required:["name"],propertyOrder:["name"]}},"empty-array":{type:"array",format:"array",title:"数组Array",description:"",items:{type:"object",format:"object",title:"数组项",description:"",properties:{}}},"empty-object":{type:"object",format:"object",title:"对象Object",description:"",properties:{}},url:{type:"string",title:"链接地址url",format:"url",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1},textarea:{type:"string",title:"多行文本框",format:"textarea",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1},color:{type:"string",title:"颜色color",format:"color",default:"#ffffff",description:"",isRequired:!1,readOnly:!1},image:{type:"string",title:"图片",format:"image",default:"",description:"上传图片",imgWidth:200,imgHeight:200,imgRatioReadOnly:!0,templateId:"",isRequired:!1},number:{type:"number",title:"数量number",format:"number",default:1,minimum:0,maximum:1e3,description:"",isRequired:!1,readOnly:!1},json:{type:"string",title:"json数据",format:"json",default:"{}",description:"",isRequired:!1,readOnly:!1},codearea:{type:"string",title:"函数类型",format:"codearea",placeholder:"请输入函数方法",default:'function func() { console.log("hello, world!"); }',description:"用于定义函数方法",isRequired:!1,readOnly:!1},htmlarea:{type:"string",title:"富文本",format:"htmlarea",placeholder:"请输入html代码片段",default:"<p>hello,world!</p>",description:"用于放置html代码片段",isRequired:!1,readOnly:!1},"text-editor":{type:"string",title:"富文本",format:"text-editor",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1},date:{type:"string",title:"日期Date",format:"date",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1},"date-time":{type:"string",title:"日期时间",format:"date-time",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1},time:{type:"string",title:"时间Time",format:"time",default:"",description:"",placeholder:"",isRequired:!1,readOnly:!1},quantity:{type:"object",format:"quantity",title:"单位计量",isRequired:!1,readOnly:!1,properties:{unit:{type:"number",title:"单位数值",format:"number",default:50,minimum:0,maximum:1e3,description:"",isRequired:!1,readOnly:!1},quantity:{type:"string",format:"typeSelect",default:"px",enum:["px","rem","em","%"],enumextra:["px","rem","em","%"],title:"单位类型",isRequired:!1,readOnly:!1}},required:["unit","quantity"],propertyOrder:["unit","quantity"]},"box-style":{type:"object",format:"box-style",title:"盒子模型",isRequired:!1,readOnly:!1,properties:{unit:{type:"string",title:"单位数值",format:"string",default:"0",description:"",isRequired:!1,readOnly:!1},quantity:{type:"string",format:"typeSelect",default:"px",enum:["px","rem","em","%"],enumextra:["px","rem","em","%"],title:"单位类型",isRequired:!1,readOnly:!1}},required:["unit","quantity"],propertyOrder:["unit","quantity"]},radio:{type:"string",title:"单选",format:"radio",items:{type:"string",enum:["a","b","c"],enumextra:["选项a","选项b","选项c"]},description:"",isRequired:!1,readOnly:!1},"single-select":{type:"string",title:"下拉单选",format:"single-select",items:{type:"string",enum:["a","b","c"],enumextra:["选项a","选项b","选项c"]},description:"",isRequired:!1,readOnly:!1},select:{type:"array",title:"多选",format:"select",items:{type:"string",enum:["a","b","c"],enumextra:["选项a","选项b","选项c"]},description:"",isRequired:!1,readOnly:!1},"dynamic-data":{type:"object",format:"dynamic-data",title:"动态数据源",readOnly:!1,properties:{type:{type:"string",default:"local",format:"typeSelect",enum:["local","remote"],enumextra:["本地数据","接口数据"],title:"数据类型"},config:{type:"object",title:"接口配置",format:"object",description:"用于存放接口的配置数据(url、请求参数等)",isRequired:!0,properties:{dataName:{type:"string",default:"local",format:"typeSelect",enum:["local","remote"],enumextra:["本地数据","接口数据"],title:"数据类型"},body:{type:"object",title:"请求参数配置",format:"object",description:"用于配置当前接口的请求参数数值",isRequired:!0},filter:{type:"string",title:"过滤器函数体",format:"codearea",default:"return data;",description:"用于定义过滤接口数据",isRequired:!0}},required:["dataName","body","filter"],propertyOrder:["dataName","body","filter"]},data:{type:"string",title:"数据内容",format:"json",default:"{}",description:"用于存放DynamicData的数据内容",isRequired:!0},localFilter:{type:"string",title:"过滤器",format:"codearea",default:"return data;",description:"用于定义过滤本地数据",isRequired:!0}},required:["type","config","data","localFilter"],propertyOrder:["type","config","data","localFilter"]},datasource:s,event:l,widget:{type:"string",title:"内嵌组件数据",format:"widget",default:"{}",description:"用于存放内嵌组件的渲染相关数据",isRequired:!1,readOnly:!0}},y={on:{type:"object",format:"event",title:"事件",isRequired:!1,readOnly:!1,properties:{type:{type:"string",default:"on",format:"typeSelect",enum:["on","emit"],enumextra:["on","emit"],title:"事件类型",isRequired:!1,readOnly:!1},register:{type:"string",format:"input",default:"eventName",title:"注册事件",description:"用于输入注册事件的名称",placeholder:"请输入注册事件的名称",isRequired:!1,readOnly:!1},actionFunc:{type:"string",title:"执行函数",format:"codearea",default:"() => {}",description:"",isRequired:!1,readOnly:!1}},required:["type","register","actionFunc"],propertyOrder:["type","register","actionFunc"]},emit:l},m={local:s,remote:{type:"object",format:"datasource",title:"数据源",readOnly:!1,properties:{type:{type:"string",default:"remote",format:"typeSelect",enum:["local","remote"],enumextra:["local","remote"],title:"数据源类型"},data:{type:"string",title:"远程json数据",placeholder:"请输入远程json数据源地址",format:"url",default:"http://xxx",isRequired:!0,description:"用于设置获取元素数据的请求地址"},filter:{type:"string",title:"过滤器",format:"codearea",default:"() => {}",description:"用于定义过滤当前数据的函数",isRequired:!0}},required:["type","data","filter"],propertyOrder:["type","data","filter"]}};function g(e){return/^http[s]?:\/\/.*/.test(e)}function b(e){return"String"===Object.prototype.toString.call(e).slice(8,-1)}function O(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function v(e){return"Boolean"===Object.prototype.toString.call(e).slice(8,-1)}function j(e){return/^\d{4}-\d{2}-\d{2}$/.test(e)}function h(e){return/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(e)||/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(e)}function q(e){return/^\d{2}:\d{2}:\d{2}$/.test(e)||/^\d{2}:\d{2}$/.test(e)}function x(e){var t=!1;return"Array"===Object.prototype.toString.call(e).slice(8,-1)&&(t=!0),t}function R(e){if(!x(e))return!1;for(var t=0,r=e.length;t<r;t++){if(!b(e[t]))return!1}return!0}function S(e){var t=!1;return"Object"===Object.prototype.toString.call(e).slice(8,-1)&&(t=!0),t}function N(e){var t=!1;return c.quantity.properties.quantity.enum.indexOf(e)>=0&&(t=!0),t}function D(e){return/^#[0-9a-f]{6}$/.test(e)||/^#[0-9a-f]{3}$/.test(e)}function F(e){var t=!1;return"Function"===Object.prototype.toString.call(e).slice(8,-1)&&(t=!0),t}function k(e){return e&&S(e)?function(e){var t;if(S(e)){var r=Object.keys(e);e.data&&e.filter&&2===r.length?t=x(e.data)||S(e.data)?i(m.local):i(m.remote):e.trigger&&e.eventData&&2===r.length?t=i(y.emit):e.register&&e.actionFunc&&2===r.length?t=i(y.on):e.quantity&&N(e.quantity)&&2===r.length?t=i(c.quantity):(t=i(c["empty-object"]),Object.keys(e).map((function(r){var i=e[r];t.properties[r]=k(i)})))}return t}(e):e&&x(e)?function(e){var t;if(e&&x(e))if(R(e)){(t=i(c.select)).items.enum=e;var r=t.items.enumextra.length,n=e.length;if(n>r)for(var a=r,o=n;a<o;a++)t.items.enumextra.push("选项"+e(a))}else{t=i(c["empty-array"]);var u=k(e[0]);t.items.properties=u.properties}return t}(e):function(e){var t="";if(v(e))t=i(c.boolean);else if(O(e))t=i(c.number);else if(g(e))t=i(c.url);else if(j(e))t=i(c.date);else if(h(e))t=i(c["date-time"]);else if(q(e))t=i(c.time);else if(D(e))t=i(c.color);else try{t=O(JSON.parse(e))?i(c.input):i(c.json)}catch(r){t=e&&e.length>30?i(c.textarea):i(c.input)}return t}(e)}function w(e){var t=e&&e.format;return t||(t=e&&e.type?e.type:"input"),t}function T(e){var t=!0;if(!e)return t;var r=w(e);return("object"===r&&e.properties&&e.propertyOrder&&e.propertyOrder.length>0||"array"===r&&e.items&&e.items.properties&&e.items.propertyOrder&&e.items.propertyOrder.length>0||e.type&&"array"!==e.type&&"object"!==e.type||e.format)&&(t=!1),t}function J(e){var t=!0;if(e&&("object"===w(e)&&e.properties&&e.propertyOrder&&e.propertyOrder.length>0)){var r=e.properties.func||{},i=e.properties.style||{},n=e.properties.data||{};(r.propertyOrder&&r.propertyOrder.length>0||i.propertyOrder&&i.propertyOrder.length>0||n.propertyOrder&&n.propertyOrder.length>0)&&(t=!1)}return t}function P(e){var t=!1;e&&("object"===w(e)&&e.properties&&e.propertyOrder&&e.properties.func&&e.properties.style&&e.properties.data&&(t=!0));return t}function $(e){var t=!1,r=e.lastUpdateTime,i=new Date("2020-07-29T07:30:00.691Z").getTime();return r&&new Date(r).getTime()>=i&&(t=!0),t}function _(e){var t=!1;return"object"!==e&&"func"!==e&&"style"!==e&&"data"!==e&&"widgets"!==e&&"func-schema"!==e&&"style-schema"!==e&&"data-schema"!==e&&"event-schema"!==e&&"widgets-schema"!==e||(t=!0),t}function B(e){var t=!1;return"func"!==e&&"style"!==e&&"data"!==e&&"event-schema"!==e&&"widgets"!==e||(t=!0),t}function C(e){var t=!0;return"object"===(e.type||w(e))&&e.propertyOrder&&e.properties?e.propertyOrder.map((function(r){var i=e.properties[r];"object"===(e.type||w(i))&&i.propertyOrder&&i.properties||(t=!1)})):t=!1,t}function I(e,t){var r=e.split("-"),i=t.split("-");return r.pop(),i.pop(),r.join("-")===i.join("-")}function L(e,t){for(var r=e.split("-"),i=t.split("-"),n="before",a=0,o=(r.length>i.length?i:r).length;a<o;a+=1){Number(r[a])>Number(i[a])&&(n="after")}return n}function U(e){var t=e.split("-");return t.pop(),t.join("-")}function A(e){var t=e.split("-"),r=t.pop(),i=Number(r)+1;return t.push(""+i),t.join("-")}function K(e){var t=e.split("-"),r=t.pop();return[t.join("-"),r]}function E(e){var t=e.split("-"),r=t.pop();return t.push(Number(r)-1),t.join("-")}function M(e){var t=e.split("-"),r=t.pop();return t.push(Number(r)+1),t.join("-")}function W(e,t){var r=t||{};if(S(e)&&"object"===e.type&&e.properties){(e.propertyOrder?e.propertyOrder:Object.keys(e.properties)).map((function(t){var i=e.properties[t];r=z(i,r)}))}return r}function z(e,t){var r=!t,i=t||{};if(e&&"{}"!==JSON.stringify(e)){var n=w(e);"object"===n||"func"===n||"style"===n||"data"===n?(!r&&i.object?i.object+=1:r||(i.object=1),i=W(e,i)):"array"===n?(!r&&i.array?i.array+=1:r||(i.array=1),i=W(e=e.items,i)):!r&&i[n]?i[n]+=1:r||(i[n]=1)}return i}function H(e){var t=i(e);if(!t.title&&t.description&&(t.title=t.description),t.format||(t.format=w(t)),"quantity"!==t.format&&"array"!==t.format&&"datasource"!==t.format&&"event"!==t.format&&"object"!==t.format&&"radio"!==t.format&&"select"!==t.format||!a(t.default)||delete t.default,"radio"===t.format&&(t.type="string",t.enum&&t.enumextra&&(t.items={type:"string",enum:i(t.enum),enumextra:i(t.enumextra)},delete t.enum,delete t.enumextra)),"quantity"===t.format){var r=t.properties,n=i(c.quantity);if(r.quantity&&S(r.quantity)&&r.quantity.default){var o=r.quantity.default;n.properties.quantity.default="percent"===o?"%":o}t=n}if("datasource"===t.format){var u=t.properties,p=u.type&&u.type.default,d=u.data&&u.data.default,l=u.filter&&u.filter.default;"local"===p?(t=i(m.local)).properties.data.default=d?i(d):"{}":(t=i(m.remote)).properties.data.default=d?i(d):"http://xxx",t.properties.filter.default=l?i(l):"() => {}"}if("event"===t.format){var s=t.properties,f=s.type&&s.type.default;if("in"===f||"on"===f){var g=s.filter&&s.filter.default||"() => {}";t=i(y.on),s.actionFunc&&S(s.actionFunc)&&(t.properties.actionFunc.default=s.actionFunc.default||i(g))}else{var b=s.filter&&s.filter.default||"{}";t=i(y.emit),s.eventData&&S(s.eventData)&&(t.properties.eventData.default=s.eventData.default||i(b))}}return t.properties&&(t.required=Object.keys(t.properties),t.propertyOrder||(t.propertyOrder=t.required),t.propertyOrder.map((function(e){t.properties[e]=H(t.properties[e])}))),t.items&&(t.items=H(t.items)),t}function Q(e,t){var r="",i=t;a(i)&&a(e.default)&&typeof i!=typeof e.default&&(i=void 0);var n=a(i)?i:e.default;switch(e.type){case"string":if("typeSelect"===e.format)r=e.default;else if("color"===e.format)"#fff"!==n&&"#FFF"!==n||(n="#ffffff"),r=n||"#ffffff";else if("json"===e.format||"widget"===e.format){var o="";if(S(t)||x(t))o=t;else if(F(t)||""===t)o={};else try{o=JSON.parse(t)}catch(e){o={}}r=o}else r=a(n)?n:"";break;case"boolean":r=!!a(n)&&n;break;case"number":r=a(n)?n:1;break;default:r=a(n)?n:""}return r}function Z(e,t){var r={},n=w(e);if(S(e)&&"object"===e.type){var o=e,u=t;a(u)&&a(o.default)&&typeof u!=typeof o.default&&(u=void 0);var p=a(u)?u:o.default;if("dynamic-data"===n)r=i(f),p&&S(p)&&"{}"!==JSON.stringify(p)&&(r=Object.assign(r,p));else if("datasource"===n)o.properties&&o.properties.type&&o.properties.type.default&&"local"===o.properties.type.default?(r={data:"{}",filter:"() => {}"},p&&p.data&&(r.data=p.data),p&&p.filter&&(r.filter=p.filter),"http://xxx"===r.data&&(r.data="{}")):(r={data:"http://xxx",filter:"() => {}"},p&&p.data&&(r.data=p.data),p&&p.filter&&(r.filter=p.filter),"{}"===r.data&&(r.data="http://xxx"));else if("event"===n)o.properties&&o.properties.type&&o.properties.type.default&&"emit"===o.properties.type.default?p&&"out"===p.type?r={trigger:p&&p.filter||"eventName",eventData:"{}"}:(r={trigger:"eventName",eventData:"{}"},p&&p.trigger&&(r.trigger=p.trigger),p&&p.eventData&&(r.eventData=p.eventData)):p&&"in"===p.type?r={register:"eventName",actionFunc:p&&p.filter||"() => {}"}:(r={register:"eventName",actionFunc:"() => {}"},p&&p.register&&(r.register=p.register),p&&p.actionFunc&&(r.actionFunc=p.actionFunc));else if(e.properties){(e.propertyOrder?e.propertyOrder:Object.keys(e.properties)).map((function(i){var n=e.properties[i],a=t&&t[i];switch(n.type){case"array":r[i]=G(n,a);break;case"object":r[i]=Z(n,a);break;default:r[i]=Q(n,a)}}))}}return r}function G(e,t){var r=[];if(e&&"array"===e.type){var i=t;a(i)&&a(e.default)&&typeof i!=typeof e.default&&(i=void 0);var n=a(i)?i:e.default;if("array"===e.format)if(x(n))n.map((function(t){r.push(Z(e.items,t))}));else{var o=Z(e.items,n);r.push(o)}else r=a(n)?n:[]}return r}function V(e,t){return"object"===e.type?Z(e,t):"array"===e.type?G(e,t):Q(e,t)}var X=c;function Y(e,t){var r=t||[];if(e&&"{}"!==JSON.stringify(e))if(S(e))if(e.type&&"remote"===e.type&&e.config&&S(e.config)&&e.config.dataName&&a(e.localFilter)&&a(e.data)){var i=e.config.body;if(i&&!S(i))try{i=JSON.parse(i)}catch(e){i={}}r.push({id:e.config.id,dataName:e.config.dataName,body:i})}else{Object.keys(e).map((function(t){Y(e[t],r)}))}else x(e)&&e.map((function(e){Y(e,r)}));return r}function ee(e,t){var r=t||"data";return e.split("-").map((function(e){r=/^\d+$/.test(e)?r+"["+e+"]":r+"."+e})),r}function te(e,t){var r=[];S(e)?Object.keys(e).map((function(i){var n=e[i],a=t?t+"-"+i:i;S(n)||x(n)?r.push({title:i,value:a,key:a,children:te(n,a)}):r.push({title:i,value:a,key:a})})):x(e)&&e.map((function(e,i){var n=i.toString(),a=t?t+"-"+i:n;S(e)||x(e)?r.push({title:n,value:a,key:a,children:te(e,a)}):r.push({title:n,value:a,key:a})}));return r}function re(e){var t=e.split("-");return t.pop(),t.join("-")}function ie(e){var t=e.split("-"),r=t.pop();return[t.join("-"),r]}var ne=["key","enum","enumextra","items","input","boolean","number","color","url","textarea","text-editor","radio","single-select","select","date","date-time","time","json","codearea","htmlarea","quantity","box-style","dynamic-data","datasource","event","array","object","widget","widgets","widgetUUID","embedWidgetList"]}])}));