# json-utils

> 提供JSON相关的各类工具方法，比如schema转json、json转schema、json元数据分析等

## json工具集合 / json工具方法清单

### 9个主要的json工具方法
- getJsonDataByKeyRoute: 根据key索引路径获取对应的数值
- getSchemaByIndexRoute: 根据index索引路径获取对应的schema数据
- indexRoute2keyRoute: 根据index索引路径获取对应的key值路径
- json2schema: 根据json数据内容获取对应的schema数据
- oldSchemaToNewSchema: 旧版jsonSchema转新版jsonSchema
- schema2json: 根据schema数据内容生成一份对应的json数据
- schemaMetaList: 当前JSON数据可视化提供的元数据清单
- metaElemAnalyzer: 根据当前的json和对应的schema，统计当前json里面用到的元数据情况
- dynamicDataAnalyzer: 根据当前的json和对应的schema，统计当前json里面用到的动态数据源情况

### json数据内容相关的操作方法
- getParentKeyRoute: 获取父元素的key路径值
- getParentKeyRoute_CurKey: 获取父元素的key路径值和当前key

### schema相关的操作方法
- getCurrentFormat: 获取当前字段的类型（format）
- isEmptySchema: 判断是否为空的Schema
- isEmptyWidgetSchema: 判断是否为空的WidgetSchema
- isUsedToWidgetConfig: 判断是否为用于区块配置的jsonSchema数据
- isNewSchemaData: 判断是否是最新版的schema数据
- isBoxSchemaData: 根据format判断是否是容器类型字段
- isFirstSchemaData: 根据format判断是否是一级类型字段(func、style、data)
- isSameParent: 判断是否是同一个父元素
- getCurPosition: 判断当前元素在目标元素的位置 前 or 后（根据当前元素的位置和目标元素的位置）
- getParentIndexRoute: 获取父元素的路径值
- getNextIndexRoute: 获取下一个兄弟元素的路径值
- getParentIndexRoute_CurIndex: 获取父元素的路径值和当前index
- moveForward: 将当前路径值向前移动一位
- moveBackward: 将当前路径值向后移动一位

### 纯工具方法
- objClone: js对象数据深拷贝，避免数据联动
- isEqual: 对比两个json数据是否相等
- exitPropertie: 判断当前属性是否存在(识别数值为false、0、null)

### 基础元数据类型判断
- isURL
- isString
- isNumber
- isBoolean
- isDateStr
- isDateTimeStr
- isTimeStr
- isArray
- isSelect
- isObject
- isQuantity
- isColor
- isFunction

## 快速使用

```
npm install --save @wibetter/json-utils
```

```js
// 获取schema转json的方法
const { schema2json } = require('@wibetter/json-utils');
const jsonSchema = {
  ...
};
const curJsonData = {
  ...
}

const jsonData = schema2json(jsonSchema, curJsonData); // schema2json
``
