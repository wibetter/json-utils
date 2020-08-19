/**
 * schemaMetaList: 当前JSON数据可视化提供的元数据清单
 * 11种基础类型组件（input、boolean、 date、date-time、 time、 url、 textarea、number、color、radio、 select）
 * 8个特殊类型组件（Object、Array、Json、datasource、Event、CodeArea、htmlArea、quantity）
 */
import {
  initInputData,
  initArrayData,
  initBooleanData,
  initColorData,
  initDataSourceData,
  initDateData,
  initDateTimeData,
  initEventData,
  initJsonData,
  initCodeAreaData,
  initHtmlAreaData,
  initNumberData,
  initObjectData,
  initQuantityData,
  initRadioData,
  initSelectData,
  initTextareaData,
  initTimeData,
  initURLData,
} from '$data/index';

// 类型数据清单
export const schemaMetaList = {
  input: initInputData,
  boolean: initBooleanData,
  date: initDateData,
  'date-time': initDateTimeData,
  time: initTimeData,
  url: initURLData,
  textarea: initTextareaData,
  color: initColorData,
  number: initNumberData,
  radio: initRadioData,
  select: initSelectData,
  object: initObjectData,
  array: initArrayData,
  json: initJsonData,
  datasource: initDataSourceData, // 默认为本地数据源
  event: initEventData, // 默认为触发事件
  codearea: initCodeAreaData,
  htmlarea: initHtmlAreaData,
  quantity: initQuantityData,
};
