
# FontLoader


### 概述

字体加载器


### 示例


#### 示例样式

```scss
.example-driver-preview {
  background: #f6f7f9;
}
```

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _FontLoader(@components/FontLoader),remoteLoader(@kne/remote-loader),reactFetch(@kne/react-fetch),antd(antd)

```jsx
const { default: FontLoader } = _FontLoader;
const { createWithRemoteLoader } = remoteLoader;
const { default: Fetch } = reactFetch;
const { Space, Typography, Slider } = antd;
const { useState } = React;

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Icon']
})(({ remoteModules }) => {
  const [Icon] = remoteModules;
  const [value, setValue] = useState(30);
  return (
    <Space direction="vertical">
      <Space>
        <div>调整大小:</div>
        <Slider style={{ width: 100 }} max={60} min={12} value={value} onChange={setValue} />
        <div>{value}px</div>
      </Space>
      <FontLoader>
        {({ path }) => {
          return (
            <Fetch
              url={path + '/iconfont.json'}
              ignoreSuccessState
              render={({ data }) => {
                const list = data.glyphs;
                return (
                  <Space wrap align="top" size="large">
                    {list.map(({ name, font_class }) => {
                      return (
                        <Space className="item" direction="vertical" align="center" key={name}>
                          <Icon type={font_class} size={value} colorful />
                          <Typography.Text
                            copyable={{
                              text: '<Icon type="' + font_class + '" size={' + value + '} colorful />'
                            }}
                          >
                            {font_class}
                          </Typography.Text>
                          <div>{name}</div>
                        </Space>
                      );
                    })}
                  </Space>
                );
              }}
            />
          );
        }}
      </FontLoader>
    </Space>
  );
});

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

