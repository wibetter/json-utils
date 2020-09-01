'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** js对象数据深拷贝，避免数据联动 */
function objClone(targetObj) {
  const newObj = JSON.stringify(targetObj);
  return JSON.parse(newObj);
}

/** 对比两个json数据是否相等 */
function isEqual(targetObj, nextTargetObj) {
  return JSON.stringify(targetObj) === JSON.stringify(nextTargetObj);
}

/** 判断当前属性是否存在
 * 备注：要识别boolean类型的数值 */
function exitPropertie(targetPropertie) {
  let exitPropertie = false;
  if (targetPropertie !== undefined) {
    // targetPropertie 等于""、0、false时均认为是存在的属性
    exitPropertie = true;
  }
  return exitPropertie;
}

/**
 * getJSONDataByKeyRoute: 根据key值路径获取对应的json数据
 * 【方法参数说明】
 * keyRoute: key值索引路径
 * targetJsonDataObj: json数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
function getJsonDataByKeyRoute(
  keyRoute,
  targetJsonDataObj,
  useObjClone,
) {
  let curJsonDataObj = targetJsonDataObj;
  if (useObjClone) {
    curJsonDataObj = objClone(targetJsonDataObj); // 进行深拷贝，避免影响原有数据
  }
  if (keyRoute) {
    const keyRouteArr = keyRoute.split('-');
    for (let index = 0, size = keyRouteArr.length; index < size; index++) {
      // 1、获取当前的jsonKey值
      const curKey = keyRouteArr[index];
      if (curKey) {
        // 只有curKey不为空的时候才进行赋值
        // 2、根据key值获取对应的数据对象
        curJsonDataObj = curJsonDataObj && curJsonDataObj[curKey];
      }
    }
  }
  return curJsonDataObj;
}

/**
 * getSchemaByIndexRoute: 根据index索引路径获取对应的schema数据
 * 【方法参数说明】
 * indexRoute: index索引路径
 * targetJsonSchemaObj: schema数据对象
 * useObjClone: 是否进行深拷贝，避免影响原有数据。（默认不进行深拷贝）
 */
function getSchemaByIndexRoute(
  indexRoute,
  targetJsonSchemaObj,
  useObjClone,
) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  if (useObjClone) {
    curJsonSchemaObj = objClone(targetJsonSchemaObj); // 进行深拷贝，避免影响原有数据
  }
  if (indexRoute) {
    const indexRouteArr = indexRoute.split('-');
    for (let index = 0, size = indexRouteArr.length; index < size; index++) {
      // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
      const curIndex = indexRouteArr[index];
      if (
        curIndex === '0' &&
        (curJsonSchemaObj.format === 'array' ||
          curJsonSchemaObj.format === 'radio' ||
          curJsonSchemaObj.format === 'select') &&
        curJsonSchemaObj.items
      ) {
        // 从items中获取数据
        curJsonSchemaObj = curJsonSchemaObj.items;
      } else if (curIndex) {
        let curKeyTemp = '0';
        // 1、先根据路径值获取key值
        if (curJsonSchemaObj.propertyOrder) {
          curKeyTemp = curJsonSchemaObj.propertyOrder[curIndex];
        } else if (curJsonSchemaObj.properties) {
          const propertyOrder = Object.keys(curJsonSchemaObj.properties);
          curKeyTemp = propertyOrder[curIndex];
        }
        // 2、根据key值获取对应的json数据对象
        curJsonSchemaObj = curJsonSchemaObj.properties[curKeyTemp];
      }
    }
  }
  return curJsonSchemaObj;
}

/**
 * indexRoute2keyRoute：根据index索引路径获取对应的key值路径
 * 【方法参数说明】
 * indexRoute: index索引路径
 * targetJsonSchemaObj: schema数据对象
 * */
function indexRoute2keyRoute(indexRoute, targetJsonSchemaObj) {
  let curJsonSchemaObj = targetJsonSchemaObj;
  let curKeyRoute = '';
  const indexRouteArr = indexRoute.split('-');
  for (let index = 0, size = indexRouteArr.length; index < size; index++) {
    // 获取指定路径的json数据对象，需要按以下步骤（备注：确保是符合规则的json格式数据）
    const curIndex = indexRouteArr[index];
    if (curIndex === '0' && curJsonSchemaObj.items) {
      // 从items中获取数据
      curJsonSchemaObj = curJsonSchemaObj.items; // 对象类型数据引用
      curKeyRoute = curKeyRoute ? `${curKeyRoute}-items` : 'items';
    } else if (curIndex) {
      // 1、先根据路径值获取key值
      let curKey = '0';
      // 1、先根据路径值获取key值
      if (curJsonSchemaObj.propertyOrder) {
        curKey = curJsonSchemaObj.propertyOrder[curIndex];
      } else if (curJsonSchemaObj.properties) {
        const propertyOrder = Object.keys(curJsonSchemaObj.properties);
        curKey = propertyOrder[curIndex];
      }
      // 2、根据key值获取对应的json数据对象
      curJsonSchemaObj = curJsonSchemaObj.properties[curKey]; // 对象类型数据引用
      curKeyRoute = curKeyRoute ? `${curKeyRoute}-${curKey}` : curKey;
    }
  }
  return curKeyRoute;
}

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
const initJSONSchemaData = {
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
          default: '', // 默认值
          description: '', // 字段项的说明和描述
          placeholder: '', // 输入提示
          isRequired: false,
          readOnly: false,
        },
      },
      required: ['a'],
      propertyOrder: ['a'],
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
          default: '', // 默认值
          description: '', // 字段项的说明和描述
          placeholder: '', // 输入提示
          isRequired: false,
          readOnly: false,
        },
      },
      required: ['b'],
      propertyOrder: ['b'],
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
          default: '', // 默认值
          description: '', // 字段项的说明和描述
          placeholder: '', // 输入提示
          isRequired: false,
          readOnly: false,
        },
      },
      required: ['c'],
      propertyOrder: ['c'],
    },
  },
  required: ['func', 'style', 'data'],
  propertyOrder: ['func', 'style', 'data'],
};

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
const initInputData = {
  type: 'string',
  title: '单文本框',
  format: 'input',
  default: '', // 默认值
  description: '', // 字段项的说明和描述
  placeholder: '', // 输入提示
  isRequired: false,
  readOnly: false,
};

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
const initBooleanData = {
  type: 'boolean',
  title: '布尔值',
  format: 'boolean',
  default: false, // 默认值
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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
const initTextareaData = {
  type: 'string',
  title: '多行文本框',
  format: 'textarea',
  default: '', // 默认值
  description: '', // 字段项的说明和描述
  placeholder: '', // 输入提示
  isRequired: false,
  readOnly: false,
};

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
const initNumberData = {
  type: 'number',
  title: '数值',
  format: 'number',
  default: 1, // 默认值
  minimum: 0, // 在高级设置中配置
  maximum: 1000, // 在高级设置中配置
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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
const initRadioData = {
  type: 'string',
  title: '单选',
  format: 'radio',
  items: {
    type: 'string', // 不可编辑
    enum: ['a', 'b', 'c'],
    enumextra: ['选项a', '选项b', '选项c'],
  },
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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
const initSelectData = {
  type: 'array',
  title: '多选',
  format: 'select',
  items: {
    type: 'string', // 不可编辑
    enum: ['a', 'b', 'c'],
    enumextra: ['选项a', '选项b', '选项c'],
  },
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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
const initDateTimeData = {
  type: 'string',
  title: '日期',
  format: 'date-time',
  default: '', // 默认值
  description: '', // 字段项的说明和描述
  placeholder: '', // 输入提示
  isRequired: false,
  readOnly: false,
};

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
const initDateData = {
  type: 'string',
  title: '日期',
  format: 'date',
  default: '', // 默认值
  description: '', // 字段项的说明和描述
  placeholder: '', // 输入提示
  isRequired: false,
  readOnly: false,
};

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
const initTimeData = {
  type: 'string',
  title: '时间',
  format: 'time',
  default: '', // 默认值
  description: '', // 字段项的说明和描述
  placeholder: '', // 输入提示
  isRequired: false,
  readOnly: false,
};

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
const initColorData = {
  type: 'string',
  title: '颜色值',
  format: 'color',
  default: '#ffffff', // 默认值
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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
const initURLData = {
  type: 'string',
  title: 'URL',
  format: 'url',
  default: '', // 默认值
  description: '', // 字段项的说明和描述
  placeholder: '', // 输入提示
  isRequired: false,
  readOnly: false,
};

/** image图片类型字段
 *  用户可以使用此组件上传图片，最后返回对应的图片资源地址
 * */
const initIMGData = {
  type: 'string',
  title: 'IMG',
  format: 'image',
  default: '', // 默认值
  description: '点击上传图片', // 字段项的说明和描述
  imgWidth: 200, // 图片默认的宽度，单位默认px
  imgHeight: 200, // 图片默认的高度，单位默认px
  imgRatio: 1, // 图片宽高比例是否可调整
  imgRatioReadOnly: false, // 图片宽高比例是否可调整
  isRequired: false,
  readOnly: false,
};

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
const initArrayData = {
  type: 'array',
  format: 'array',
  title: '数组',
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
  items: {
    type: 'object', // 不可编辑
    format: 'object',
    title: '数组项',
    description: '', // 字段项的说明和描述
    isRequired: false,
    readOnly: false,
    properties: {
      name: {
        type: 'string',
        format: 'input',
        title: '名字',
        default: '', // 默认值
        description: '', // 字段项的说明和描述
        placeholder: '', // 输入提示
        isRequired: false,
        readOnly: false,
      },
    },
    required: ['name'],
    propertyOrder: ['name'],
  },
};

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
const initObjectData = {
  type: 'object',
  format: 'object',
  title: '对象类型',
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
  properties: {
    a: {
      type: 'string',
      title: '单文本框',
      format: 'input',
      default: '', // 默认值
      description: '', // 字段项的说明和描述
      placeholder: '', // 输入提示
      isRequired: false,
      readOnly: false,
    },
  },
  required: ['a'],
  propertyOrder: ['a'],
};

// 空数组的schema数据
const EmptyArray = {
  type: 'array',
  format: 'array',
  title: '数组',
  description: '',
  items: {
    type: 'object',
    format: 'object',
    title: '数组项',
    description: '',
    properties: {},
  },
};

// 空对象的schema数据
const EmptyObject = {
  type: 'object',
  format: 'object',
  title: '对象类型',
  description: '',
  properties: {},
};

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
const initQuantityData = {
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
      default: 50, // 默认值
      minimum: 0, // 在高级设置中配置
      maximum: 1000, // 在高级设置中配置
      description: '', // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
    quantity: {
      type: 'string',
      format: 'typeSelect', // 选择列表
      default: 'px',
      enum: ['px', 'rem', 'em', '%'],
      enumextra: ['px', 'rem', 'em', '%'],
      title: '单位类型',
      isRequired: false,
      readOnly: false,
    },
  },
  required: ['unit', 'quantity'],
  propertyOrder: ['unit', 'quantity'],
};

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
const initJsonData = {
  type: 'string',
  title: 'json数据项',
  format: 'json',
  default: '{}', // 默认值
  description: '', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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
const initCodeAreaData = {
  type: 'string',
  title: '函数类型',
  format: 'codearea',
  placeholder: '请输入函数方法', // 输入提示
  default: 'function func() { console.log("hello, world!"); }', // 默认值
  description: '用于定义函数方法', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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
const initHtmlAreaData = {
  type: 'string',
  title: '富文本类型',
  format: 'htmlarea',
  placeholder: '请输入html代码片段',
  default: '<p>hello,world!</p>', // 默认值
  description: '用于放置html代码片段', // 字段项的说明和描述
  isRequired: false,
  readOnly: false,
};

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

/** 新版EventData
 * type: emit 的默认数据 */
const initEventData = {
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
      readOnly: false,
    },
    trigger: {
      type: 'string',
      format: 'input',
      default: 'eventName',
      title: '触发事件',
      description: '用于输入触发事件的名称',
      placeholder: '请输入触发事件的名称',
      isRequired: false,
      readOnly: false,
    },
    eventData: {
      type: 'string',
      title: '事件数据',
      format: 'json',
      default: '{}', // 默认值
      description: '传递给触发事件的数据对象', // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
  },
  required: ['type', 'trigger', 'eventData'],
  propertyOrder: ['type', 'trigger', 'eventData'],
};

/** 新版EventData
 * type: on 的默认数据 */
const initEventDataTypeON = {
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
      readOnly: false,
    },
    register: {
      type: 'string',
      format: 'input',
      default: 'eventName',
      title: '注册事件',
      description: '用于输入注册事件的名称',
      placeholder: '请输入注册事件的名称',
      isRequired: false,
      readOnly: false,
    },
    actionFunc: {
      type: 'string',
      title: '执行函数',
      format: 'codearea',
      default: '() => {}', // 默认值
      description: '', // 字段项的说明和描述
      isRequired: false,
      readOnly: false,
    },
  },
  required: ['type', 'register', 'actionFunc'],
  propertyOrder: ['type', 'register', 'actionFunc'],
};

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
const initDataSourceData = {
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
      title: '数据源类型',
    },
    data: {
      type: 'string',
      title: '本地json数据',
      placeholder: '请输入静态json数据', // 输入提示
      format: 'json',
      default: '{}', // 默认值
      description: '用于设置本地的静态json数据',
      isRequired: true,
    },
    filter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true,
    },
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter'],
};

// 默认是用于展示local本地数据源的，如果展示远程数据源使用initDataSourceDataV2
const initDataSourceDataV2 = {
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
      title: '数据源类型',
    },
    data: {
      type: 'string',
      title: '远程json数据',
      placeholder: '请输入远程json数据源地址', // 输入提示
      format: 'url',
      default: 'http://xxx', // 默认值
      isRequired: true,
      description: '用于设置获取元素数据的请求地址',
    },
    filter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: '() => {}',
      description: '用于定义过滤当前数据的函数',
      isRequired: true,
    },
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter'],
};

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
const initDynamicData = {
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
      title: '数据类型',
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
          title: '数据类型',
        },
        body: {
          type: 'object',
          title: '请求参数配置',
          format: 'object',
          description: '用于配置当前接口的请求参数数值',
          isRequired: true,
        },
        filter: {
          type: 'string',
          title: '过滤器函数体',
          format: 'codearea',
          default: 'return data;',
          description: '用于定义过滤接口数据',
          isRequired: true,
        },
      },
      required: ['dataName', 'body', 'filter'],
      propertyOrder: ['dataName', 'body', 'filter'],
    },
    data: {
      type: 'string',
      title: '数据内容',
      format: 'json',
      default: '{}', // 默认值
      description: '用于存放DynamicData的数据内容',
      isRequired: true,
    },
    localFilter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: 'return data;',
      description: '用于定义过滤本地数据',
      isRequired: true,
    },
  },
  required: ['type', 'config', 'data', 'localFilter'],
  propertyOrder: ['type', 'config', 'data', 'localFilter'],
};

// 动态数据对应的空json数据内容
const EmptyDynamicDataCont = {
  type: 'local',
  config: {
    dataName: '', // 动态数据源名称
    body: {}, // 请求参数相关
    filter: 'return data;',
  },
  data: '{}', // 用于存储结果数据
  localFilter: 'return data;',
};

// 类型数据清单
const TypeDataList = {
  jsonschema: initJSONSchemaData,
  input: initInputData,
  boolean: initBooleanData,

  object: initObjectData,
  array: initArrayData,
  'empty-array': EmptyArray,
  'empty-object': EmptyObject,
  url: initURLData,
  textarea: initTextareaData,
  color: initColorData,
  img: initIMGData,
  number: initNumberData,
  json: initJsonData,
  codearea: initCodeAreaData,
  htmlarea: initHtmlAreaData,
  date: initDateData,
  'date-time': initDateTimeData,
  time: initTimeData,
  quantity: initQuantityData,
  radio: initRadioData,
  select: initSelectData,
  'dynamic-data': initDynamicData,
  datasource: initDataSourceData,
  event: initEventData,
};

// 事件类型数据
const EventTypeDataList = {
  on: initEventDataTypeON,
  emit: initEventData,
};

// 数据源类型
const DataSourceTypeList = {
  local: initDataSourceData,
  remote: initDataSourceDataV2,
};

// 判断是否是URL地址类型
function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s);
}
// 判断是否是字符串类型
function isString(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}
// 判断是否是数字类型
function isNumber(value) {
  return (
    typeof value === 'number' ||
    Object.prototype.toString.call(value) === '[object Number]'
  );
}
// 判断是否是Boolean类型
function isBoolean(o) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
}

// 判断是否是年月日的时间类型
function isDateStr(dateStr) {
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

// 判断是否是年月日时分的时间类型
function isDateTimeStr(dateStr) {
  return (
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}$/.test(dateStr) ||
    /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/.test(dateStr)
  );
}

// 判断是否是时分的时间类型
function isTimeStr(dateStr) {
  return /^\d{2}:\d{2}:\d{2}$/.test(dateStr) || /^\d{2}:\d{2}$/.test(dateStr);
}

/**
 *  判断是否是数组类型
 * */
function isArray(curObj) {
  let isArray = false;
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
  for (let ind = 0, size = curObj.length; ind < size; ind++) {
    const arrItem = curObj[ind];
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
  let isObject = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Object') {
    isObject = true;
  }
  return isObject;
}

/**
 *  判断是否是单位类型
 * */
function isQuantity(val) {
  let isObject = false;
  // 获取当前计量单位元素可选的单位类型
  const quantityList = TypeDataList.quantity.properties.quantity.enum;
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
  let isFunction = false;
  if (Object.prototype.toString.call(curObj).slice(8, -1) === 'Function') {
    isFunction = true;
  }
  return isFunction;
}

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
  let curJsonSchema = '';
  if (isBoolean(jsonData)) {
    // 1、Boolean类型
    curJsonSchema = objClone(TypeDataList.boolean);
  } else if (isNumber(jsonData)) {
    // 2、Number类型
    curJsonSchema = objClone(TypeDataList.number);
  } else if (isURL(jsonData)) {
    // 3、URL类型
    curJsonSchema = objClone(TypeDataList.url);
  } else if (isDateStr(jsonData)) {
    // 4、Date类型
    curJsonSchema = objClone(TypeDataList.date);
  } else if (isDateTimeStr(jsonData)) {
    // 5、DateTime类型
    curJsonSchema = objClone(TypeDataList['date-time']);
  } else if (isTimeStr(jsonData)) {
    // 6、Time类型
    curJsonSchema = objClone(TypeDataList.time);
  } else if (isColor(jsonData)) {
    // 7、Color类型
    curJsonSchema = objClone(TypeDataList.color);
  } else {
    try {
      // json数据类型：进行格式化（检查是否是合格的json字符串数据）
      const jsonDataObj = JSON.parse(jsonData);
      if (isNumber(jsonDataObj)) {
        // 简单数字字符串类型数值统一认为是字符串类型
        curJsonSchema = objClone(TypeDataList.input);
      } else {
        // 排除简单数字字符串类型数值
        curJsonSchema = objClone(TypeDataList.json);
      }
    } catch (err) {
      // textarea类型
      if (jsonData && jsonData.length > 30) {
        // 字符串长度超过50则认为是codearea类型
        curJsonSchema = objClone(TypeDataList.textarea);
      } else {
        // 其他类型(input、radio、codearea、htmlarea)
        curJsonSchema = objClone(TypeDataList.input);
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
  let curJsonSchema;
  if (isObject(jsonData)) {
    const properties = Object.keys(jsonData);
    if (jsonData.data && jsonData.filter && properties.length === 2) {
      // DataSource数据源类型
      if (isArray(jsonData.data) || isObject(jsonData.data)) {
        // 本地数据源类型
        curJsonSchema = objClone(DataSourceTypeList.local);
      } else {
        // 远程数据源类型
        curJsonSchema = objClone(DataSourceTypeList.remote);
      }
    } else if (
      jsonData.trigger &&
      jsonData.eventData &&
      properties.length === 2
    ) {
      // 触发事件类型（固定格式的Object类型）
      curJsonSchema = objClone(EventTypeDataList.emit);
    } else if (
      jsonData.register &&
      jsonData.actionFunc &&
      properties.length === 2
    ) {
      // 注册事件类型（固定格式的Object类型）
      curJsonSchema = objClone(EventTypeDataList.on);
    } else if (
      jsonData.quantity &&
      isQuantity(jsonData.quantity) &&
      properties.length === 2
    ) {
      // 计量单位类型（固定格式的Object类型）
      curJsonSchema = objClone(TypeDataList.quantity);
    } else {
      // 其他非固定格式的Object类型
      curJsonSchema = objClone(TypeDataList['empty-object']); // 新建空数组对象schema
      // 遍历子数据项目
      Object.keys(jsonData).map((jsonKey) => {
        const curJsonItem = jsonData[jsonKey];
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
  let curJsonSchema;
  // 判断是否是数组类型
  if (jsonData && isArray(jsonData)) {
    // 判断是否select类型（select类型是字符串类型的array）
    if (isSelect(jsonData)) {
      curJsonSchema = objClone(TypeDataList.select);
      // 将当前jsonData的值设置为select的选项值
      curJsonSchema.items.enum = jsonData;
      const enumextraLength = curJsonSchema.items.enumextra.length;
      const arrLength = jsonData.length;
      if (arrLength > enumextraLength) {
        // 如果当前jsonDats的数值个数大于selectSchemaData的选项个数，则需要进行补充
        for (let ind = enumextraLength, size = arrLength; ind < size; ind++) {
          curJsonSchema.items.enumextra.push(`选项${jsonData(ind)}`);
        }
      }
    } else {
      curJsonSchema = objClone(TypeDataList['empty-array']); // 新建空数组对象schema
      // 根据第一个数组项获取items的schema对象
      const arrItemObj = json2schema(jsonData[0]); // 正常情况下，Array的一级子对象是Object类型
      curJsonSchema.items.properties = arrItemObj.properties;
    }
  }
  return curJsonSchema;
}

/**
 * 根据jsonData生成一份对应的jsonSchema
 * */
function json2schema(jsonData) {
  let curJsonSchema = {};
  if (jsonData && isObject(jsonData)) {
    curJsonSchema = objectJson2Schema(jsonData);
  } else if (jsonData && isArray(jsonData)) {
    curJsonSchema = arrayJson2Schema(jsonData);
  } else {
    curJsonSchema = baseJson2Schema(jsonData);
  }
  return curJsonSchema;
}

/**
 * JSONSchema(json格式)对象的通用操作方法【非响应式数据操作方法集合】
 */

/**
 * 获取当前字段的类型（format）
 * 如果当前字段没有format字段，则根据type字段赋予默认的类型
 */
function getCurrentFormat(targetJsonData) {
  let currentType = targetJsonData && targetJsonData.format;
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
  let isEmpty = true;
  if (!targetJsonSchema) {
    return isEmpty;
  }
  const curType = getCurrentFormat(targetJsonSchema);
  if (
    curType === 'object' &&
    targetJsonSchema.properties &&
    targetJsonSchema.propertyOrder &&
    targetJsonSchema.propertyOrder.length > 0
  ) {
    // Object对象类型
    isEmpty = false;
  } else if (
    curType === 'array' &&
    targetJsonSchema.items &&
    targetJsonSchema.items.properties &&
    targetJsonSchema.items.propertyOrder &&
    targetJsonSchema.items.propertyOrder.length > 0
  ) {
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
  let isEmpty = true;
  if (targetJsonSchema) {
    const curType = getCurrentFormat(targetJsonSchema);
    if (
      curType === 'object' &&
      targetJsonSchema.properties &&
      targetJsonSchema.propertyOrder &&
      targetJsonSchema.propertyOrder.length > 0
    ) {
      const funcSchema = targetJsonSchema.properties.func || {};
      const styleSchema = targetJsonSchema.properties.style || {};
      const dataSchema = targetJsonSchema.properties.data || {};
      if (
        (funcSchema.propertyOrder && funcSchema.propertyOrder.length > 0) ||
        (styleSchema.propertyOrder && styleSchema.propertyOrder.length > 0) ||
        (dataSchema.propertyOrder && dataSchema.propertyOrder.length > 0)
      ) {
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
  let isWidgetConfig = false;
  if (targetJsonSchema) {
    const curType = getCurrentFormat(targetJsonSchema);
    if (
      curType === 'object' &&
      targetJsonSchema.properties &&
      targetJsonSchema.propertyOrder &&
      targetJsonSchema.properties.func &&
      targetJsonSchema.properties.style &&
      targetJsonSchema.properties.data
    ) {
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
  let isNewVersion = false;
  const { lastUpdateTime } = schemaData;
  // 从那一刻开始就认为是新版JSONSchema
  const newVersionTime = new Date('2020-07-29T07:30:00.691Z').getTime();
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
  let isBoxSchema = false;
  if (
    format === 'func' ||
    format === 'style' ||
    format === 'data' ||
    format === 'object'
  ) {
    isBoxSchema = true;
  }
  return isBoxSchema;
}

/** 根据format判断是否是一级类型字段
 *  一级类型字段：func、style、data
 *  备注：一级类型字段不允许拖拽和复制
 * */
function isFirstSchemaData(format) {
  let isFirstSchema = false;
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
  const curIndexArr = curIndex.split('-');
  const targetIndexArr = targetIndex.split('-');
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
  const curIndexArr = curIndex.split('-');
  const targetIndexArr = targetIndex.split('-');
  let curPosition = 'before'; // 默认在目标元素的前面
  // 使用短的路径进行遍历（避免空指针）
  const forEachArr =
    curIndexArr.length > targetIndexArr.length ? targetIndexArr : curIndexArr;
  for (let index = 0, size = forEachArr.length; index < size; index += 1) {
    const curIndexItem = Number(curIndexArr[index]);
    const targetIndexItem = Number(targetIndexArr[index]);
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
  const curIndexArr = curIndexRoute.split('-');
  curIndexArr.pop();
  return curIndexArr.join('-');
}

/**
 * 获取下一个兄弟元素的路径值
 */
function getNextIndexRoute(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const lastIndex = curIndexArr.pop();
  const endIndex = Number(lastIndex) + 1;
  curIndexArr.push(`${endIndex}`);
  return curIndexArr.join('-');
}

/**
 * 获取父元素的路径值和当前index
 */
function getParentIndexRoute_CurIndex(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  return [curIndexArr.join('-'), curIndex];
}

/**
 * 将当前路径值向前移动一位
 */
function moveForward(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) - 1);
  return curIndexArr.join('-');
}

/**
 * 将当前路径值向后移动一位
 */
function moveBackward(curIndexRoute) {
  const curIndexArr = curIndexRoute.split('-');
  const curIndex = curIndexArr.pop();
  curIndexArr.push(Number(curIndex) + 1);
  return curIndexArr.join('-');
}

/**
 * metaElemAnalyzer: 根据当前的schema，统计当前json里面用到的元数据情况
 * 【方法参数说明】
 * schemaData: 必填项，schema数据
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
  let curAnalyzerResult = analyzerResult || {};
  if (
    isObject(jsonSchema) &&
    jsonSchema.type === 'object' &&
    jsonSchema.properties
  ) {
    let curPropertyOrder = [];
    if (jsonSchema.propertyOrder) {
      curPropertyOrder = jsonSchema.propertyOrder;
    } else {
      curPropertyOrder = Object.keys(jsonSchema.properties);
    }
    curPropertyOrder.map((jsonKey) => {
      const curSchema = jsonSchema.properties[jsonKey];
      curAnalyzerResult = metaElemAnalyzer(curSchema, curAnalyzerResult);
    });
  }
  return curAnalyzerResult;
}

/** 主方法 */
function metaElemAnalyzer(curJsonSchemaObj, analyzerResult) {
  // 根据analyzerResult是否为空，判断是否是最外层的调用
  const isFirstAnalyzer = !analyzerResult ? true : false;
  let curAnalyzerResult = analyzerResult || {};
  // 根据当前schem数据分析使用到的元数据情况
  if (curJsonSchemaObj && JSON.stringify(curJsonSchemaObj) !== '{}') {
    const curFormat = getCurrentFormat(curJsonSchemaObj);
    if (
      curFormat === 'object' ||
      curFormat === 'func' ||
      curFormat === 'style' ||
      curFormat === 'data'
    ) {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['object']) {
        curAnalyzerResult['object'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['object'] = 1;
      }
      curAnalyzerResult = objectSchema2JsonData(
        curJsonSchemaObj,
        curAnalyzerResult,
      );
    } else if (curFormat === 'array') {
      // 最外层的schema类型不进行统计
      if (!isFirstAnalyzer && curAnalyzerResult['array']) {
        curAnalyzerResult['array'] += 1;
      } else if (!isFirstAnalyzer) {
        curAnalyzerResult['array'] = 1;
      }
      curJsonSchemaObj = curJsonSchemaObj.items;
      curAnalyzerResult = objectSchema2JsonData(
        curJsonSchemaObj,
        curAnalyzerResult,
      );
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

/**
 * oldSchemaToNewSchema：旧版jsonSchema转新版jsonSchema
 * 新版新增propertyOrder属性（排序展示需要），因此旧版的required需要根据properties生成对应的propertyOrder属性
 * 备注：新版的title需要从description中获取值（旧版的title值使用的是description字段的值）
 * */

function oldSchemaToNewSchema(oldSchema) {
  let newJSONSchema = objClone(oldSchema); // 进行深拷贝，避免影响原有数据;
  // 1.根据原有的description值生成title值
  if (!newJSONSchema.title && newJSONSchema.description) {
    newJSONSchema.title = newJSONSchema.description;
  }
  // 2.当format为空时重新进行赋值
  if (!newJSONSchema.format) {
    newJSONSchema.format = getCurrentFormat(newJSONSchema);
  }
  // 3.不需要default属性的类型自动删除
  if (
    (newJSONSchema.format === 'quantity' ||
      newJSONSchema.format === 'array' ||
      newJSONSchema.format === 'datasource' ||
      newJSONSchema.format === 'event' ||
      newJSONSchema.format === 'object' ||
      newJSONSchema.format === 'radio' ||
      newJSONSchema.format === 'select') &&
    exitPropertie(newJSONSchema.default)
  ) {
    delete newJSONSchema.default; // 单位计量输入类型的默认值改放unit属性中
  }
  // 转换旧版的radio类型的数据结构
  if (newJSONSchema.format === 'radio') {
    newJSONSchema.type = 'string';
    if (newJSONSchema.enum && newJSONSchema.enumextra) {
      // 统一转换至items
      newJSONSchema.items = {
        type: 'string',
        enum: objClone(newJSONSchema.enum),
        enumextra: objClone(newJSONSchema.enumextra),
      };
      // 删除此前的enum、enumextra
      delete newJSONSchema.enum;
      delete newJSONSchema.enumextra;
    }
  }
  // 转换旧版的quantity类型的数据结构
  if (newJSONSchema.format === 'quantity') {
    const curProperties = newJSONSchema.properties;
    const newQuantitySchema = objClone(TypeDataList.quantity); // 新版quantity的schema数据对象
    if (
      curProperties.quantity &&
      isObject(curProperties.quantity) &&
      curProperties.quantity.default
    ) {
      const oldDefault = curProperties.quantity.default;
      // percent 自动转换成 %
      newQuantitySchema.properties.quantity.default =
        oldDefault === 'percent' ? '%' : oldDefault;
    }
    // 融合新版schema数据
    newJSONSchema = newQuantitySchema;
  }
  // 转换旧版的datasource类型的数据结构
  if (newJSONSchema.format === 'datasource') {
    const curProperties = newJSONSchema.properties;
    // 先获取旧版的关键数据
    const typeProp = curProperties.type && curProperties.type.default;
    const dataProp = curProperties.data && curProperties.data.default;
    const filterProp = curProperties.filter && curProperties.filter.default;
    if (typeProp === 'local') {
      newJSONSchema = objClone(DataSourceTypeList.local);
      newJSONSchema.properties.data.default = dataProp
        ? objClone(dataProp)
        : '{}';
    } else {
      newJSONSchema = objClone(DataSourceTypeList.remote);
      newJSONSchema.properties.data.default = dataProp
        ? objClone(dataProp)
        : 'http://xxx';
    }
    newJSONSchema.properties.filter.default = filterProp
      ? objClone(filterProp)
      : '() => {}';
  }
  // 转换旧版的event类型的数据结构
  if (newJSONSchema.format === 'event') {
    const curProperties = newJSONSchema.properties;
    // 先获取旧版的关键数据
    const eventType = curProperties.type && curProperties.type.default;
    // 重构Event的数据结构
    if (eventType === 'in' || eventType === 'on') {
      // 兼容旧版的'in'和新版的'on'
      // 注册类事件: 新版type改成'on'
      const eventFunc =
        (curProperties.filter && curProperties.filter.default) || '() => {}';
      newJSONSchema = objClone(EventTypeDataList.on);
      if (curProperties.actionFunc && isObject(curProperties.actionFunc)) {
        newJSONSchema.properties.actionFunc.default =
          curProperties.actionFunc.default || objClone(eventFunc);
      }
    } else {
      // 其他，则默认为触发事件
      // 注册类事件: 新版type改成'emit'
      const eventFunc =
        (curProperties.filter && curProperties.filter.default) || '{}';
      newJSONSchema = objClone(EventTypeDataList.emit);
      if (curProperties.eventData && isObject(curProperties.eventData)) {
        newJSONSchema.properties.eventData.default =
          curProperties.eventData.default || objClone(eventFunc);
      }
    }
  }
  // 判断是否有propertyOrder属性
  if (newJSONSchema.properties) {
    // 3.重新生成required属性
    newJSONSchema.required = Object.keys(newJSONSchema.properties);
    if (!newJSONSchema.propertyOrder) {
      // 4.生成propertyOrder属性
      newJSONSchema.propertyOrder = newJSONSchema.required;
    }
    // 5.继续遍历properties属性进行转换
    newJSONSchema.propertyOrder.map((jsonKey) => {
      newJSONSchema.properties[jsonKey] = oldSchemaToNewSchema(
        newJSONSchema.properties[jsonKey],
      );
    });
  }
  // 判断是否有items属性
  if (newJSONSchema.items) {
    // 6. 转换items中的数据
    newJSONSchema.items = oldSchemaToNewSchema(newJSONSchema.items);
  }
  return newJSONSchema;
}

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
  let curJsonData = '';
  let oldValue = jsonData;

  if (
    exitPropertie(oldValue) &&
    exitPropertie(jsonSchema.default) &&
    typeof oldValue !== typeof jsonSchema.default
  ) {
    // 表示当前数据类型发生变化，则丢弃旧版数据
    oldValue = undefined;
  }
  /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
  let curValue = exitPropertie(oldValue) ? oldValue : jsonSchema.default;
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
        let curJsonItemData = ''; // 字符串类型的json数据
        // 判断当前jsonData是否是对象类型
        if (isObject(jsonData) || isArray(jsonData)) {
          curJsonItemData = jsonData;
        } else if (isFunction(jsonData) || jsonData === '') {
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
        curJsonData = exitPropertie(curValue) ? curValue : '';
      }
      break;
    case 'boolean':
      curJsonData = exitPropertie(curValue) ? curValue : false;
      break;
    case 'number':
      curJsonData = exitPropertie(curValue) ? curValue : 1;
      break;
    default:
      curJsonData = exitPropertie(curValue) ? curValue : '';
  }

  return curJsonData;
}

/**
 * Object类型的schema转jsonData
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function objectSchema2JsonData$1(jsonSchema, jsonData) {
  let curJsonData = {};
  const curType = getCurrentFormat(jsonSchema);
  if (isObject(jsonSchema) && jsonSchema.type === 'object') {
    const jsonItem = jsonSchema;
    let oldValue = jsonData;
    if (
      exitPropertie(oldValue) &&
      exitPropertie(jsonItem.default) &&
      typeof oldValue !== typeof jsonItem.default
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    const curValue = exitPropertie(oldValue) ? oldValue : jsonItem.default;

    if (curType === 'dynamic-data') {
      // 动态数据源类型（固定格式的Object类型）
      curJsonData = objClone(EmptyDynamicDataCont);
      if (curValue && isObject(curValue) && JSON.stringify(curValue) !== '{}') {
        curJsonData = Object.assign(curJsonData, curValue);
      }
    } else if (curType === 'datasource') {
      // 数据源类型（固定格式的Object类型）
      if (
        jsonItem.properties &&
        jsonItem.properties.type &&
        jsonItem.properties.type.default &&
        jsonItem.properties.type.default === 'local'
      ) {
        // 本地数据源类型
        curJsonData = {
          data: '{}',
          filter: '() => {}',
        };
        // 读取旧值
        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }
        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        }
        // 纠正data中的默认数据
        if (curJsonData.data === 'http://xxx') {
          curJsonData.data = '{}';
        }
      } else {
        // 远程数据类型
        curJsonData = {
          data: 'http://xxx',
          filter: '() => {}',
        };
        // 读取旧值
        if (curValue && curValue.data) {
          curJsonData.data = curValue.data;
        }
        if (curValue && curValue.filter) {
          curJsonData.filter = curValue.filter;
        }
        // 纠正data中的默认数据
        if (curJsonData.data === '{}') {
          curJsonData.data = 'http://xxx';
        }
      }
    } else if (curType === 'event') {
      // 事件类型（固定格式的Object类型）
      if (
        jsonItem.properties &&
        jsonItem.properties.type &&
        jsonItem.properties.type.default &&
        jsonItem.properties.type.default === 'emit'
      ) {
        // 触发事件类型
        if (curValue && curValue.type === 'out') {
          curJsonData = {
            trigger: (curValue && curValue.filter) || 'eventName', // 兼容旧版数据
            eventData: '{}',
          };
        } else {
          curJsonData = {
            trigger: 'eventName', // 兼容旧版数据
            eventData: '{}',
          };
          // 读取旧值
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
            actionFunc: (curValue && curValue.filter) || '() => {}', // 兼容旧版数据
          };
        } else {
          curJsonData = {
            register: 'eventName', // 兼容旧版数据
            actionFunc: '() => {}',
          };
          // 读取旧值
          if (curValue && curValue.register) {
            curJsonData.register = curValue.register;
          }
          if (curValue && curValue.actionFunc) {
            curJsonData.actionFunc = curValue.actionFunc;
          }
        }
      }
    } else if (jsonSchema.properties) {
      let curPropertyOrder = [];
      if (jsonSchema.propertyOrder) {
        curPropertyOrder = jsonSchema.propertyOrder;
      } else {
        curPropertyOrder = Object.keys(jsonSchema.properties);
      }
      // 其他非固定格式的Object类型
      curPropertyOrder.map((jsonKey) => {
        const curJsonItem = jsonSchema.properties[jsonKey];
        const curOldValue = jsonData && jsonData[jsonKey];
        switch (curJsonItem.type) {
          case 'array':
            curJsonData[jsonKey] = arraySchema2JsonData(
              curJsonItem,
              curOldValue,
            );
            break;
          case 'object':
            // 普通对象类型
            curJsonData[jsonKey] = objectSchema2JsonData$1(
              curJsonItem,
              curOldValue,
            );
            break;
          default:
            // 其他基础类型
            curJsonData[jsonKey] = baseSchema2JsonData(
              curJsonItem,
              curOldValue,
            );
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
  let curJsonData = [];
  // 判断是否是数组类型
  if (jsonSchema && jsonSchema.type === 'array') {
    // Array数据对象类型
    let oldValue = jsonData;
    if (
      exitPropertie(oldValue) &&
      exitPropertie(jsonSchema.default) &&
      typeof oldValue !== typeof jsonSchema.default
    ) {
      // 表示当前数据类型发生变化，则丢弃旧版数据
      oldValue = undefined;
    }
    /** 旧版原有数值优先使用，其次在使用schema中定义的默认值 */
    const curValue = exitPropertie(oldValue) ? oldValue : jsonSchema.default;

    if (jsonSchema.format === 'array') {
      if (isArray(curValue)) {
        curValue.map((arrItem) => {
          curJsonData.push(objectSchema2JsonData$1(jsonSchema.items, arrItem));
        });
      } else {
        const childItems = objectSchema2JsonData$1(jsonSchema.items, curValue);
        curJsonData.push(childItems);
      }
    } else {
      // 考虑select类型（多选的数值也是以array对象记录）
      curJsonData = exitPropertie(curValue) ? curValue : [];
    }
  }
  return curJsonData;
}

/**
 * 根据jsonSchema和旧版的jsonData生成一份对应的jsonData
 * 备注：使用旧版数据，以便进行新旧数据融合
 * */
function schema2json(jsonSchema, jsonData) {
  let curJsonData = {};
  if (jsonSchema.type === 'object') {
    curJsonData = objectSchema2JsonData$1(jsonSchema, jsonData);
  } else if (jsonSchema.type === 'array') {
    curJsonData = arraySchema2JsonData(jsonSchema, jsonData);
  } else {
    curJsonData = baseSchema2JsonData(jsonSchema, jsonData);
  }
  return curJsonData;
}

/**
 * schemaMetaList: 当前JSON数据可视化提供的元数据清单
 * 11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、img、radio、 select）
 * 9个特殊类型组件（Object、Array、Json、datasource、DynamicData、Event、CodeArea、htmlArea、quantity）
 */

// 类型数据清单
const schemaMetaList = TypeDataList;

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
  let curAnalyzerResult = analyzerResult || [];
  // 根据当前schem数据分析使用到的元数据情况
  if (curJsonData && JSON.stringify(curJsonData) !== '{}') {
    if (isObject(curJsonData)) {
      // 判断是否是动态数据类型
      if (
        curJsonData.type &&
        curJsonData.type === 'remote' &&
        curJsonData.config &&
        isObject(curJsonData.config) &&
        curJsonData.localFilter &&
        curJsonData.data
      ) {
        let apiParams = curJsonData.config.body;
        if (apiParams && !isObject(apiParams)) {
          try {
            apiParams = JSON.parse(apiParams);
          } catch (e) {
            apiParams = {};
          }
        }
        curAnalyzerResult.push({
          id: curJsonData.config.id,
          dataName: curJsonData.config.dataName,
          body: apiParams,
        });
      } else {
        const curJsonDataList = Object.keys(curJsonData);
        curJsonDataList.map((jsonKey) => {
          dynamicDataAnalyzer(curJsonData[jsonKey], curAnalyzerResult);
        });
      }
    } else if (isArray(curJsonData)) {
      curJsonData.map((jsonDataItem) => {
        dynamicDataAnalyzer(jsonDataItem, curAnalyzerResult);
      });
    }
  }
  return curAnalyzerResult;
}

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
  let dataPath = baseDataPath || 'data'; // 默认数据根路径值为data
  const dataRouteArr = dataRoute.split('-');
  dataRouteArr.map(path => {
    if (/^\d+$/.test(path)) {
      dataPath = `${dataPath}[${path}]`;
    } else {
      dataPath = `${dataPath}.${path}`;
    }
  });
  return dataPath;
}

/**
 *  mockData转treeData（供antd的TreeSelect使用）
 * */
function json2treeData(mockData, parentDataRoute) {
  let treeData = [];
  if (isObject(mockData)) {
    const mockDataProps = Object.keys(mockData);
    mockDataProps.map(propKey => {
      const mockDataItem = mockData[propKey];
      const curDataRoute = parentDataRoute ? `${parentDataRoute}-${propKey}` : propKey;
      if (isObject(mockDataItem) || isArray(mockDataItem)) {
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
          key: curDataRoute,
        });
      }
    });
  } else if (isArray(mockData)) {
    mockData.map((mockDataItem, index) => {
      const curDataRoute = parentDataRoute ? `${parentDataRoute}-${index}` : index;
      if (isObject(mockDataItem) || isArray(mockDataItem)) {
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
          key: curDataRoute,
        });
      }
    });
  }
  return treeData;
}

/**
 * 获取父元素的key路径值
 */
function getParentKeyRoute(curKeyRoute) {
  const curKeyArr = curKeyRoute.split('-');
  curKeyArr.pop();
  return curKeyArr.join('-');
}

/**
 * 获取父元素的key路径值和当前key
 */
function getParentKeyRoute_CurKey(curKeyRoute) {
  const curKeyArr = curKeyRoute.split('-');
  const curKey = curKeyArr.pop();
  return [curKeyArr.join('-'), curKey];
}

// JSONSchema关键字清单
const KeyWordList = [
  'key',
  'enum',
  'enumextra',
  'items',
  'input',
  'boolean',
  'number',
  'color',
  'url',
  'textarea',
  'radio',
  'select',
  'date',
  'date-time',
  'time',
  'json',
  'codearea',
  'htmlarea',
  'quantity',
  'dynamic-data',
  'datasource',
  'event',
  'array',
  'object',
];

exports.DataSourceTypeList = DataSourceTypeList;
exports.EventTypeDataList = EventTypeDataList;
exports.KeyWordList = KeyWordList;
exports.TypeDataList = TypeDataList;
exports.dataRoute2dataPath = dataRoute2dataPath;
exports.dynamicDataAnalyzer = dynamicDataAnalyzer;
exports.exitPropertie = exitPropertie;
exports.getCurPosition = getCurPosition;
exports.getCurrentFormat = getCurrentFormat;
exports.getJsonDataByKeyRoute = getJsonDataByKeyRoute;
exports.getNextIndexRoute = getNextIndexRoute;
exports.getParentIndexRoute = getParentIndexRoute;
exports.getParentIndexRoute_CurIndex = getParentIndexRoute_CurIndex;
exports.getParentKeyRoute = getParentKeyRoute;
exports.getParentKeyRoute_CurKey = getParentKeyRoute_CurKey;
exports.getSchemaByIndexRoute = getSchemaByIndexRoute;
exports.indexRoute2keyRoute = indexRoute2keyRoute;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isBoxSchemaData = isBoxSchemaData;
exports.isColor = isColor;
exports.isDateStr = isDateStr;
exports.isDateTimeStr = isDateTimeStr;
exports.isEmptySchema = isEmptySchema;
exports.isEmptyWidgetSchema = isEmptyWidgetSchema;
exports.isEqual = isEqual;
exports.isFirstSchemaData = isFirstSchemaData;
exports.isFunction = isFunction;
exports.isNewSchemaData = isNewSchemaData;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isQuantity = isQuantity;
exports.isSameParent = isSameParent;
exports.isSelect = isSelect;
exports.isString = isString;
exports.isTimeStr = isTimeStr;
exports.isURL = isURL;
exports.isUsedToWidgetConfig = isUsedToWidgetConfig;
exports.json2schema = json2schema;
exports.json2treeData = json2treeData;
exports.metaElemAnalyzer = metaElemAnalyzer;
exports.moveBackward = moveBackward;
exports.moveForward = moveForward;
exports.objClone = objClone;
exports.oldSchemaToNewSchema = oldSchemaToNewSchema;
exports.schema2json = schema2json;
exports.schemaMetaList = schemaMetaList;
