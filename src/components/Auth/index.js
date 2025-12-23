import { createWithRemoteLoader } from '@kne/remote-loader';
import { useEffect, useRef, useState } from 'react';
import { Flex, Typography, Tabs, Row, Col } from 'antd';
import VerificationCodeButton from '@components/VerificationCodeButton';
import MainPanel from '@components/MainPanel';
import ButtonFooter from '@components/ButtonFooter';
import { createWithIntlProvider, localeLoader, useIntl } from '@kne/react-intl';
import zhCn from './locale/zh-CN';
import enUs from './locale/en-US';
import style from './style.module.scss';

localeLoader('en-US', enUs, 'components-leapin:Auth');

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

const Auth = createWithIntlProvider(
  'zh-CN',
  zhCn,
  'components-leapin:Auth'
)(
  createWithRemoteLoader({
    modules: ['components-core:FormInfo', 'components-core:Icon']
  })(({ remoteModules, className, title, onSend, data, activeTypes = ['phone', 'email'], onSubmit, tips, privacyUrl }) => {
    const [FormInfo, Icon] = remoteModules;
    const { Form, SubmitButton } = FormInfo;
    const { Input, PhoneNumber, Checkbox } = FormInfo.fields;
    const formRef = useRef();
    const [loginType, setLoginType] = useState(activeTypes[0]);
    const { formatMessage } = useIntl();
    const tabs = {
      email: {
        key: 'email',
        label: formatMessage({ id: 'loginWithEmail' }),
        children: loginType === 'email' && (
          <FormInfo
            column={1}
            list={[<Input name="email" label={formatMessage({ id: 'email' })} disabled={data.email} labelHidden rule="REQ EMAIL" realtime />]}
          />
        )
      },
      phone: {
        key: 'phone',
        label: formatMessage({ id: 'loginWidthSMS' }),
        children: loginType === 'phone' && (
          <FormInfo
            column={1}
            list={[
              <PhoneNumber
                name="phone"
                label={formatMessage({ id: 'phone' })}
                disabled={data.phone}
                labelHidden
                rule="REQ"
                format="string"
                realtime
              />
            ]}
          />
        )
      }
    };

    const items = activeTypes.map(name => tabs[name]).filter(item => !!item);

    return (
      <MainPanel className={className} title={title}>
        <Form ref={formRef} data={data} size="large" onSubmit={onSubmit}>
          <SetFormData data={data} />
          <Flex gap={40} vertical align="center" className={style['gap-container']}>
            <Flex gap={20} vertical>
              <div className={style['tips']}>{tips || formatMessage({ id: 'tips' })}</div>
              <div className={style['form-inner']}>
                <Tabs activeKey={loginType} onChange={setLoginType} items={items} />
                <Row gutter={12} wrap={false}>
                  <Col flex={1}>
                    <Input
                      name="code"
                      label={formatMessage({ id: 'verificationCode' })}
                      rule="REQ"
                      prefix={<Icon type="icon-color-leapin-password" colorful />}
                    />
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
                      {formatMessage({ id: 'send' })}
                    </VerificationCodeButton>
                  </Col>
                </Row>
                <Input name="applicant" label={formatMessage({ id: 'applicantName' })} rule="REQ" disabled={data.applicant} />
              </div>
            </Flex>

            <Checkbox name="privacyChecked" label={formatMessage({ id: 'privacy' })} labelHidden rule="REQ">
              {formatMessage(
                { id: 'termsContent' },
                {
                  link: <Typography.Link href={privacyUrl}>{formatMessage({ id: 'terms' })}</Typography.Link>
                }
              )}
            </Checkbox>
            <ButtonFooter>
              <SubmitButton type="primary" shape="round" size="large">
                {formatMessage({ id: 'submit' })}
              </SubmitButton>
            </ButtonFooter>
          </Flex>
        </Form>
      </MainPanel>
    );
  })
);

export default Auth;
