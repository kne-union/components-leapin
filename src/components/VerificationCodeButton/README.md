
# VerificationCodeButton


### 概述

发送验证码


### 示例

#### 示例代码

- 这里填写示例标题
- 这里填写示例说明
- _VerificationCodeButton(@components/VerificationCodeButton),remoteLoader(@kne/remote-loader)

```jsx
const { default: VerificationCodeButton } = _VerificationCodeButton;
const { createWithRemoteLoader } = remoteLoader;
const BaseExample = createWithRemoteLoader({
  modules: ['components-core:FormInfo']
})(({ remoteModules }) => {
  const [FormInfo] = remoteModules;
  const { Form } = FormInfo;
  const { Input } = FormInfo.fields;
  return (
    <Form>
      <Input name="email" label="Email" realtime />
      <VerificationCodeButton target={{ name: 'email' }}>Send</VerificationCodeButton>
    </Form>
  );
});

render(<BaseExample />);

```


### API

|属性名|说明|类型|默认值|
|  ---  | ---  | --- | --- |

