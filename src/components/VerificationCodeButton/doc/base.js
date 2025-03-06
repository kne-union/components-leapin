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
