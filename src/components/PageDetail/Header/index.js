import { Flex, Button, Space, Row, Col } from 'antd';
import classnames from 'classnames';
import style from './style.module.scss';

const Header = ({ className, name, options = [], buttons = [] }) => {
  return (
    <div className={classnames(style['card'], className)}>
      <Row align="center">
        <Col flex={1}>
          <Flex vertical gap={12}>
            <div className={style['title']}>{name}</div>
            <Flex gap={20}>
              {options.map((item, index) => {
                return (
                  <Flex gap={4} key={index} align="center">
                    {item.icon}
                    <span>{item.children}</span>
                  </Flex>
                );
              })}
            </Flex>
          </Flex>
        </Col>
        <Col className={style['right-options']}>
          <Space>
            {buttons.length > 0 &&
              buttons.map((props, index) => {
                return <Button {...props} size="large" shape="round" key={index} />;
              })}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
