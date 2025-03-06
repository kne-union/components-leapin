import { createWithRemoteLoader } from '@kne/remote-loader';
import { useRef, useState } from 'react';
import { Flex, Typography, Tabs, Row, Col } from 'antd';
import VerificationCodeButton from '@components/VerificationCodeButton';
import MainPanel from '@components/MainPanel';
import style from './style.module.scss';

const Auth = createWithRemoteLoader({
  modules: ['components-core:FormInfo', 'components-core:Icon']
})(({ remoteModules, className, title, onSend, data, onSubmit, tips = 'Please fill in your basic personal information', privacyUrl }) => {
  const [FormInfo, Icon] = remoteModules;
  const { Form, SubmitButton } = FormInfo;
  const { Input, PhoneNumber, Checkbox } = FormInfo.fields;
  const formRef = useRef();
  const [loginType, setLoginType] = useState('phone');
  return (
    <MainPanel className={className} title={title}>
      <Form ref={formRef} data={data} onSubmit={onSubmit}>
        <Flex gap={40} vertical align="center">
          <Flex gap={20} vertical>
            <div className={style['tips']}>{tips}</div>
            <div className={style['form-inner']}>
              <Tabs
                activeKey={loginType}
                onChange={setLoginType}
                items={[
                  {
                    key: 'phone',
                    label: 'Login with SMS',
                    children: (
                      <FormInfo
                        column={1}
                        list={[<PhoneNumber name="phone" label="phone" labelHidden rule="REQ" interceptor="phone-number-string" realtime />]}
                      />
                    )
                  },
                  {
                    key: 'email',
                    label: 'Login with Email',
                    children: <FormInfo column={1} list={[<Input name="email" label="email" labelHidden rule="REQ EMAIL" realtime />]} />
                  }
                ]}
              />
              <Row gutter={12}>
                <Col flex={1}>
                  <Input name="code" label="Verification code" rule="REQ" prefix={<Icon type="icon-color-leapin-password" colorful />} />
                </Col>
                <Col>
                  <VerificationCodeButton
                    key={loginType}
                    onClick={async () => {
                      return onSend && (await onSend({ data: formRef.current.data }));
                    }}
                    type="primary"
                    className={style['code-btn']}
                    ghost
                    shape="round"
                    target={{ name: loginType }}
                  >
                    Send verification code
                  </VerificationCodeButton>
                </Col>
              </Row>
              <Input name="applicant" label="Applicant Name" rule="REQ" />
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
