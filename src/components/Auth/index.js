import { createWithRemoteLoader } from '@kne/remote-loader';
import { useEffect, useRef, useState } from 'react';
import { Flex, Typography, Tabs, Row, Col } from 'antd';
import VerificationCodeButton from '@components/VerificationCodeButton';
import MainPanel from '@components/MainPanel';
import style from './style.module.scss';

const SetFormData = createWithRemoteLoader({
  modules: ['components-core:FormInfo']
})(({ remoteModules, data }) => {
  const [FormInfo] = remoteModules;
  const { useFormContext } = FormInfo;
  const { openApi } = useFormContext();

  useEffect(() => {
    openApi.emitter.addListener('form:field:ready', field => {
      if (field.name === 'phone' && field.value) {
        openApi.emitter.emit(`form-field:validate:${field.id}`);
      }
      if (field.name === 'email' && field.value) {
        openApi.emitter.emit(`form-field:validate:${field.id}`);
      }
    });
  }, [openApi]);

  return null;
});

const Auth = createWithRemoteLoader({
  modules: ['components-core:FormInfo', 'components-core:Icon']
})(({
  remoteModules,
  className,
  title,
  onSend,
  data,
  activeTypes = ['phone', 'email'],
  onSubmit,
  tips = 'Please fill in your basic personal information',
  privacyUrl
}) => {
  const [FormInfo, Icon] = remoteModules;
  const { Form, SubmitButton } = FormInfo;
  const { Input, PhoneNumber, Checkbox } = FormInfo.fields;
  const formRef = useRef();
  const [loginType, setLoginType] = useState(activeTypes[0]);

  const tabs = {
    email: {
      key: 'email',
      label: 'Login with Email',
      children: loginType === 'email' && (
        <FormInfo column={1} list={[<Input name="email" label="email" disabled={data.email} labelHidden rule="REQ EMAIL" realtime />]} />
      )
    },
    phone: {
      key: 'phone',
      label: 'Login with SMS',
      children: loginType === 'phone' && (
        <FormInfo
          column={1}
          list={[<PhoneNumber name="phone" label="phone" disabled={data.phone} labelHidden rule="REQ" format="string" realtime />]}
        />
      )
    }
  };

  const items = activeTypes.map(name => tabs[name]).filter(item => !!item);

  return (
    <MainPanel className={className} title={title}>
      <Form ref={formRef} data={data} size="large" onSubmit={onSubmit}>
        <SetFormData data={data} />
        <Flex gap={40} vertical align="center">
          <Flex gap={20} vertical>
            <div className={style['tips']}>{tips}</div>
            <div className={style['form-inner']}>
              <Tabs activeKey={loginType} onChange={setLoginType} items={items} />
              <Input name="applicant" label="Applicant Name" rule="REQ" disabled={data.applicant} />
              <Row gutter={12}>
                <Col flex={1}>
                  <Input name="code" label="Verification code" rule="REQ" prefix={<Icon type="icon-color-leapin-password" colorful />} />
                </Col>
                <Col>
                  <VerificationCodeButton
                    size="large"
                    key={loginType}
                    onClick={async () => {
                      return onSend && (await onSend({ data: formRef.current.data, type: loginType }));
                    }}
                    type="primary"
                    className={style['code-btn']}
                    shape="round"
                    target={{ name: loginType }}
                  >
                    Send verification code
                  </VerificationCodeButton>
                </Col>
              </Row>
            </div>
          </Flex>

          <Checkbox name="privacyChecked" label="privacy" labelHidden rule="REQ">
            Please read and check the Temms of <Typography.Link href={privacyUrl}>Service and Privacy</Typography.Link>
          </Checkbox>

          <SubmitButton type="primary" shape="round" size="large">
            Confirm
          </SubmitButton>
        </Flex>
      </Form>
    </MainPanel>
  );
});

export default Auth;
