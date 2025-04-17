import classnames from 'classnames';
import { Flex } from 'antd';
import defaultImage from './default.png';
import style from './style.module.scss';

const MainPanel = ({ className, image, title, children }) => {
  return (
    <Flex className={classnames(style['card'], className)} vertical gap={32} align="center">
      <div className={style['title']} style={{ '--image-url': `url(${image || defaultImage})` }}>
        <div className={style['title-inner']}>{title}</div>
      </div>
      <div className={style['content']}>{children}</div>
    </Flex>
  );
};

export default MainPanel;
