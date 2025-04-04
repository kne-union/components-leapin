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
