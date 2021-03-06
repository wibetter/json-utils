import * as React from 'react';
import ReactDOM from 'react-dom';
import { schema2json } from './main'; // '../dist/index.esm';
import JSONEditor from '@wibetter/json-editor';
import '@wibetter/json-editor/dist/index.css';
import './index.scss';

/**
 * json-utils的测试Demo
 */
class IndexDemo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jsonSchema: {
        type: 'object',
        title: 'empty object',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            description: '功能设置',
            readOnly: true,
            properties: {},
            required: [],
            title: '功能设置',
            propertyOrder: [],
          },
          style: {
            type: 'object',
            format: 'style',
            description: '样式设置',
            readOnly: true,
            properties: {
              tabsType: {
                type: 'string',
                title: 'tabs类型',
                format: 'radio',
                items: {
                  type: 'string',
                  enum: ['line', 'card'],
                  enumextra: ['默认类型', '卡片类型'],
                },
                description: '',
                isRequired: false,
                readOnly: false,
              },
            },
            required: ['tabsType'],
            title: '样式设置',
            propertyOrder: ['tabsType'],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {
              tabNameList: {
                type: 'array',
                format: 'array',
                title: '面板 TitleList',
                description: '',
                isRequired: false,
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  description: '',
                  isRequired: false,
                  readOnly: false,
                  properties: {
                    tabName: {
                      type: 'string',
                      format: 'input',
                      title: '面板 Title',
                      default: '',
                      description: '',
                      placeholder: '',
                      isRequired: false,
                      readOnly: false,
                    },
                  },
                  required: ['tabName'],
                  propertyOrder: ['tabName'],
                },
              },
            },
            required: ['tabNameList'],
            title: '数据设置',
            propertyOrder: ['tabNameList'],
          },
          widgets: {
            type: 'object',
            format: 'widgets',
            title: '嵌套组件',
            readOnly: false,
            properties: {
              widgetUUID: {
                type: 'string',
                title: '嵌套组件UUID',
                format: 'input',
                isRequired: false,
                default: 'box-widget-e33b3258-6d73-4c07-a6e1-4f67457dafd3',
                description: '唯一标识，用于标记当前可嵌套组件',
                placeholder: '',
                readOnly: false,
              },
              embedWidgetList: {
                type: 'array',
                title: '内嵌组件数据集合',
                format: 'array',
                isRequired: false,
                description: '',
                readOnly: false,
                items: {
                  type: 'object',
                  format: 'object',
                  title: '数组项',
                  readOnly: false,
                  isRequired: false,
                  description: '',
                  properties: {
                    embedWidgetData: {
                      type: 'string',
                      format: 'json',
                      title: '内嵌组件数据',
                      isRequired: true,
                      default: '{}',
                      description: '',
                      placeholder: '',
                      readOnly: true,
                    },
                    embedWidgetKey: {
                      type: 'string',
                      format: 'input',
                      title: '内嵌组件Key',
                      isRequired: true,
                      default: '',
                      description: '',
                      placeholder: '',
                      readOnly: false,
                    },
                  },
                  required: ['embedWidgetData', 'embedWidgetKey'],
                  propertyOrder: ['embedWidgetKey', 'embedWidgetData'],
                },
              },
            },
            required: ['widgetUUID', 'embedWidgetList'],
            propertyOrder: ['widgetUUID', 'embedWidgetList'],
          },
        },
        required: ['func', 'style', 'data', 'widgets'],
        format: 'object',
        propertyOrder: ['func', 'style', 'data', 'widgets'],
        lastUpdateTime: '2020-10-22T09:44:01.419Z',
      },
      jsonSchema7: {
        type: 'object',
        title: 'empty object',
        properties: {
          func: {
            type: 'object',
            format: 'func',
            description: '功能设置',
            readOnly: true,
            properties: {
              mainTitle: {
                type: 'string',
                description: '设置主title',
                format: 'input',
                title: '设置主title',
              },
              subTitle: {
                type: 'string',
                description: '设置副title',
                format: 'input',
                title: '设置副title',
              },
              backtitle: {
                type: 'string',
                description: '图标title',
                format: 'input',
                title: '图标title',
              },
              bottomIconUrl: {
                type: 'string',
                format: 'url',
                description: '底部图标',
                title: '底部图标',
              },
              backIcon: {
                type: 'string',
                format: 'url',
                description: '背景图标',
                title: '背景图标',
              },
              backImageUrl: {
                type: 'string',
                format: 'url',
                description: '背景图',
                title: '背景图',
              },
            },
            required: [
              'mainTitle',
              'subTitle',
              'backtitle',
              'bottomIconUrl',
              'backIcon',
              'backImageUrl',
            ],
            title: '功能设置',
            propertyOrder: [
              'mainTitle',
              'subTitle',
              'backtitle',
              'bottomIconUrl',
              'backIcon',
              'backImageUrl',
            ],
          },
          style: {
            type: 'object',
            format: 'style',
            description: '样式设置',
            readOnly: true,
            properties: {
              isShowSubTitle: {
                type: 'string',
                format: 'radio',
                description: '展示副标题',
                title: '展示副标题',
                items: {
                  type: 'string',
                  enum: ['show', 'hide'],
                  enumextra: ['展示', '隐藏'],
                  format: 'string',
                },
              },
              wrapPadding: {
                type: 'object',
                format: 'quantity',
                title: '单位计量',
                isRequired: false,
                readOnly: false,
                properties: {
                  unit: {
                    type: 'number',
                    title: '单位数值',
                    format: 'number',
                    default: 50,
                    minimum: 0,
                    maximum: 1000,
                    description: '',
                    isRequired: false,
                    readOnly: false,
                  },
                  quantity: {
                    type: 'string',
                    format: 'typeSelect',
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
              },
              backColor: {
                type: 'string',
                format: 'color',
                description: '背景色',
                title: '背景色',
              },
              titlePosition: {
                type: 'array',
                format: 'select',
                items: {
                  type: 'string',
                  enum: ['left', 'center', 'right'],
                  enumextra: ['居左', '居中', '居右'],
                  format: 'string',
                },
                uniqueItems: true,
                description: '标题位置',
                title: '标题位置',
              },
            },
            required: [
              'isShowSubTitle',
              'wrapPadding',
              'backColor',
              'titlePosition',
            ],
            title: '样式设置',
            propertyOrder: [
              'isShowSubTitle',
              'wrapPadding',
              'backColor',
              'titlePosition',
            ],
          },
          data: {
            type: 'object',
            format: 'data',
            description: '数据设置',
            readOnly: true,
            properties: {
              event: {
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
                    default: '{}',
                    description: '传递给触发事件的数据对象',
                    isRequired: false,
                    readOnly: false,
                  },
                },
                required: ['type', 'trigger', 'eventData'],
                propertyOrder: ['type', 'trigger', 'eventData'],
              },
              getData: {
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
                    placeholder: '请输入静态json数据',
                    format: 'json',
                    default: 'local',
                    description: '用于设置本地的静态json数据',
                    isRequired: true,
                  },
                  filter: {
                    type: 'string',
                    title: '过滤器',
                    format: 'codearea',
                    default: 'return data;',
                    description: '用于定义过滤当前数据的函数',
                    isRequired: true,
                  },
                },
                required: ['type', 'data', 'filter'],
                propertyOrder: ['type', 'data', 'filter'],
              },
            },
            required: ['event', 'getData'],
            title: '数据设置',
            propertyOrder: ['event', 'getData'],
          },
          widgets: {
            type: 'object',
            format: 'widgets',
            title: '嵌套组件',
            readOnly: false,
            properties: {
              widgetUUID: {
                type: 'string',
                title: '嵌套组件UUID',
                format: 'input',
                isRequired: false,
                default: 'box-widget-e33b3258-6d73-4c07-a6e1-4f67457dafd3',
                description: '唯一标识，用于标记当前可嵌套组件',
                placeholder: '',
                readOnly: false,
              },
              embedWidgetA: {
                type: 'string',
                title: '内嵌组件A',
                format: 'widget',
                default: '{}',
                description: '用于存放内嵌组件的渲染数据',
                isRequired: false,
                readOnly: true,
              },
              embedWidgetB: {
                type: 'string',
                title: '内嵌组件B',
                format: 'widget',
                default: '{}',
                description: '用于存放内嵌组件的渲染数据',
                isRequired: false,
                readOnly: true,
              },
            },
            required: ['widgetUUID', 'embedWidgetA', 'embedWidgetB'],
            propertyOrder: ['widgetUUID', 'embedWidgetA', 'embedWidgetB'],
          },
        },
        required: ['func', 'style', 'data', 'widgets'],
        format: 'object',
        propertyOrder: ['func', 'style', 'data', 'widgets'],
        lastUpdateTime: '2020-10-13T09:19:20.980Z',
      }, // 用于组件配置的schema  显示 ok / update ok
      jsonData: {
        func: {},
        style: {
          tabsType: 'line',
        },
        data: {
          tabNameList: [
            {
              tabName: '面板A',
            },
            {
              tabName: '面板B',
            },
            {
              tabName: '面板C',
            },
          ],
        },
        widgets: {
          widgetUUID: '9341fabf-d7ec-421d-a1af-04c61dc58b4b',
          embedWidgetList: [
            {
              embedWidgetKey: 'embedWidgetA',
              embedWidgetData: {},
            },
            {
              embedWidgetKey: 'embedWidgetB',
              embedWidgetData: {},
            },
            {
              embedWidgetKey: 'embedWidgetC',
              embedWidgetData: {},
            },
          ],
        },
      },
      wideScreen: true,
      jsonView: true,
    };
  }

  render() {
    const { jsonSchema, jsonData, wideScreen, jsonView } = this.state;

    return (
      <>
        <div className="title-container">
          <div className="title2-box">
            <p>
              <b>当前的JSON数据内容</b>
            </p>
          </div>
        </div>
        <div className="json-action-container">
          <div className="json-editor-box">
            <JSONEditor
              jsonView={jsonView} // code模式
              wideScreen={wideScreen} // 宽屏和小屏的配置项
              schemaData={jsonSchema}
              jsonData={jsonData}
              onChange={(newJsonData) => {
                console.log('jsonDataChange', JSON.stringify(newJsonData));
                this.setState({
                  jsonData: newJsonData,
                });
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <div>
    <h1>json-utils Demo</h1>

    <br />

    <IndexDemo />
  </div>,
  document.getElementById('root'),
);
