import { Space, Divider, Flex } from 'antd';
import { createWithRemoteLoader } from '@kne/remote-loader';
import style from './style.module.scss';

const Detail = createWithRemoteLoader({
  modules: ['components-core:Icon']
})(({ remoteModules, title = 'Detail', sections = [] }) => {
  const [Icon] = remoteModules;
  return (
    <div className={style['card']}>
      <div className={style['title']}>
        <div className={style['title-content']}>{title}</div>
        <Divider className={style['divider']} />
      </div>
      <div className={style['body']}>
        <Space direction="vertical" split={<Divider className={style['divider']} />}>
          {sections.map((item, index) => {
            return (
              <Flex vertical key={index}>
                <Flex className={style['block-title']} gap={4} align="center">
                  <Icon type="icon-color-leapin-title-tag" colorful size={14} />
                  {item.title}
                </Flex>
                <div className={style['block-content']}>{item.children}</div>
              </Flex>
            );
          })}
        </Space>
      </div>
    </div>
  );
});

export default Detail;
