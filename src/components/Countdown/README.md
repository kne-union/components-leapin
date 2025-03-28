
# Countdown


### 概述

倒计时


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _Countdown(@components/Countdown),antd(antd)

```jsx
const { default: Countdown } = _Countdown;
const { Button, Flex } = antd;
const { useRef } = React;
const BaseExample = () => {
  const ref = useRef(null);
  return (
    <Flex gap={10}>
      <Countdown
        ref={ref}
        onProgress={time => {
          console.log(time);
        }}
        onComplete={() => {
          console.log('complete');
        }}
      />

      <Button
        onClick={() => {
          ref.current.restart();
        }}>
        重新开始
      </Button>
      <Button
        onClick={() => {
          ref.current.pause();
        }}>
        暂停
      </Button>
      <Button
        onClick={() => {
          ref.current.start();
        }}>
        开始
      </Button>
    </Flex>
  );
};

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

