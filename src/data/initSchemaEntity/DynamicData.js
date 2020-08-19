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
export const initDynamicData = {
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
      enumextra: ['local', 'remote'],
      title: '数据类型',
    },
    data: {
      type: 'string',
      title: '本地静态数据',
      format: 'json',
      default: '{}', // 默认值
      description: '用于存放本地静态数据内容',
      isRequired: true,
    },
    filter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: '(resp) => { return resp.data; }',
      description: '用于定义过滤当前静态数据的函数',
      isRequired: true,
    },
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter'],
};

// 默认是用于展示remote接口动态数据，如果展示接口动态数据请使用initDynamicDataV2
export const initDynamicDataV2 = {
  type: 'object',
  format: 'dynamic-data',
  title: '动态数据',
  readOnly: false,
  properties: {
    type: {
      type: 'string',
      default: 'remote',
      format: 'typeSelect',
      enum: ['local', 'remote'],
      enumextra: ['local', 'remote'],
      title: '数据类型',
    },
    data: {
      type: 'string',
      title: '接口动态数据',
      format: 'json',
      default: '{}', // 默认值
      description: '用于存放接口动态数据内容',
      isRequired: true,
    },
    filter: {
      type: 'string',
      title: '过滤器',
      format: 'codearea',
      default: '(resp) => { return resp.data; }',
      description: '用于定义过滤当前动态数据的函数',
      isRequired: true,
    },
  },
  required: ['type', 'data', 'filter'],
  propertyOrder: ['type', 'data', 'filter'],
};

// 动态数据对应的json数据内容
const DynamicDataCont = {
  type: 'remote',
  config: {
    dataName: 'data-12',  // 动态数据源名称
    title: 'xxx数据源', // 数据源中文名称
    desc: 'xxx数据源描述', //  数据源中文描述
    url: 'https://api.thecatapi.com/v1/images/search', // 动态数据源请求地址
    method: 'get',
    option: {},
    header: {}, // 请求头
    body: { // 请求参数相关
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
      },
    },
    mock: '{}',
  },
  filter: `(resp) => { return resp.data; }`,
  data: '{}', // 用于存储结果数据
};
