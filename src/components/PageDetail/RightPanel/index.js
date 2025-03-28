import { Carousel, Flex, Button } from 'antd';
import { createWithRemoteLoader } from '@kne/remote-loader';
import style from './style.module.scss';

const RightPanel = createWithRemoteLoader({
  modules: ['components-core:Image']
})(({ remoteModules, images = [], logo, name, options = [], homepage }) => {
  const [Image] = remoteModules;
  return (
    <div className={style['card']}>
      <Flex vertical gap={20}>
        {images.length > 0 && (
          <Carousel arrows autoplay className={style['images']}>
            {images.map((image, index) => {
              return (
                <div key={index}>
                  <Image {...image} className={style['image-item']} />
                </div>
              );
            })}
          </Carousel>
        )}
        <Flex gap={12} align="center">
          {logo && <Image.Avatar {...logo} size={52} />}
          <div className={style['company-name']}>{name}</div>
        </Flex>
        {options.length > 0 && (
          <Flex gap={12} vertical>
            {options.map((item, index) => {
              return (
                <Flex gap={4} align="center" key={index}>
                  {item.icon}
                  <span>{item.children}</span>
                </Flex>
              );
            })}
          </Flex>
        )}

        {homepage && (
          <Button shape="round" size="large" href={homepage} target="_blank">
            Learn more about us
          </Button>
        )}
      </Flex>
    </div>
  );
});

export default RightPanel;
