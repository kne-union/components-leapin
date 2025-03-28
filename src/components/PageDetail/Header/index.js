import { createWithRemoteLoader } from '@kne/remote-loader';
import { Flex, Button, Space } from 'antd';
import classnames from 'classnames';
import style from './style.module.scss';

const Header = ({ remoteModules, className, name, options = [], buttons = [] }) => {
  return (
    <div className={classnames(style['card'], className)}>
      <Flex justify="space-between" align="center">
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
        <Space>
          {buttons.length > 0 &&
            buttons.map((props, index) => {
              return <Button {...props} size="large" shape="round" key={index} />;
            })}
        </Space>
      </Flex>
    </div>
  );
};

export default Header;
